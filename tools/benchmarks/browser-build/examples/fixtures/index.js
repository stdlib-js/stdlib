'use strict';

// MODULES //

var randu = require( '@stdlib/math/base/random/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );


// VARIABLES //

var N = 1e6;


// FUNCTIONS //

function warmup() {
	var i;
	var j;

	j = 0;
	for ( i = 0; i < 1e6; i++ ) {
		j += i * 2;
	}
	if ( j > 0 ) {
		return true;
	}
	return false;
}

function test( name, fcn ) {
	var start;
	var time;
	var bool;
	var x;
	var y;
	var i;

	bool = warmup();
	if ( !bool ) {
		throw new Error( 'Something went wrong.' );
	}
	start = process.hrtime();
	for ( i = 0; i < N; i++ ) {
		x = randu()*10000.0;
		y = fcn( x );
		if ( isnan( y ) ) {
			throw new Error( 'Something went wrong.' );
		}
	}
	time = process.hrtime( start );
	time = time[ 0 ] + time[ 1 ]*1.0e-9;

	if ( isnan( y ) ) {
		throw new Error( 'Something went wrong.' );
	}
	console.log( 'Test: %s. Elapsed time: %d sec. Iterations: %d. ops/s: %d.', name, time, N, N/time );
}

function benchmark() {
	test( 'Math.exp', Math.exp );
	test( 'exp', exp );

	test( 'Math.exp', Math.exp );
	test( 'exp', exp );

	test( 'Math.exp', Math.exp );
	test( 'exp', exp );
}


// MAIN //

benchmark();
