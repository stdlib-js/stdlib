'use strict';

// MODULES //

var tape = require( 'tape' );
var findPkgs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof findPkgs, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously find packages', function test( t ) {
	t.equal( typeof findPkgs.sync, 'function', 'has sync method' );
	t.end();
});
