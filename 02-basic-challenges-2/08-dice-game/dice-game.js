function diceGameSimulation(numSimulations) {
  let randomNum = () => Math.ceil(Math.random() * 6);
  let result = "";
  const simulations = [];
  const odds = {
    2: "lose",
    3: "lose",
    7: "win",
    11: "win",
    12: "lose",
  };

  for (let i = 0; i < numSimulations; i++) {
    let dice1 = randomNum();
    let dice2 = randomNum();
    let sum = dice1 + dice2;
    result = odds[sum] ? odds[sum] : "roll again";

    simulations[i] = {
      dice1,
      dice2,
      sum,
      result,
    };
  }
  return simulations;
}

module.exports = diceGameSimulation;
