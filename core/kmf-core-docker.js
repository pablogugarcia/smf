// this proxy module is copied to node_modules,
// helps use the non-relative path to import the core module in all KMF modules

const core = require('../core/Core');
module.exports = core;