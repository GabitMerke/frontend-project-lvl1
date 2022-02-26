#!/usr/bin/env node
/* eslint-disable indent */
import * as say from '../src/index.js';
import readlineSync from 'readline-sync';

console.log('What number is missing in the progression?');

let index = Math.round(Math.random() * (10 - 5) + 5);
let rand = Math.round(Math.random() * 100);
let progr = Math.round(Math.random() * 10);

const func3 = () => {
    const arr = [];
    while (arr.length != index) {
        arr.push(rand + progr);
        rand += progr;
    }
    return arr;
};
let res = func3();

let index2 = Math.round(Math.random() * res.length);
res[index2] = '..';

for (let n = 0; n < 3; n += 1) {
    const num = readlineSync.question(`Question: ${res} \nYour answer: `);
    
    if (Number(num) == res[index2 - 1] + progr) {
        console.log('Correct!');
        rand = Math.round(Math.random() * 100);
        progr = Math.round(Math.random() * 10);
        res = func3();
        index2 = Math.round(Math.random() * res.length);
        res[index2] = '..';
    } else {
        say.fun(num, res[index2 - 1] + progr, say.name);
        break;
    }
    if (n === 2) {
        say.fun2(say.name);
    }
    
}
