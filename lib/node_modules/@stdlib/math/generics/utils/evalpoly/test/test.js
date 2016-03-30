'use strict';

// MODULES //

var tape = require( 'tape' );
var evalpoly = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof evalpoly === 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a factory method for generating `evalpoly` functions', function test( t ) {
	t.ok( typeof evalpoly.factory === 'function', 'exports a factory method' );
	t.end();
});
