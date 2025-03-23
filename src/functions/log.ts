import colors from "colors";

const success = (text: string) => {
  return console.log(colors.green(text));
};

const warning = (text: string) => {
  return console.log(colors.yellow(text));
};

const error = (text: string) => {
  return console.log(colors.red(text));
};

const info = (text: string) => {
  return console.log(colors.cyan(text));
};

const log = {
  success,
  warning,
  error,
  info,
};

export default log;