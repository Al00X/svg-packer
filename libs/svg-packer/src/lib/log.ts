import chalk from 'chalk';

let isDebug = process.argv.includes('--debug');

export function setLoggerFlag(debug: boolean) {
  isDebug = debug;
}

export const log = (...data: any[]) => {
  console.log(chalk.bgGray(' SVG-PACKER '), ...data.map(t => typeof t === 'string' ? chalk.white(t) : t))
}

export const success = (...data: any[]) => {
  console.log(chalk.bgGreen(chalk.black(' SVG-PACKER ')), ...data.map(t => typeof t === 'string' ? chalk.green(t) : t))
}

export const debug = isDebug ? (...data: any[]) => {
  console.log(...data.map(t => typeof t === 'string' ? chalk.gray(t) : t))
} : () => {};

export const error = (...data: any[]) => {
  console.error(chalk.bgRed(' SVG-PACKER '),...data.map(t => typeof t === 'string' ? chalk.red(t) : t))
};

export const warn = (...data: any[]) => {
  console.error(...data.map(t => typeof t === 'string' ? chalk.yellow(t) : t))
};
