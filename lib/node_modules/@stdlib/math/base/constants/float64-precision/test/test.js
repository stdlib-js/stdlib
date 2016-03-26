'use strict';

// MODULES //

var tape = require( 'tape' );
var PRECISION = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof PRECISION, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 53', function test( t ) {
	t.equal( PRECISION, 53, 'equals 53' );
	t.end();
});
