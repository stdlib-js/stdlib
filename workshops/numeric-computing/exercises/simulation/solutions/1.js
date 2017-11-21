'use strict';

var createRandom = require( '@stdlib/random/base/randu' ).factory;
var Uint8Array = require( '@stdlib/types/array/uint8' );

var state;
var randu;
var probs;
var r;
var N;
var i;

/**
* Returns the longest consecutive streak of a given state.
*
* @private
* @param {ArrayLike} x - input vector
* @param {*} state - state
* @returns {integer} longest streak
*/
function longestStreak( x, state ) {
	var count;
	var prev;
	var curr;
	var out;
	var i;

	count = 0;
	out = 0;
	for ( i = 0; i < x.length; i++ ) {
		curr = x[ i ];
		if ( curr === state ) {
			count += 1;
		} else if ( prev === state ) {
			if ( count > out ) {
				out = count;
			}
			count = 0; // reset
		}
		prev = curr;
	}
	return out;
} // end FUNCTION longestStreak()

// Set the number of coin flips:
N = 100;

// Create a seeded PRNG:
randu = createRandom({
	'seed': 123456
});

// Fair coin...
state = new Uint8Array( N );
for ( i = 0; i < N; i++ ) {
	r = randu();
	if ( r < 0.5 ) {
		state[ i ] = 0;
	} else {
		state[ i ] = 1;
	}
}
console.log( state );
console.log( 'Tails: %d.', longestStreak( state, 0 ) );
console.log( 'Heads: %d.', longestStreak( state, 1 ) );

// Create a seeded PRNG:
randu = createRandom({
	'seed': 123456
});

// Unfair coin...
probs = [ 0.3, 0.7 ]; // [tails, heads]
state = new Uint8Array( N );
for ( i = 0; i < N; i++ ) {
	r = randu();
	if ( r < probs[ 0 ] ) { // Not generalizable!
		state[ i ] = 0;
	} else {
		state[ i ] = 1;
	}
}
console.log( state );
console.log( 'Tails: %d.', longestStreak( state, 0 ) );
console.log( 'Heads: %d.', longestStreak( state, 1 ) );
