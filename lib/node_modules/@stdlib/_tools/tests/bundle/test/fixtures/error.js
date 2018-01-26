'use strict';

// MODULES //

var tape = require( 'tape' );
var exp = require( '@stdlib/math/base/special/exponential' ); // non-existing package
var E = require( '@stdlib/constants/math/float64-e' );


// TESTS //

tape( 'test test test', function test( t ) {
	t.strictEqual( true, true, 'is true' );
	t.strictEqual( false, false, 'is false' );
	t.strictEqual( exp( 1.0 ), E, 'returns expected value' );
	t.end();
});
