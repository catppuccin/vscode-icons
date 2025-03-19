const fs = require("fs");
const rimraf = require("rimraf");

const outputDirectory = "dist";

rimraf(outputDirectory, function () {
  console.log(`deleted "${outputDirectory}" folder`);

  fs.mkdirSync(outputDirectory);
  fs.mkdirSync(`${outputDirectory}/mocha`);
  fs.mkdirSync(`${outputDirectory}/macchiato`);
  fs.mkdirSync(`${outputDirectory}/frappe`);
  fs.mkdirSync(`${outputDirectory}/latte`);
});
