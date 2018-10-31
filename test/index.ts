import extname from "../src/extname";
import join from "../src/join";
import parse from "../src/parse";
import format from "../src/format";
import basename from "../src/basename";
import dirname from "../src/dirname";
describe("path", () => {
  test("extname", () => {
    expect(extname(__filename)).toEqual(".ts");
  });
  test("extname", () => {
    expect(basename(__filename, ".ts")).toEqual("index");
  });
  test("extname without ext", () => {
    expect(basename(__filename)).toEqual("index.ts");
  });
  test("dirname", () => {
    expect(dirname(__filename)).toEqual(__dirname);
  });
  test("join", () => {
    expect(join("ouay", "", "/", "nick")).toEqual("ouay/nick");
  });
  test("parse", () => {
    const pathObject = parse("http://localhost:22/oyb/n.ts");
    expect(pathObject).toEqual({
      root: "",
      dir: "http://localhost:22/oyb",
      ext: ".ts",
      name: "n",
      base: "n.ts",
    });
  });
  test("format:http", () => {
    const filename = "http://localhost:22/oyb/n.ts";
    expect(filename).toEqual(format(parse(filename)));
  });
  test("format://", () => {
    const filename = "//localhost:22/oyb/n.ts";
    expect(filename).toEqual(format(parse(filename)));
  });
  test("format:/", () => {
    const filename = "/oyb/n.ts";
    expect(filename).toEqual(format(parse(filename)));
  });
});
