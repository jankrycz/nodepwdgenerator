const readline = require("readline");
const readlineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/**
 * Generate password
 * @param {Number} length Password length
 * @returns {String} Generated password
*/
const generatePassword = function (length) {
	let generatedPwd = '';
	const charactersSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$~^&*{}_-/';

	for (let i = 0; i < length; i++ ) {
		generatedPwd += charactersSet.charAt(Math.floor(Math.random() * charactersSet.length));
	}
	return generatedPwd;
}

readlineInterface.setPrompt('Please, enter password length: ');
readlineInterface.prompt();

readlineInterface.on('line', function(input) {
	if (Number(input.replace(/\D/g,'') >= 8)) {
		console.log(`\nYour new generated password is: \n${generatePassword(Number(input.replace(/\D/g,'')))}\n`);
		readlineInterface.close()
  	} else {
		console.log('\n(!) Minimal password length is 8!\n ');
		readlineInterface.prompt();
  	}
}).on('close', function() {
	process.exit(0);
});
