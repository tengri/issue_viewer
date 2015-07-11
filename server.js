var argv = require('optimist').argv;
var config = argv['prod']? require('./prod'): require('./dev');
