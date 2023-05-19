import lorem from "../db/lorem.json";

export const loremGenerator = (number) => {
  const newLorem = lorem.lorem.toLowerCase().split(" ");
  let newString = "";

  for (let index = 0; index < number; index++) {
    newString += newLorem[getRandomNumber(0, newLorem.length - 1)];
    if (index < number - 2) {
      newString += " ";
    }
  }
  newString = newString.charAt(0).toUpperCase() + newString.substring(1);
  return newString;
};

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const idGenerator = () => {
  const timestamp = Date.now().toString(16);
  const randomId = Math.random().toString(16).substring(2, 10);
  const uniqueId = `${timestamp}${randomId}`.padEnd(16, "0");

  return uniqueId;
};
