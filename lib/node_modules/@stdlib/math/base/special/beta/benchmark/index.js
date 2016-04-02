'use strict';

// MODULES //

var betaOld = require( './naive.js' );
var beta = require( './../lib/index.js' );


// VARIABLES //

var len;
var i;
var res = new Array( 2 );
var start;
var stop;
var x;
var y;
var out;


// FIXTURES //

var arg1 = require( './fixtures/arg1.json' );
var arg2 = require( './fixtures/arg2.json' );


// --------------------------------------
// WARM-UP

len = arg1.length;
for ( i = 0; i < len; i++ ) {
	i = i;
}

// --------------------------------------
// BENCHMARK

// Beta( old )


start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	x = arg1[ i ];
	y = arg2[ i ];
	out = betaOld( x, y );
}
stop = process.hrtime( start );

res[ 0 ] = stop[ 0 ] + stop[ 1 ]*1e-9;


// Beta( new )

start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	x = arg1[ i ];
	y = arg2[ i ];
	out = beta( x, y );
}
stop = process.hrtime( start );

res[ 1 ] = stop[ 0 ] + stop[ 1 ]*1e-9;

// --------------------------------------
// RESULTS

console.log( 'Beta( old ):\t%d ops/sec', Math.floor( len/res[ 0 ] ) );
console.log( 'Beta( new ):\t%d ops/sec', Math.floor( len/res[ 1 ] ) );
console.log( '\n' );
