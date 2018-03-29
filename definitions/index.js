/*
 * Definitions takes a line-by-line text file of terms in the format of 
 * term: definition
 */

const fs = require('fs');            // Read and write files

const inFile = 'definitions.txt'
const outFile = 'definitions-sorted.txt';

var terms = [];
var results = '';

fs.readFile(inFile, function(err, data) {
	if (err) {
		throw err;
	}
	terms = data.toString().split('\n');
	terms.sort();
	results = toFileFormat(terms);
	
	fs.writeFile(outFile, results, 'utf8', function() {
		console.log(`Results saved to ${outFile}`);
	});
});

function toFileFormat(arr) {
	var result = '';
	if (arr.length > 0) {
		result = arr[0].trim() + '\n';
		for (var i = 1; i < arr.length; i++) {
			result += arr[i].trim() + '\n';
		}
	}
	return result;
}


