#!/usr/bin/env node
/* eslint-disable indent */
import readlineSync from 'readline-sync';
import * as say from '../src/index.js';

console.log('What number is missing in the progression?');

const index = Math.round(Math.random() * (10 - 5) + 5);
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
const fun5 = (arg) => {
    if (isNaN(res[arg - 1] + progr)) {
        return res[arg + 1] - progr;
    }
    else {
         return res[arg - 1] + progr;
        }
};
let res = func3();

let index2 = Math.round(Math.random() * (res.length - 1 ) + 1);
res[index2] = '..';

for (let n = 0; n < 3; n += 1) {
    //console.log(fun5(index2));
    const num = readlineSync.question(`Question: ${res.join(' ')} \nYour answer: `);
    //console.log(res[index2 - 1] + progr);
    //console.log(index2);
    // console.log(res);
    if (Number(num) === fun5(index2)) {
        console.log('Correct!');
        rand = Math.round(Math.random() * 100);
        progr = Math.round(Math.random() * 10);
        res = func3();
        index2 = Math.round(Math.random() * res.length);
        res[index2] = '..';
       // console.log(res[index2 - 1] + progr);
    } else {
        say.fun(num, fun5(index2), say.name);
        break;
    }
    if (n === 2) {
        say.fun2(say.name);
    }
    
}

