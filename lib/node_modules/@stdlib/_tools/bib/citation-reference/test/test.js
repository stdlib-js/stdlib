'use strict';

// MODULES //

var tape = require( 'tape' );
var toReference = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof toReference, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously return a reference', function test( t ) {
	t.equal( typeof toReference.sync, 'function', 'has sync method' );
	t.end();
});
