// async.js
const fs = require('fs')

console.log("Starting to read a file...")
fs.readFile('file.md', 'utf-8', function(err, content) {
	if (err) {
		console.log('An error occurred reading the file')
		return console.log(err)
	}
	console.log(content)
})
console.log("Reading completed.")
