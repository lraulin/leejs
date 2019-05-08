const fs = require("fs");

const writeToFile = (text, file) => {
  if (typeof text !== "string") text = JSON.stringify(text);
  const stream = fs.createWriteStream(file, { flags: "a" });
  stream.write(text + "\n");
  stream.end();
};

// Return sorted copy of number array
const sortNums = arr => [...arr].sort((a, b) => a - b);

const camelSpace = text => text.replace(/([a-z])([A-Z])/g, "$1 $2");

const capitalize = word => word[0].toUpperCase() + word.slice(1);

const camelToTitle = text =>
  camelSpace(text)
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");

const formatDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${month}/${day}/${year}`;
};

module.exports = {
  writeToFile,
  sortNums,
  capitalize,
  camelToTitle,
  formatDate,
};
