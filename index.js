#!/usr/bin/env node
require('shelljs/global');
var path = require('path');
var cfg = require('./config');

(function(){

  var project = process.argv[2]
	var src = cfg[project].src;
	var dest = cfg[project].dest;
	function getUserHome() {
  	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
	}
	if (src === "github") {
		cd(getUserHome());
		cd('Library/Application Support/Sublime Text 3/Packages/User')
		console.log("###");
		console.log(pwd());
		exec('git pull origin master');
	} else {
		exec('rsync -avP ' + src +" " + dest);
	}

	console.log("src:" + src);
	console.log("dest:" + dest);
	

})();

