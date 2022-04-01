const fs = require('fs');

function createDB() {
	const files = fs.readdirSync('./db/')
	const db = [];

	for(const file of files) {
		const fileData = fs.readFileSync(`./db/${file}`, 'utf8');
		db.push(JSON.parse(fileData));
	}

	db.sort((a, b) => a.sort > b.sort ? 1 : -1).reverse();

	db.forEach(item => delete item.sort);

	fs.writeFile('./public/database/database.json', JSON.stringify(db), function(error) {
		error ? console.log(error) : console.log('Database completed!');
	});
}

function createFolderForDB() {
  fs.mkdir('./public/database', (error) => {
    if (error) console.log(error);
    createDB();
  });
}

if(fs.existsSync('./public/database')) {
  createDB();
} else {
  createFolderForDB();
}
