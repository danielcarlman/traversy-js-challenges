function highestScoringWord(str) {
  const words = str.split(" ");
  const scores = words.map((word) =>
    word
      .split("")
      .reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0)
  );
  const highestScore = Math.max(...scores);
  const winnerIdx = scores.indexOf(highestScore);
  return words[winnerIdx];
}

module.exports = highestScoringWord;
