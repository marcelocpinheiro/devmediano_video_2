const readline = require('readline');
const moment = require('moment');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

reader.question("Qual é a sua idade", (age) => {
	console.log(`Sua idade é: ${age}\n`);
	const birthyear = moment().subtract(parseInt(age), "years").calendar();
	console.log(`Ano de nascimento: ${birthyear}`);
});
