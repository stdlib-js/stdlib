'use strict';

var zip = require( './../lib' );

// Simulate some data...
var x = new Array( 1000 ),
	y = new Array( x.length );

for ( var i = 0; i < x.length; i++ ) {
	x[ i ] = Date.now();
	y[ i ] = Math.random() * 100;
}

var zipped,
	start,
	diff,
	elapsed;

start = process.hrtime();
for ( var j = 0; j < 1e6; j++ ) {
	zipped = zip( x, y );
}
diff = process.hrtime( start );

// Elapsed time:
elapsed = diff[ 0 ] + diff[ 1 ]*1e-9;

// Results:
console.log( 'Ops/sec: %d ops', 1e6/elapsed );
console.log( 'Time per op: %d ms', elapsed/1e6*1000 );
