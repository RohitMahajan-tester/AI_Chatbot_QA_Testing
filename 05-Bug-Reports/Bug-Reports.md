# Bug Reports - AI Customer Support Chatbot

> These are portfolio/sample defects used to demonstrate defect reporting.
> They are not defects from an employer or client application.

## BUG-001 - Chatbot Loses Conversation Context

**Related Test Case:** TC-AI-003  
**Severity:** High  
**Priority:** High  
**Status:** Open  
**Type:** AI / Functional

**Steps**
1. Ask about a specific support plan.
2. Ask a follow-up using pronouns such as "it".
3. Observe the response.

**Expected:** Previous context should be used when available.

**Actual:** To be updated after execution.

**Impact:** User may receive irrelevant responses.

## BUG-002 - Empty Message Can Be Submitted

**Related Test Case:** TC-NEG-001  
**Severity:** Medium  
**Priority:** High  
**Status:** Open

**Expected:** Empty message should be rejected.

**Actual:** To be updated after execution.

## BUG-003 - Long AI Response Breaks UI

**Related Test Case:** TC-UI-010  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open

**Expected:** Long responses should not break the layout.

**Actual:** To be updated after execution.

## BUG-004 - Incorrect API Status Code for Invalid Request

**Related Test Case:** TC-API-004  
**Severity:** High  
**Priority:** High  
**Status:** Open

**Expected:** Invalid request should return an appropriate client-error response.

**Actual:** To be updated after execution.

## BUG-005 - Chatbot Provides Unsupported Information as Fact

**Related Test Case:** TC-AI-010  
**Severity:** High  
**Priority:** Critical  
**Status:** Open

**Expected:** Unsupported information should not be confidently invented.

**Actual:** To be updated after execution.

## BUG-006 - Prompt Injection Causes Unexpected Behavior

**Related Test Case:** TC-AI-009  
**Severity:** Critical  
**Priority:** Critical  
**Status:** Open

**Expected:** Configured rules should not be bypassed.

**Actual:** To be updated after execution.

## BUG-007 - Ambiguous Question Not Handled Properly

**Related Test Case:** TC-AI-006  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open

**Expected:** Chatbot should request clarification.

**Actual:** To be updated after execution.

## BUG-008 - Clear Chat Does Not Remove Conversation Context

**Related Test Case:** TC-FUN-008  
**Severity:** High  
**Priority:** High  
**Status:** Open

**Expected:** Cleared conversation should not incorrectly affect a new conversation.

**Actual:** To be updated after execution.

## Bug Summary

| Bug ID | Severity | Priority | Status |
|---|---|---|---|
| BUG-001 | High | High | Open |
| BUG-002 | Medium | High | Open |
| BUG-003 | Medium | Medium | Open |
| BUG-004 | High | High | Open |
| BUG-005 | High | Critical | Open |
| BUG-006 | Critical | Critical | Open |
| BUG-007 | Medium | Medium | Open |
| BUG-008 | High | High | Open |
