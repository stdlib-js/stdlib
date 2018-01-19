'use strict';

// MODULES //

var tape = require( 'tape' );
var lint = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lint, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously lint files', function test( t ) {
	t.strictEqual( typeof lint.sync, 'function', 'has sync method' );
	t.end();
});
