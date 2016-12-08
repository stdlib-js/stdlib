'use strict';

// MODULES //

var tape = require( 'tape' );
var validate = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously validate files', function test( t ) {
	t.strictEqual( typeof validate.sync, 'function', 'has sync method' );
	t.end();
});
