const { app, BrowserWindow } = require('electron');

const marginsTypes = {
    DEFAULT: 0,
    NONE: 1,
    MINIMUM: 2
};
const printDefaults = {
    marginsType: marginsTypes.NONE,
    landscape: false,
    pageSize: 'A4',
    printBackground: true,
};

module.exports = function printToPdf(url, options) {
    const printSettings = Object.assign(printDefaults, options);
    return new Promise((resolve, reject) => {
        app.on('ready', () => {
            const win = new BrowserWindow({ width: 1280, height: 960, show: false });
            win.loadURL(url);
            win.webContents.on('did-finish-load', () => {
                win.webContents.printToPDF(printDefaults, (err, data) => {
                    err ? reject(err) : resolve(data);
                    setTimeout(() => app.quit(), 0);
                });
            });
        });
    });
};