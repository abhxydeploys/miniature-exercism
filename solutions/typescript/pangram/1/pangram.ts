export function isPangram(sentence: string): boolean {
  // Normalize to lowercase
  const lower = sentence.toLowerCase();

  // Create a Set of all letters found
  const letters = new Set<string>();

  for (const char of lower) {
    if (char >= 'a' && char <= 'z') {
      letters.add(char);
    }
  }

  // A pangram must contain all 26 letters
  return letters.size === 26;
}
