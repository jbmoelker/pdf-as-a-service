# [PoC] PDF as a Service

**Print and download a web page as PDF.**

This tool is based on [Electron](http://electron.atom.io/)'s [`webContents.printToPDF`](https://github.com/electron/electron/blob/master/docs/api/web-contents.md#contentsprinttopdfoptions-callback) feature.


## Install

PDF as a Service requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/) to be installed.

Clone the project and install the dependencies:

```bash
cd pdf-as-a-service
npm install
```

## Usage

You can use PDF as a Service both as a [Web service](#web-service) and a [CLI tool](#cli-tool):


### Web service

Start server on `http://localhost:7337`:

```bash
npm start
```

Enter the URL of the web page you wish to print and press "Download as PDF".


### CLI 

Print and save webpage on specific `url` to a file (with `filename`):

```bash
bin/print-to-pdf <url> --output <filename>
```

#### Example

```bash
bin/print-to-pdf https://www.voorhoede.nl --output voorhoede.pdf
```

## To do 

* [ ] proper error handling
* [ ] configurable margins, page size, orientation and background
* [ ] deploy to a live environment (like Heroku)