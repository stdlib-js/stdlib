'use strict';

// MODULES //

var tape = require( 'tape' );
var id2uri = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof id2uri, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a function to return the URI corresponding to a provided id synchronously', function test( t ) {
	t.equal( typeof id2uri.sync, 'function', 'attached method for synchronously returning the corresponding URI' );
	t.end();
});
