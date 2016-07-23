var getMultiplesOfInRange = require ("./getMultiplesOfInRange");
var _ = require ("lodash");

// get multiples of values, vals, in range [0,rangeUpperNonInclusiveEnd)
var valuesToBeDivisibleBy = [3,5];			// the values to be divisible by are 3 OR 5
var rangeUpperNonInclusiveEnd = 1000;		// the range of values to be checked for divisibility by 3 OR 5 are
											// in [0,1000). that is all non-negative integers below 1000
											// divisible by 3 OR 5 will be summed
var mltp3And5 = getMultiplesOfInRange(valuesToBeDivisibleBy, rangeUpperNonInclusiveEnd);	// the array of values under 1000
																							// divisible by 3 OR 5

// find sum of multiples
sumOfMultiples = _.reduce(mltp3And5, function (sum, n) {
	return sum + n;
}, 0);

console.log ("Multiples of {" + valuesToBeDivisibleBy + "} in the range [0," + rangeUpperNonInclusiveEnd + "): " + mltp3And5);
console.log ("Sum of multiples: " + sumOfMultiples);