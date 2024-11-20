/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pmf = require( './../lib' );


// FIXTURES //

var smallSmall = require( './fixtures/julia/small_small.json' );
var smallHigh = require( './fixtures/julia/small_high.json' );
var highSmall = require( './fixtures/julia/high_small.json' );
var highHigh = require( './fixtures/julia/high_high.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pmf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = pmf( NaN, 20, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = pmf( 0.0, NaN, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = pmf( 0.0, 20, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a negative integer for `x` and a valid `n` and `p`, the function returns `0`', function test( t ) {
	var y = pmf( NINF, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -20.0, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -100.0, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -1.0, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a non-integer for `x` and a valid `n` and `p`, the function returns `0`', function test( t ) {
	var y = pmf( -1.5, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -0.5, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 1.5, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 2.5, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided `n` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var y;

	y = pmf( 2.0, 1.5, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0, -1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 2.0, NINF, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 2.0, PINF, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function returns `NaN`', function test( t ) {
	var y;

	y = pmf( 2.0, 20, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0, 20, 1.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 2.0, 20, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 2.0, 20, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if `p` or `n` equals `0`, the function evaluates a degenerate distribution centered at `0.0`', function test( t ) {
	var y;

	// Case: n = 8, p = 0.0
	y = pmf( 0.0, 8, 0.0 );
	t.equal( y, 1.0, 'returns 1 for x equal to 0' );

	y = pmf( 1.0, 8, 0.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( PINF, 8, 0.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NINF, 8, 0.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NaN, 8, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	// Case: n = 0, p = 0.5
	y = pmf( 0.0, 0, 0.5 );
	t.equal( y, 1.0, 'returns 1 for x equal to 0' );

	y = pmf( 1.0, 0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( PINF, 0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NINF, 0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NaN, 0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if `p` equals `1.0`, the function evaluates a degenerate distribution centered at `n`', function test( t ) {
	var y;

	y = pmf( 8.0, 8, 1.0 );
	t.equal( y, 1.0, 'returns 1 for x equal to 8' );

	y = pmf( 1.0, 8, 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( PINF, 8, 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NINF, 8, 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NaN, 8, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the pmf for `x` given large `n` and `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var n;
	var p;
	var x;
	var y;

	expected = highHigh.expected;
	x = highHigh.x;
	n = highHigh.n;
	p = highHigh.p;
	for ( i = 0; i < x.length; i++ ) {
		y = pmf( x[i], n[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 260.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. n: '+n[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pmf for `x` given large `n` and small `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var p;
	var i;
	var x;
	var y;

	expected = highSmall.expected;
	x = highSmall.x;
	n = highSmall.n;
	p = highSmall.p;
	for ( i = 0; i < x.length; i++ ) {
		y = pmf( x[i], n[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 270.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. n: '+n[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pmf for `x` given small `n` and large `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var n;
	var p;
	var x;
	var y;

	expected = smallHigh.expected;
	x = smallHigh.x;
	n = smallHigh.n;
	p = smallHigh.p;
	for ( i = 0; i < x.length; i++ ) {
		y = pmf( x[i], n[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 80.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. n: '+n[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pmf for `x` given small `n` and `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var n;
	var p;
	var x;
	var y;

	expected = smallSmall.expected;
	x = smallSmall.x;
	n = smallSmall.n;
	p = smallSmall.p;
	for ( i = 0; i < x.length; i++ ) {
		y = pmf( x[i], n[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 100.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. n: '+n[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});
