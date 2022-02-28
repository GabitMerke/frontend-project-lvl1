#!/usr/bin/env node
/* eslint-disable indent */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

export const fun = (num, F, argName) => console.log(`'${num}' is wrong answer ;(. Correct answer was '${F}'.\n Let's try again, ${argName}!`);
export const fun2 = (arg) => console.log(`Congratulations, ${arg}!`);
