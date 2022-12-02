const M1 = { A: "rock", B: "paper", C: "scissors" };
const M2 = { X: "rock", Y: "paper", Z: "scissors" };
const S = { rock: 1, paper: 2, scissors: 3 };

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

export function solve(lines: string[]) {
  let total = 0;
  for (let line of lines) {
    let [p, q] = line.split(/ /);

    total += score(p, q);
  }
  return total;
}
