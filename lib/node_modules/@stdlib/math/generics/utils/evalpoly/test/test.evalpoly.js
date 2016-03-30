'use strict';

// MODULES //

var tape = require( 'tape' );
var evalpoly = require( './../lib/evalpoly.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof evalpoly === 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an empty coefficient array, the function returns `0`', function test( t ) {
	var v = evalpoly( [], 10 );
	t.equal( v, 0, 'returns 0' );
	t.end();
});

tape( 'if provided only 1 coefficient, the function returns that coefficient', function test( t ) {
	var v = evalpoly( [ 1 ], 10 );
	t.equal( v, 1, 'returns first coefficient' );
	t.end();
});

tape( 'if the value at which to evaluate a polynomial is `0`, the function returns the first coefficient', function test( t ) {
	var v = evalpoly( [3,2,1], 0 );
	t.equal( v, 3, 'returns first coefficient' );
	t.end();
});

tape( 'the function evaluates a polynomial', function test( t ) {
	var c;
	var v;

	c = [ 4, 5 ];
	v = evalpoly( c, 6 );
	t.equal( v, 34, 'returns 34' );

	c = [ -4, -5 ];
	v = evalpoly( c, 6 );
	t.equal( v, -34, 'returns -34' );

	c = [ -19, 7, -4, 6 ];
	v = evalpoly( c, 3 );
	t.equal( v, 128, 'returns 128' );

	t.end();
});
