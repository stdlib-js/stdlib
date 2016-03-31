'use strict';

// MODULES //

var tape = require( 'tape' );
var evalrational = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof evalrational, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a factory method for generating `evalrational` functions', function test( t ) {
	t.equal( typeof evalrational.factory, 'function', 'exports a factory method' );
	t.end();
});
