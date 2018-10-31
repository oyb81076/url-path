const fs = require("fs");
const path = require("path")
const pkg = require("../package.json")
const { devDependencies, scripts, private, ...props } = pkg
props.main = "index.js"
props.module = "url-path.js"
fs.writeFileSync(
  path.join(__dirname, "../build/package.json"),
  JSON.stringify(props, null, 2),
  { encoding: "utf-8" }
)
