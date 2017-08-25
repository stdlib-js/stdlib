'use strict';

// MODULES //

var tape = require( 'tape' );
var ls = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof ls, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously list module dependencies', function test( t ) {
	t.equal( typeof ls.sync, 'function', 'has `sync` method' );
	t.end();
});
