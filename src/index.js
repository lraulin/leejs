const fs = require("fs");

const writeToFile = (text, file) => {
  if (typeof text !== "string") text = JSON.stringify(text);
  const stream = fs.createWriteStream(file, { flags: "a" });
  stream.write(text + "\n");
  stream.end();
};

const sortNums = arr => [...arr].sort((a, b) => a - b);

module.exports = { writeToFile, sortNums };
