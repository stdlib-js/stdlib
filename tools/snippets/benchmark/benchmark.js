'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// TODO: synchronous task
		x = true;
		if ( x/* TODO: condition */ ) {
			b.fail( 'something went wrong' );
		}
	}
	b.toc();
	if ( x/* TODO: condition */ ) {
		b.fail( 'something went wrong' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});
