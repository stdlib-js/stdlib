'use strict';

// MODULES //

var tape = require( 'tape' );
var findAddons = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof findAddons, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously find add-ons', function test( t ) {
	t.strictEqual( typeof findAddons.sync, 'function', 'has sync method' );
	t.end();
});
