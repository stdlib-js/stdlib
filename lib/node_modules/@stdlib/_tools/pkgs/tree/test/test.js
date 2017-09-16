'use strict';

// MODULES //

var tape = require( 'tape' );
var pkgTree = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof pkgTree, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously generate a package tree', function test( t ) {
	t.equal( typeof pkgTree.sync, 'function', 'has sync method' );
	t.end();
});
