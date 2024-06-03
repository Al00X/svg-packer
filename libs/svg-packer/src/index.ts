#!/usr/bin/env node
import {program} from 'commander';
import { error, setLoggerFlag } from './lib/log';
import { ExtractIconsCmd } from './lib/extract-icons';
import chalk from 'chalk';

// print a new line for a better formatted command line!
console.log('');

// todo: file name, type decelation name, type file output path, force

program
  .name('svg-packer')
  .description('Packages multiple svg files into a single SVG')
  .showHelpAfterError(chalk.gray("run 'svg-packer --help' for more information about this command\n"))

program.configureOutput({
  outputError: (str) => error(str)
})

program
  .requiredOption('-i, --input <path-dir>', 'Directory to search for SVG files')
  .requiredOption('-o, --output <path-dir>', 'Directory to output the packed-SVG file')

program
  .option('-v, --verbose', 'Log additional information to the console', false)
  .option('-f, --force', "Don't check for changes and force the generate process", false)
  .option('-to --type-output <string>', 'Type declaration (d.ts) file, separate output')
  .option('-t, --type-name <string>', '"Type" name of the generated declaration (d.ts) file', 'IconName')
  .option('-n --filename <string>', 'Filename of the generated packed svg file', 'svg-packed')
  .option('-tn --type-filename <string>', 'Filename of the generated declaration (d.ts) file', 'svg-packed-names')

program.parse();

main().then(() => {
  console.log('');
});

async function main() {
  const opts = program.opts() as any;
  setLoggerFlag(opts.verbose)

  await new ExtractIconsCmd(opts.input, opts.output, {
    force: opts.force ?? false,
    typeOutput: opts.typeOutput,
    typeName: opts.typeName,
    typeFilename: opts.typeFilename,
    svgFilename: opts.filename
  }).execute();
}
