"use strict";

const seq = f => n => typeof n === "function" ? seq(g => f(n(g))) : f(n);

// const f1 = x => x + 7;
// const f2 = x => x * 2;
// const f = seq(f1)(f2);
// const x = 0;
// const y = f(x);
// const expected = 7;
// if (y !== expected) {
//   const msg = `seq(${f1})(${f2})(${x})`;
//   throw new Error(`${msg} === ${y} expected: ${expected}`);
// }

// f(n(g))
//
module.exports = { seq };
