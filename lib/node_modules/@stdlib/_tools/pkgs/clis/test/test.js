'use strict';

// MODULES //

var tape = require( 'tape' );
var findCLIs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof findCLIs, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously find packages', function test( t ) {
	t.strictEqual( typeof findCLIs.sync, 'function', 'has sync method' );
	t.end();
});
