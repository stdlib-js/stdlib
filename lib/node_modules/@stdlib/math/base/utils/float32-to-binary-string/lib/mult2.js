'use strict';

// VARIABLES //

var MAX_ITER = 149; // 127+22 (subnormals)
var MAX_BITS = 24; // only 23 bits for fraction


// MULT2 //

/**
* FUNCTION: mult2( x )
*	Converts a fraction to a literal bit representation using the multiply-by-2 algorithm.
*
* @param {Number} x - number less than 1
* @returns {String} bit representation
*/
function mult2( x ) {
	var str;
	var y;
	var i;
	var j;

	str = '';
	if ( x === 0 ) {
		return str;
	}
	j = MAX_ITER;

	// Each time we multiply by 2 and find a ones digit, add a '1'; otherwise, add a '0'..
	for ( i = 0; i < MAX_ITER; i++ ) {
		y = x * 2;
		if ( y >= 1 ) {
			x = y - 1;
			str += '1';
			if ( j === MAX_ITER ) {
				j = i; // first '1'
			}
		} else {
			x = y;
			str += '0';
		}
		// Stop when we have no more decimals to process or in the event we found a fraction which cannot be represented in a finite number of bits...
		if ( y === 1 || i-j > MAX_BITS ) {
			break;
		}
	}
	return str;
} // end FUNCTION mult2()


// EXPORTS //

module.exports = mult2;
