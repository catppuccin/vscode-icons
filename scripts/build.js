const { generateFonts } = require("fantasticon");
const args = require("minimist")(process.argv.slice(1));
const package = require("../package.json");
const codepoints = require("../mapping.json");

const opts = {
  name: `catppuccin-code-icons`,
  prefix: `catppuccin-${args.flavour}`,
  codepoints: codepoints,
  inputDir: `./icons/${args.flavour}`,
  outputDir: `./dist/${args.flavour}`,
  fontTypes: ["ttf"],
  normalize: true,
  assetTypes: ["css", "html"],
  formatOptions: {
    ttf: {
      url: package.url,
      description: package.description,
      version: package.fontVersion,
    },
  },
};

generateFonts(opts);
