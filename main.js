process.on('uncaughtException', err => {
  console.error(err);
});

try {
  require('dotenv').config();
}
catch (err) {
  // Not required.
}

const { app } = require('electron'),
  control = require('./control/module');

app.on('ready', init);
app.on('window-all-closed', cleanUp);

function init() {
  control.init();
}

function cleanUp() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
}
