const M1 = { A: "rock", B: "paper", C: "scissors" };
const M2 = { X: "rock", Y: "paper", Z: "scissors" };
const S = { rock: 1, paper: 2, scissors: 3 };
const Q = { X: -1, Y: 0, Z: 1 };

const W = {
  "rock,paper": 1,
  "paper,scissors": 1,
  "scissors,rock": 1,
  "paper,rock": -1,
  "scissors,paper": -1,
  "rock,scissors": -1,
  "rock,rock": 0,
  "paper,paper": 0,
  "scissors,scissors": 0,
};

const W2 = {
  "rock,1": "paper",
  "paper,1": "scissors",
  "scissors,1": "rock",
  "paper,-1": "rock",
  "scissors,-1": "paper",
  "rock,-1": "scissors",
  "rock,0": "rock",
  "paper,0": "paper",
  "scissors,0": "scissors",
};

const SCORE = new Map([
  [-1, 0],
  [0, 3],
  [1, 6],
]);

function score(p, q): number {
  return S[M2[q]] + SCORE.get(W[M1[p] + "," + M2[q]]);
}

function score2(p, q): number {
  let w = Q[q];
  return S[W2[M1[p] + "," + w]] + SCORE.get(w);
}

export function solve(lines: string[], part = 1) {
  let total = 0;
  for (let line of lines) {
    let [p, q] = line.split(/ /);

    if (part === 1) {
      total += score(p, q);
    } else {
      total += score2(p, q);
    }
  }
  return total;
}
