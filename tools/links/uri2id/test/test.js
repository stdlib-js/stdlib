'use strict';

// MODULES //

var tape = require( 'tape' );
var uri2id = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof uri2id, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a function to return the id corresponding to a provided URI synchronously', function test( t ) {
	t.equal( typeof uri2id.sync, 'function', 'attached method for synchronously returning the corresponding id' );
	t.end();
});
