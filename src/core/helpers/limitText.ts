export default function limitText(
  wholeString: string,
  charsLimit: number,
): string {
  if (wholeString.length <= charsLimit) {
    return wholeString;
  }

  let lastBlankIndex;

  Array.from(wholeString).forEach((char, i) => {
    if (char === ' ' && i <= charsLimit + 1) {
      lastBlankIndex = i;
    }
  });

  if (lastBlankIndex) {
    return wholeString.substring(0, lastBlankIndex).concat('...');
  }

  return wholeString;
}
