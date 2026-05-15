export function hey(message: string): string {
  const msg = message.trim();

  // 1. Check if the message is empty (Silence)
  if (msg === "") {
    return "Fine. Be that way!";
  }

  // 2. Determine if the user is shouting
  // Must contain letters and be equal to its uppercase version
  const isShouting = /[a-z]/i.test(msg) && msg === msg.toUpperCase();
  
  // 3. Determine if the user is asking a question
  const isQuestion = msg.endsWith("?");

  // 4. Combine conditions based on the priority instructions
  if (isShouting && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isShouting) {
    return "Whoa, chill out!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  // 5. Default response
  return "Whatever.";
}
