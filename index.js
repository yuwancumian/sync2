#!/usr/bin/env node
require('shelljs/global');
var chalk = require('chalk');
var cfg = require('./config');

(function(){

  var project = process.argv[2]

  if (!process.argv[2] || process.argv[2] === "") {
        console.log(chalk.red('Sorry, a project name must be assigned!'));
        return;
  } else {

		var src = cfg[project].src;
		var dest = cfg[project].dest;
		function getUserHome() {
	  	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
		}

		if (src === "github") {

			dest2 = dest.substr(2);
			cd(getUserHome()+dest2);
			console.log(dest2);
			exec('git pull origin master');
			
		} else {
			exec('rsync -avP ' + src +" " + dest);
			console.log("");
			console.log(chalk.green(project +" has been synced!"))
			console.log("");
			console.log("Sync files from "+ chalk.magenta(src) + " to " + chalk.magenta(dest));
		}
		
	}
	
})();

