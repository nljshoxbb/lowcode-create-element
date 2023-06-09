import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import InitFunc from "./base";

export default async (answers) => {
  new InitFunc({
    argv: yargs(hideBin(process.argv)).argv,
    answers,
    templatePkg: "lowcode-template-plugin",
    prefix: "lowcode-plugin",
  }).init();
};
