'use strict';

// MODULES //

var tape = require( 'tape' );
var create = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof create, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a function to create a link entry in the link database synchronously', function test( t ) {
	t.equal( typeof create.sync, 'function', 'attached method for synchronously creating a link entry in the link database' );
	t.end();
});
