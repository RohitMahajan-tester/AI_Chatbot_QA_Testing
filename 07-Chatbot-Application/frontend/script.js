const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");
const clearChatButton = document.getElementById("clearChat");
const sendButton = document.getElementById("sendButton");
const loadingIndicator = document.getElementById("loadingIndicator");
const errorMessage = document.getElementById("errorMessage");

const API_URL = "http://127.0.0.1:5000/api/chat";
let conversationHistory = [];

function addMessage(sender, message) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("message",
        sender === "user" ? "user-message" : "bot-message");

    const label = document.createElement("div");
    label.classList.add("message-label");
    label.textContent = sender === "user" ? "You" : "AI Assistant";

    const content = document.createElement("div");
    content.classList.add("message-content");
    content.textContent = message;

    wrapper.appendChild(label);
    wrapper.appendChild(content);
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

function hideError() {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
}

async function sendMessage(message) {
    conversationHistory.push({ role: "user", content: message });

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: message,
            history: conversationHistory
        })
    });

    const data = await response.json();

    if (!response.ok) {
        conversationHistory.pop();
        throw new Error(data.error || "Unable to process the request.");
    }

    conversationHistory.push({
        role: "assistant",
        content: data.response
    });

    return data.response;
}

chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    hideError();

    const message = messageInput.value.trim();

    if (!message) {
        showError("Please enter a message.");
        messageInput.focus();
        return;
    }

    addMessage("user", message);
    messageInput.value = "";
    sendButton.disabled = true;
    loadingIndicator.classList.remove("hidden");

    try {
        const botResponse = await sendMessage(message);
        addMessage("bot", botResponse);
    } catch (error) {
        showError(error.message || "Something went wrong. Please try again.");
    } finally {
        loadingIndicator.classList.add("hidden");
        sendButton.disabled = false;
        messageInput.focus();
    }
});

clearChatButton.addEventListener("click", () => {
    chatMessages.innerHTML = "";
    conversationHistory = [];
    addMessage("bot", "Hello! How can I help you today?");
    hideError();
    messageInput.focus();
});
