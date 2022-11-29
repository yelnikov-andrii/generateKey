const str = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, characters) => {
  const lenghtOfCharacters = characters.length;
  let res = '';

  for (let i = 0; i < length; i++) {
    const randomCharPosition = Math.round(Math.random() * lenghtOfCharacters);
    res += characters[randomCharPosition];
  }

  return res;
}

const key = generateKey(10, str);

console.log(key);

let users = [
  {
  "index": 0,
  "isActive": true,
  "balance": "$2,226.60",
  "name": "Eugenia Sawyer",
  "gender": "female",
  "phone": "+1 (840) 583-3207",
  "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
  "index": 1,
  "isActive": true,
  "balance": "$2,613.77",
  "name": "Pauline Gallegos",
  "gender": "female",
  "phone": "+1 (985) 593-3328",
  "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
  "index": 2,
  "isActive": false,
  "balance": "$3,976.41",
  "name": "Middleton Chaney",
  "gender": "male",
  "phone": "+1 (995) 591-2478",
  "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
  "index": 3,
  "isActive": true,
  "balance": "$1,934.58",
  "name": "Burns Poole",
  "gender": "male",
  "phone": "+1 (885) 559-3422",
  "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
  "index": 4,
  "isActive": true,
  "balance": "$3,261.65",
  "name": "Mcfadden Horne",
  "gender": "male",
  "phone": "+1 (942) 565-3988",
  "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
  "index": 5,
  "isActive": false,
  "balance": "$1,790.56",
  "name": "Suzette Lewis",
  "gender": "female",
  "phone": "+1 (837) 586-3283",
  "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
  ];

const phones = users.filter(user => user.balance.slice(1).split(',').join('') > 2000).map(user => user.phone);
const sumOfBalance =users.reduce((sum, user) => sum + +user.balance.slice(1).split(',').join(''), 0);


console.log(sumOfBalance);
console.log(phones);

for (let i = 20; i <= 30; i+=0.5) {
  console.log(i);
};

const dollarRate = 27;

for (let i = 10; i <= 100; i+= 10) {
  console.log(dollarRate * i);
};

const n = 369;

for (let i = 0; i <= 100; i++) {
  if (i ** 2 <= n) {
    console.log(i);
  }
}

const ifTheNumberIsSimple = (number) => {
  let count = 0;
  for (let i = 1; i <= 9; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  if (count > 2) {
    return false;
  } 

  return true;
}

const check1 = ifTheNumberIsSimple(7);
const check2 = ifTheNumberIsSimple(8);

console.log(check1, check2);

const checkNumberKratneThree = (number) => {
  let copy = number;

  while (copy > 3) {
    copy /= 3;
    if (copy % 3 !== 0) {
      return false;
    }
  }

  if (copy === 3) {
    return true;
  }

  return false;
}

const check3 = checkNumberKratneThree(81);
const check4 = checkNumberKratneThree(100);

console.log(check3, check4);