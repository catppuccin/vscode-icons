const package = require("./package.json");
const codepoints = require("./mapping.json");

const flavours = ["mocha", "macchiato", "frappe", "latte"];

module.exports = {
  name: `catppuccin-code-icons`,
  prefix: `catppuccin-code-icons`,
  codepoints: codepoints,
  inputDir: `./icons`,
  outputDir: "./dist",
  fontTypes: ["ttf"],
  normalize: true,
  assetTypes: ["css", "html"],
  formatOptions: {
    ttf: {
      // url: package.url,
      description: package.description,
      version: package.fontVersion,
    },
  },
};
