'use strict';

const seq = (f) => {
    const fnArr = [];
    if (typeof f === "function") {
        fnArr.push(f);
        return g => {
          if (typeof g === "function") {
            
          }
          seq(g)
        }; 
    } 
    if (typeof f === "number") {
        
    }
    (g) => (x) => 0
};

module.exports = { seq };
