'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var TODO = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// TODO: synchronous task
		if ( TODO/* TODO: condition */ ) {
			b.fail( 'something went wrong' );
		}
	}
	b.toc();
	if ( TODO/* TODO: condition */ ) {
		b.fail( 'something went wrong' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});
