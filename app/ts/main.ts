import { app, BrowserWindow } from 'electron';
import path from 'node:path';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadFile(path.join(__dirname, '..', '..', 'html', 'index.html'));
};

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});