'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var _ = tryRequire( 'lodash' );
var opts = {
	'skip': ( _ instanceof Error )
};


// MAIN //

bench( pkg+'::lodash:each', opts, function benchmark( b ) {
	var arr;
	var i;

	function onItem( v ) {
		if ( isnan( v ) ) {
			b.fail( 'should not be NaN' );
		}
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		_.each( arr, onItem );
		if ( arr.length !== 5 ) {
			b.fail( 'should not change the array length' );
		}
	}
	b.toc();
	if ( arr.length !== 5 ) {
		b.fail( 'should not change the array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
