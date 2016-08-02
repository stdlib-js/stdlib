'use strict';

// MODULES //

var tape = require( 'tape' );
var transform = require( './../lib/transform.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof transform, 'function', 'main export is a function' );
	t.end();
});


