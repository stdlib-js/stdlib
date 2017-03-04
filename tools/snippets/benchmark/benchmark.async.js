'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;


// MAIN //

bench( pkg, function benchmark( b ) {
	var i;

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			// TODO: asynchronous task
			return setTimeout( next, 0 );
		}
		b.toc();
		if ( i === i/* TODO condition */ ) {
			b.fail( 'something went wrong' );
		} else {
			b.pass( 'benchmark finished' );
		}
		b.end();
	}
});
