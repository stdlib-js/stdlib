'use strict';

// MODULES //

var tape = require( 'tape' );
var tex2svg = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof tex2svg, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a factory method', function test( t ) {
	t.equal( typeof tex2svg.factory, 'function', 'export is a function' );
	t.end();
});

