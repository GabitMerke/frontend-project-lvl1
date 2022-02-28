#!/usr/bin/env node
/* eslint-disable indent */
import readlineSync from 'readline-sync';
import * as say from '../src/index.js';

console.log('What is the result of the expression?');
let randNum1 = Math.round(Math.random() * 10);
let randNum2 = Math.round(Math.random() * 10);
const arrOperator = ['-', '+', '*'];
const Func = (a) => {
    if (a === '+') {
        return randNum1 + randNum2;
    }
    if (a === '-') {
        return randNum1 - randNum2;
    }
    return randNum2 * randNum1;
};
for (let n = 0; n < 3; n += 1) {
    const operator = arrOperator[Math.floor(Math.random() * 3)];
    const num = readlineSync.question(`Question: ${randNum1} ${operator} ${randNum2} \nYour answer: `);
if (Number(num) === Func(operator)) {
    console.log('Correct!');
    randNum1 = Math.round(Math.random() * 10);
    randNum2 = Math.round(Math.random() * 10);
} else {
    say.fun(num, Func(operator), say.name);
    break;
}
if (n === 2) {
    say.fun2(say.name);
}
}
