"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const electron_1 = require("electron");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadFile(node_path_1.default.join(__dirname, '..', '..', 'html', 'index.html'));
};
electron_1.app.whenReady().then(() => {
    createWindow();
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
