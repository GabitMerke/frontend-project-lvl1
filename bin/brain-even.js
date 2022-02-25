#!/usr/bin/env node
/* eslint-disable indent */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}! \nAnswer "yes" if the number is even, otherwise answer "no".`);
let randNum = Math.round(Math.random() * 100);

for (let n = 0; n < 3; n += 1) {
    const num = readlineSync.question(`Question: ${randNum} \nYour answer: `);
if (randNum % 2 === 0 && num === 'yes') {
    console.log('Correct!');
    
    randNum = Math.round(Math.random() * 100);
} else if (randNum % 2 !== 0 && num === 'no') {
    console.log('Correct!');
 
    randNum = Math.round(Math.random() * 100);
} else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'. \n Let\'s try again, Bill!');
break;
}
if (n === 2) {
    console.log(`Congratulations, ${name}!`);
}
}