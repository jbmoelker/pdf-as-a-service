const express = require('express');
const fs = require('fs');
const shell = require('shelljs');
const url = require('url');

const app = express();
const port = process.env.PORT || 7337; // "PDFs" is 7337 in T9

app.get('/', (req, res) => fs.createReadStream('index.html').pipe(res));

app.get('/download/', (req, res) => {
    // todo: validate query.url and other params
    const host = url.parse(req.query.url, true).host;
    // todo: also use pathname and ... in basename
    const basename = host.replace(/\./g, '-');
    const filename =  `temp/${basename}.pdf`;
    shell.exec(`electron . ${req.query.url} --output ${filename}`);
    res.download(filename, `${basename}.pdf`);

    //const pdf = shell.exec(`electron . ${req.query.url} --output ${filename}`);
    //res.setHeader('Content-disposition', `attachment; filename=${basename}.pdf`);
    //res.setHeader('Content-type', 'application/pdf');
    // todo: turn pdf into stream and pipe to res?
});

app.listen(port, function () {
  console.log(`App running on port http://localhost:${port}!`)
});