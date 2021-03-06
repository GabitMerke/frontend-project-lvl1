#!/usr/bin/env node
/* eslint-disable indent */
import readlineSync from 'readline-sync';
import * as say from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

const funPrime = (n) => {
    let flag = true;
    for (let i = 2; i < n; i += 1) {
        if (n % i === 0) {
            flag = false;
            break;
        }
    }
    return flag === true ? 'yes' : 'no';
};
for (let n1 = 0; n1 < 3; n1 += 1) {
    const rand = Math.round(Math.random() * (100 - 2) + 2);
    const num = readlineSync.question(`Question: ${rand} \nYour answer: `);
    if (funPrime(rand) === num) {
        console.log('Correct!');
    } else {
        say.fun(num, funPrime(rand), say.name);
        break;
    }
    if (n1 === 2) {
        say.fun2(say.name);
    }
}
