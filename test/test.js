'use strict';

// MODULES //

var tape = require( 'tape' );
var stdlib = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof stdlib, 'object', 'main export is an object' );
	t.end();
});

// TODO: test for all expected properties (no fewer and no more than expected)
