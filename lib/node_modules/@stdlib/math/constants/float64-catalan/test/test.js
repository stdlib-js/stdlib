'use strict';

// MODULES //

var tape = require( 'tape' );
var CATALAN = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof CATALAN, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is a double-precision floating-point number equal to 0.915965594177219', function test( t ) {
	t.equal( CATALAN, 0.915965594177219, 'returns 0.915965594177219' );
	t.end();
});
