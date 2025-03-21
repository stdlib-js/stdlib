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
var factory = require( './../lib/factory.js' );


// FIXTURES //

var smallSmall = require( './fixtures/julia/small_small.json' );
var smallHigh = require( './fixtures/julia/small_high.json' );
var highSmall = require( './fixtures/julia/high_small.json' );
var highHigh = require( './fixtures/julia/high_high.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var pmf = factory( 20, 0.5 );
	t.equal( typeof pmf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 20, 0.5 );
	y = pmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( NaN, 0.5 );
	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 20, NaN );
	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( NaN, NaN );
	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( NaN, NaN );
	y = pmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a valid `n` and `p`, the function returns a function which returns `0` when provided a negative integer for `x`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 20, 0.5 );
	y = pmf( NINF );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -20.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -10.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -1.0 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a valid `n` and `p`, the function returns a function which returns `0` when provided a non-integer for `x`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 20, 0.5 );
	y = pmf( -2.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -1.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 1.2 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a valid `n` and `p`, the function returns a function which returns `0` for all `x` larger than `n`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 20, 0.5 );
	y = pmf( 21.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 22.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 50.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( PINF );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a success probability `p` outside `[0,1]`, the created function always returns `NaN`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 20, 1.2 );

	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 20, -0.1 );
	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 20, NINF );
	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 20, PINF );
	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a `n` which is not a nonnegative integer, the created function always returns `NaN`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( -1.0, 0.5 );

	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 1.5, 0.5 );
	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( NINF, 0.5 );
	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( PINF, 0.5 );
	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if `p` or `n` equals `0`, the created function evaluates a degenerate distribution centered at `0.0`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 8, 0.0 );

	y = pmf( 0.0 );
	t.equal( y, 1.0, 'returns 1 for x equal to 0' );

	y = pmf( 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( PINF );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NINF );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 0.0, 0.5 );

	y = pmf( 0.0 );
	t.equal( y, 1.0, 'returns 1 for x equal to 0' );

	y = pmf( 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( PINF );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NINF );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if `p` equals `1.0`, the created function evaluates a degenerate distribution centered at `n`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 8, 1.0 );

	y = pmf( 8.0 );
	t.equal( y, 1.0, 'returns 1 for x equal to 8' );

	y = pmf( 1.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( PINF );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NINF );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function evaluates the pmf for `x` given large `n` and `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
	var tol;
	var x;
	var n;
	var p;
	var y;
	var i;

	expected = highHigh.expected;
	x = highHigh.x;
	n = highHigh.n;
	p = highHigh.p;
	for ( i = 0; i < x.length; i++ ) {
		pmf = factory( n[i], p[i] );
		y = pmf( x[i] );
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

tape( 'the created function evaluates the pmf for `x` given a large `n` and small `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
	var tol;
	var i;
	var n;
	var p;
	var x;
	var y;

	expected = highSmall.expected;
	x = highSmall.x;
	n = highSmall.n;
	p = highSmall.p;
	for ( i = 0; i < x.length; i++ ) {
		pmf = factory( n[i], p[i] );
		y = pmf( x[i] );
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

tape( 'the created function evaluates the pmf for `x` given small `n` and large `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
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
		pmf = factory( n[i], p[i] );
		y = pmf( x[i] );
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

tape( 'the created function evaluates the pmf for `x` given small `n` and `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
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
		pmf = factory( n[i], p[i] );
		y = pmf( x[i] );
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
