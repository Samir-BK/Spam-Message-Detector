# Spam Message Detector

A simple JavaScript-based spam detection tool that uses regular expressions to identify potentially suspicious messages.

## Overview

This project provides a client-side spam filter that checks text messages against common spam patterns. It's designed to help users identify potentially malicious or unwanted messages before engaging with them.

## Features

- **Real-time Detection**: Instantly checks messages when you click the check button
- **Pattern Matching**: Uses multiple regex patterns to identify spam characteristics
- **User-friendly Interface**: Simple input/output design with clear visual feedback
- **No External Dependencies**: Pure vanilla JavaScript implementation

## Spam Detection Patterns

The detector identifies messages containing:

- **Help/Support scams**: Phrases like "need help", "support", "assist"
- **Money mentions**: References to dollars, euros, pounds, cash
- **Free money schemes**: "Free money" (including leetspeak variations)
- **Prize/Winning claims**: "Winner", "prize", "congratulations", "claim"
- **Urgency tactics**: "Urgent", "act now", "limited time"
- **Suspicious links**: "Click here", "visit website", "follow this link"
- **Subscription pushes**: "Subscribe", "sign up", "join now"
- **Investment schemes**: Generic investment mentions
- **Lottery scams**: Large monetary amounts (hundreds, thousands, millions)

## Usage

### HTML Structure Required

```html
<input type="text" id="message-input" placeholder="Enter message to check" />
<button id="check-message-btn">Check Message</button>
<div id="result-message"></div>
```

### How It Works

1. User enters a message in the input field
2. Clicks the "Check Message" button
3. The script tests the message against all spam patterns
4. Displays result: either "This message is likely SPAM. 🚫" or "This message seems legitimate. ✅"
5. Input field is cleared for the next check

## Installation

Simply include the JavaScript file in your HTML:

```html
<script src="spam-detector.js"></script>
```

Or paste the code directly into a `<script>` tag in your HTML file.

## Limitations

- **Client-side only**: No server-side validation or machine learning
- **Pattern-based**: May produce false positives for legitimate messages containing flagged words
- **Static rules**: Doesn't learn or adapt to new spam patterns
- **Case-insensitive matching**: May miss sophisticated obfuscation techniques

## Customization

To add new spam patterns, simply add a new regex to the `denyList` array:

```javascript
const customPattern = /your-pattern-here/i;
const denyList = [
  // ... existing patterns
  customPattern,
];
```

## Browser Compatibility

Works in all modern browsers that support:

- ES6 JavaScript
- DOM manipulation methods
- Regular expressions

## License

Free to use and modify for personal or commercial projects.
