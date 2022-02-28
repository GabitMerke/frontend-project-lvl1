#!/usr/bin/env node
/* eslint-disable indent */
import readlineSync from 'readline-sync';
import * as say from '../src/index.js';

let randNum1 = Math.round(Math.random() * 10);
let randNum2 = Math.round(Math.random() * 10);

const NOD = (x, y) => {
if (y > x) return NOD(y, x);
if (!y) return x;
return NOD(y, x % y);
};
for (let n = 0; n < 3; n += 1) {
    const num = readlineSync.question(`Question: ${randNum1} ${randNum2} \nYour answer: `);
    if (Number(num) === NOD(randNum1, randNum2)) {
        console.log('Correct!');
        randNum1 = Math.round(Math.random() * 10);
        randNum2 = Math.round(Math.random() * 10);
} else {
    say.fun(num, NOD(randNum1, randNum2), say.name);
    break;
}
    if (n === 2) {
        say.fun2(say.name);
    }
}
