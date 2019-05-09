const fs = require("fs");

const writeTextAsync = (path, text) =>
  new Promise((res, rej) => {
    fs.writeFile(path, text, "utf8", err => {
      if (err) {
        rej(err);
      } else {
        res(null);
      }
    });
  });

const writeJson = (path, obj) =>
  fs.writeFile(path, JSON.stringify(obj), err => console.log(err));

const writeJsonAsync = (path, obj) =>
  new Promise((res, rej) => {
    fs.writeFile(path, JSON.stringify(obj), err => {
      if (err) {
        rej(err);
      } else {
        res(null);
      }
    });
  });

const readFile = (path, opts = "utf8") =>
  new Promise((res, rej) => {
    fs.readFile(path, opts, (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });

const readJsonFile = async path => JSON.parse(await readFile(path));

// Return sorted copy of number array
const sortNums = arr => [...arr].sort((a, b) => a - b);

// Insert spaces in camelCaseText
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
