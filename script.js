const messageInput = document.getElementById("message-input");
const checkButton = document.getElementById("check-message-btn");
const resultMessage = document.getElementById("result-message");

const helpRegex =
  /help|support|assist|aid|issue|problem|question|inquiry|help me|need help/i;
const dollarRegex = /[0-9]*\s*(?:dollars|bucks|euros|pounds|cash|money)/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const winRegex = /win(?:ner|ning)?|won|prize|reward|congratulations|claim/i;
const urgentRegex =
  /urgent|immediate action|asap|act now|limited time|don't miss/i;
const clickRegex =
  /click here|visit (?:my )?website|follow this link|link below/i;
const subscribeRegex = /subscribe|sign up|join now|become a member/i;
const investmentRegex = /investment/i;
const lotteryRegex =
  /[0-9]\s*(?:Hundresd|Thousands|Millions|Billions)?\s+dollars/i;

const denyList = [
  helpRegex,
  dollarRegex,
  freeRegex,
  winRegex,
  urgentRegex,
  clickRegex,
  subscribeRegex,
  investmentRegex,
  lotteryRegex,
];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message to check.");
    return;
  }

  resultMessage.textContent = isSpam(messageInput.value)
    ? "This message is likely SPAM.  🚫"
    : "This message seems legitimate.  ✅";
  messageInput.value = "";
});
