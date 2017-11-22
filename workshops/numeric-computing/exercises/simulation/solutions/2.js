'use strict';

var createRandom = require( '@stdlib/random/base/randu' ).factory;
var Uint8Array = require( '@stdlib/types/array/uint8' );

var transition;
var initial;
var nStates;
var nSteps;
var state;
var randu;
var probs;
var rand;
var i;
var j;

/**
* Returns a cumulative probability vector.
*
* @private
* @param {NumericArray} x - input probability vector
* @returns {NumericArray} y - cumulative probability vector
*/
function csum( x ) {
	var y;
	var i;
	y = x.slice();
	for ( i = 1; i < y.length; i++ ) {
		y[ i ] += y[ i-1 ];
	}
	return y;
} // end FUNCTION csum()

randu = createRandom({
	'seed': 123456
});

nSteps = 100;

initial = [ 0.2, 0.8 ];
transition = [
	[ 0.3, 0.7 ],
	[ 0.4, 0.6 ]
];
nStates = initial.length;

// Transform the initial probability vector and transition probability matrix to use cumulative probabilities...
initial = csum( initial );
transition = transition.slice();
transition[ 0 ] = csum( transition[0] );
transition[ 1 ] = csum( transition[1] );

state = new Uint8Array( nSteps+1 );

// Determine the initial state...
rand = randu();
for ( i = 0; i < nStates; i++ ) {
	if ( rand < initial[ i ] ) {
		state[ 0 ] = i;
		break;
	}
}
// Simulate the next `nSteps`...
for ( i = 0; i < nSteps; i++ ) {
	probs = transition[ state[i] ];
	rand = randu();
	for ( j = 0; j < probs.length; j++ ) {
		if ( rand < probs[ j ] ) {
			state[ i+1 ] = j;
			break;
		}
	}
}
console.log( state );

