'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var hasWebAssemblySupport = require( '@stdlib/utils/detect-wasm-support' );
var pkg = require( './../package.json' ).name;
var TODO = require( './../lib/wasm.js' );


// VARIABLES //

var opts = {
	'skip': !hasWebAssemblySupport()
};


// MAIN //

bench( pkg+'::wasm', opts, function benchmark( b ) {
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
