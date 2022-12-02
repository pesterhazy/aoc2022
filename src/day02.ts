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

function winner(s1, s2): number {
  let ky = s1 + "," + s2;
  let r = W[ky];

  if (r === undefined) throw "boom: " + ky;

  return r;
}

function score(p, q): number {
  let w = winner(M1[p], M2[q]);
  let s = S[M2[q]];
  if (s === undefined) throw "ouch: " + q;

  if (w === -1) s += 0;
  else if (w === 0) s += 3;
  else s += 6;

  return s;
}

function score2(p, q): number {
  let w = Q[q];
  if (w === undefined) throw "AAA";

  let rr = W2[M1[p] + "," + w];
  if (rr === undefined) throw "BBB";

  let s = S[rr];

  if (w === -1) s += 0;
  else if (w === 0) s += 3;
  else s += 6;

  return s;
}

export function solve(lines: string[]) {
  let total = 0;
  for (let line of lines) {
    let [p, q] = line.split(/ /);

    total += score(p, q);
  }
  return total;
}

export function solve2(lines: string[]) {
  let total = 0;
  for (let line of lines) {
    let [p, q] = line.split(/ /);

    total += score2(p, q);
  }
  return total;
}
