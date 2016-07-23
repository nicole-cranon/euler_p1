'use strict';

var _ = require('lodash');

module.exports = getMultiplesOfInRange;

// takes a range of numbers and filters to a set of the mutiples of any of the values, vals 
function getMultiplesOfInRange (vals, range) {
	// get the sequence of numbers in the range of [0, range)
	var sequence  = Array.from({length: range}, (v,k) => k);

	// console.log("Original seuquence: " + sequence);

	var divisibleByVals = _.map(sequence, function(s) {
		var isMultiple = _.some (vals, function(v) {
			return s % v == 0;
		});

		if (isMultiple) {
			return s;
		} else {
			return isMultiple;
		}
	})

	// console.log ("Sequence of multiples of {" + vals + "}: " + divisibleByVals + " before filtering");

	return _.filter (divisibleByVals, function (d) {
		return d !== false;
	});
}