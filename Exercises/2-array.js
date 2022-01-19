"use strict";

const array = () => {
  const arr = [];
  const arrFn = i => {
    return arr[i];
  };
  arrFn.push = value => arr.push(value);
  arrFn.pop = () => arr.pop();
  return arrFn;
};

module.exports = { array };
