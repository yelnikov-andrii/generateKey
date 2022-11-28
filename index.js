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