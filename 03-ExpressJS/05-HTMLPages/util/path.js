const path = require("path");

// deprecated - https://stackoverflow.com/a/64884608
// module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);
