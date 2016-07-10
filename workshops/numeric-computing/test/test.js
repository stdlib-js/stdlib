'use strict';

// MODULES //

var tape = require( 'tape' );
var erf = require( '@stdlib/math/base/special/erf' );


// TEST //

tape( 'function returns a number', function test( t ) {
	t.equal( typeof erf( 3.14 ), 'number', 'returns a number' );
	t.end();
});

