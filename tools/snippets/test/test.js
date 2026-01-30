'use strict';

// MODULES //

var tape = require( 'tape' );
var snippet = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.strictEqual( typeof snippet, 'function', 'exports a function' );
	t.end();
});

tape( 'returns input value unchanged', function test( t ) {
	t.strictEqual( snippet( 4.0 ), 4.0, 'returns same value' );
	t.end();
});
