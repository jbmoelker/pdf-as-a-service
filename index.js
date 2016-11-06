const printToPdf = require('./lib/print-to-pdf');
const saveFile = require('./lib/save-file');
const pkg = require('./package.json');

const program = require('commander')
    .version(pkg.version)
    .description(`${pkg.name} (v${pkg.version}): ${pkg.description}`)
    .usage('<url> [options]')
	.option('-o, --output [value]', 'Filename to write PDF to')
    .arguments('<url>')
    .parse(process.argv);

const url = program.args[0];

printToPdf(url, {})
  //.then(data => console.log(data))
  .then(pdf => saveFile(program.output, pdf))
  .catch(err => console.error(err));