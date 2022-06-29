#! /usr/bin/env node

const fs = require("fs");
const { program } = require("commander");
const { version, description } = require("./package.json");

const extractClasses = (keyword, string) => {
  const regex = new RegExp(`${keyword}=("|')(.*?)("|')`, "g");
  return [
    ...new Set(
      [].concat(
        ...string
          .match(regex)
          .map((x) => x.slice(keyword.length + 2, x.length - 1).split(" "))
      )
    ),
  ];
};

program
  .version(version)
  .description(description)
  .option(
    "-k, --keyword <keyword>",
    "The keyword to search for the attribute in the file (default: class)"
  )
  .option("-i, --input <file>", "Input file (required)")
  .option(
    "-o, --output <file>",
    "Output file (optional) (default: <input-filename>.css))"
  );

program.parse();

let { keyword, input, output } = program.opts();

if (!fs.existsSync(input)) {
  console.error(`Input file ${input} does not exist`);
  process.exit(1);
}

if (!keyword) {
  keyword = "class";
}

if (!output) {
  output = input.replace(/\.[^/.]+$/, "") + ".css";
}

if (!fs.existsSync(output)) {
  fs.writeFileSync(output, "");
}

const inputContent = fs.readFileSync(input, "utf8");

const classes = extractClasses(keyword, inputContent);

fs.appendFileSync(
  output,
  classes
    .map(
      (singleClass) => `.${singleClass} {

}
`
    )
    .join("")
);

console.log("Created Successfully!");
