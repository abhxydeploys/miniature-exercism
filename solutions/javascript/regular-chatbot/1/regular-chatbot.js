// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */
export function isValidCommand(command) {
  const commandRegex = /^chatbot\b/i;
  return commandRegex.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const emojiRegex = new RegExp("emoji\\d+", "g");
  return message.replace(emojiRegex, "");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const phoneRegex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;

  if (phoneRegex.test(number)) {
    return "Thanks! You can now download me to your phone.";
  }

  return `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const urlRegex = /\b[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)+\b/g;
  return userInput.match(urlRegex);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  return fullName.replace(
    /^\s*([^,]+),\s*(.+?)\s*$/,
    (_, lastName, firstName) => {
      const capitalize = (name) =>
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

      return `Nice to meet you, ${capitalize(firstName)} ${capitalize(lastName)}`;
    },
  );
}
