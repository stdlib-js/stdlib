'use strict';

// MODULES //

var randu = require( '@stdlib/math/base/random/randu' );
var isnan = require( '@stdlib/math/base/utils/is-nan' );


// VARIABLES //

var N = 1e6;


// FIXTURES //

var DATA = new Array( 100 );
var i;
for ( i = 0; i < DATA.length; i++ ) {
	DATA[ i ] = randu()*1.0e6 - 5.0e5;
}


// FUNCTIONS //

function nativeMax( x ) {
	return Math.max.apply( null, x );
}

function naiveMax( x ) {
	var max;
	var i;
	max = x[ 0 ];
	for ( i = 1; i < x.length; i++ ) {
		if ( x[i] > max ) {
			max = x[ i ];
		}
	}
	return max;
}

function reduce1( x ) {
	x.reduce( reducer1, Number.NEGATIVE_INFINITY );
}

function reduce2( x ) {
	x.reduce( reducer2, Number.NEGATIVE_INFINITY );
}

function reducer1( prev, curr ) {
	return Math.max( prev, curr );
}

function reducer2( prev, curr ) {
	if ( curr > prev ) {
		return curr;
	}
	return prev;
}

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
	var y;
	var i;

	bool = warmup();
	if ( !bool ) {
		throw new Error( 'Something went wrong.' );
	}
	start = process.hrtime();
	for ( i = 0; i < N; i++ ) {
		y = fcn( DATA );
	}
	time = process.hrtime( start );
	time = time[ 0 ] + time[ 1 ]*1.0e-9;

	if ( isnan( y ) ) {
		throw new Error( 'Something went wrong.' );
	}
	console.log( 'Test: %s. Elapsed time: %d sec. Iterations: %d. ops/s: %d.', name, time, N, N/time );
}

function benchmark() {
	test( 'Math.max', nativeMax );
	test( 'Array.reduce', reduce1 );
	test( 'Array.reduce', reduce2 );
	test( 'For loop', naiveMax );
}


// MAIN //

benchmark();
