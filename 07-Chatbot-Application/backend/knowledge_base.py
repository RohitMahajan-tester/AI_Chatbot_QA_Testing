KNOWLEDGE_BASE = {
    "company": {
        "name": "Demo Support Hub",
        "description": "A fictional customer-support platform created for QA testing."
    },
    "support_hours": {
        "weekdays": "Monday to Friday",
        "time": "9:00 AM to 6:00 PM",
        "timezone": "IST"
    },
    "support_channels": ["Chat support", "Email support"],
    "password_reset": {
        "available": True,
        "steps": [
            "Open the login page.",
            "Select 'Forgot Password'.",
            "Enter your registered email address.",
            "Follow the password reset instructions."
        ]
    },
    "billing": {
        "supported_topics": [
            "Billing questions",
            "Invoice questions",
            "Payment status"
        ]
    },
    "refund_policy": {
        "available": True,
        "message": "Refund requests are reviewed according to the applicable order and refund policy."
    }
}

def get_knowledge_context():
    return str(KNOWLEDGE_BASE)
