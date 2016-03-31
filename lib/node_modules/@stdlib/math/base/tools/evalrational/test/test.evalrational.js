'use strict';

// MODULES //

var tape = require( 'tape' );
var evalrational = require( './../lib/evalrational.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof evalrational, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided two empty coefficient arrays, the function always returns `NaN`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalrational( [], [], i );
		t.ok( v !== v, 'returns NaN' );
	}
	t.end();
});

tape( 'if provided only one coefficient for both arrays, the function always returns the ratio of the two coefficients', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalrational( [2], [4], i );
		t.equal( v, 0.5, 'returns coefficient ratio' );
	}
	t.end();
});

tape( 'if provided coefficient arrays of different lengths, the function always returns `NaN`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalrational( [ 2, 1, 2 ], [ 3, 1 ], i );
		t.ok( v !== v, 'returns NaN' );
		v = evalrational( [ 0.5, 2 ], [ 2, 3, 1 ], i );
		t.ok( v !== v, 'returns NaN' );
	}
	t.end();
});

tape( 'if the value at which to evaluate a rational function is `0`, the function returns the ratio of the first coefficients', function test( t ) {
	var v;

	v = evalrational( [3,2,1], [0.5,2,1], 0 );
	t.equal( v, 6, 'returns coefficient ratio' );

	t.end();
});

tape( 'the function evaluates a rational function', function test( t ) {
	var P;
	var Q;
	var v;

	P = [ 2, 3, 2 ];
	Q = [ 1, 0, 0 ];
	v = evalrational( P, Q, 1 );
	t.equal( v, 7, 'returns 7' );

	P = [ -6, -5 ];
	Q = [ 3, 0.5 ];
	v = evalrational( P, Q, 6 );
	t.equal( v, -6, 'returns -6' );

	P = [ -19, 7, -4, 6 ];
	Q = [ 4, 5, 2, 1 ];
	v = evalrational( P, Q, 3 );
	t.equal( v, 2, 'returns 2' );

	P = [ 4, 2, 1 ];
	Q = [ 2, 0, 0 ];
	v = evalrational( P, Q, -2 );
	t.equal( v, 2, 'returns 2' );

	t.end();
});

tape( 'the function handles large `x` values', function test( t ) {
	var v1;
	var v2;
	var P;
	var Q;
	var x;
	var i;

	// 6x^5 + 5x^4 + 4x^3 + 3x^2 + 2x^1 + 1x^0
	P = [ 1, 2, 3, 4, 5, 6 ];

	// 1x^5 + 2x^4 + 3x^3 + 4x^2 + 5x^1 + 6x^0
	Q = [ 6, 5, 4, 3, 2, 1 ];

	x = 1e100;
	for ( i = 0; i < 1000; i++ ) {
		x *= 2;
		v1 = evalrational( P, Q, x );
		v2 = evalrational( P, Q, -x );
		t.equal( v1, v2, 'for x=+-'+x+', returns '+v1 );
	}
	t.end();
});

tape( 'the function returns analytically incorrect results for certain coefficient and `x` combinations', function test( t ) {
	var P;
	var Q;
	var v;

	// Case 1: large negative `x`

	// 1x^2 + 1e308x^1 + 0x^0
	P = [ 0, 1e308, 1 ];

	// 0x^2 + 0x^2 + 1x^0
	Q = [ 1, 0, 0 ];

	// => (-1e308)^2 + (1e308)(-1e308) = +inf - inf => indeterminate => NaN
	v = evalrational( P, Q, -1e308 );
	t.notOk( v !== v, 'should be NaN' );


	// Case 2: large positive `x`

	// 1x^2 - 1e308x^1 + 0x^0
	P = [ 0, -1e308, 1 ];

	// 0x^2 + 0x^2 + 1x^0
	Q = [ 1, 0, 0 ];

	// => (1e308)^2 - (1e308)(1e308) = +inf - inf => indeterminate => NaN
	v = evalrational( P, Q, 1e308 );
	t.notOk( v !== v, 'should be NaN' );

	t.end();
});
