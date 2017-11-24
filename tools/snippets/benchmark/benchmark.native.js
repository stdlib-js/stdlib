'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var TODO = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( TODO instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
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
	}
	b.pass( 'benchmark finished' );
	b.end();
});
