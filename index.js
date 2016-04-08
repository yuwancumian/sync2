#!/usr/bin/env node
require('shelljs/global');
var path = require('path');
var cfg = require('./config');
var argv = require('yargs')
           .alias('o','output')             
           .argv;

(function(){

  var project = process.argv[2]
	var src = cfg[project].src;
	var dest = cfg[project].dest;
	console.log("src:" + src);
	console.log("dest:" + dest);
	exec('rsync -avP ' + src +" " + dest);

})();

