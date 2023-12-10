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

	pmf = factory( 20.0, 0.5 );
	y = pmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( NaN, 0.5 );
	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 20.0, NaN );
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

tape( 'if provided a valid `r` and `p`, the function returns a function which returns `0` for negative integers `x`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 20.0, 0.5 );
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

tape( 'if provided a valid `r` and `p`, the function returns a function which returns `0` when provided a non-integer for `x`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 20.0, 0.5 );
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

tape( 'if provided a success probability `p` outside `(0,1]`, the created function always returns `NaN`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 20, 1.2 );

	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 20, 0.0 );
	y = pmf( 2.0 );
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

tape( 'if provided a `r` which is not a positive number, the created function always returns `NaN`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( -1.0, 0.5 );

	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( -2.0, 0.5 );
	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( NINF, 0.5 );
	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function evaluates the pmf for `x` given large `r` and `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
	var tol;
	var x;
	var r;
	var p;
	var y;
	var i;

	expected = highHigh.expected;
	x = highHigh.x;
	r = highHigh.r;
	p = highHigh.p;
	for ( i = 0; i < x.length; i++ ) {
		pmf = factory( r[i], p[i] );
		y = pmf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 650.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. r: '+r[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pmf for `x` given a large parameter `r` and small `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
	var tol;
	var i;
	var r;
	var p;
	var x;
	var y;

	expected = highSmall.expected;
	x = highSmall.x;
	r = highSmall.r;
	p = highSmall.p;
	for ( i = 0; i < x.length; i++ ) {
		pmf = factory( r[i], p[i] );
		y = pmf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 450.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. r: '+r[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pmf for `x` given small `r` and large parameter `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
	var tol;
	var i;
	var r;
	var p;
	var x;
	var y;

	expected = smallHigh.expected;
	x = smallHigh.x;
	r = smallHigh.r;
	p = smallHigh.p;
	for ( i = 0; i < x.length; i++ ) {
		pmf = factory( r[i], p[i] );
		y = pmf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 80.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. r: '+r[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pmf for `x` given small `r` and `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
	var tol;
	var i;
	var r;
	var p;
	var x;
	var y;

	expected = smallSmall.expected;
	x = smallSmall.x;
	r = smallSmall.r;
	p = smallSmall.p;
	for ( i = 0; i < x.length; i++ ) {
		pmf = factory( r[i], p[i] );
		y = pmf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 80.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. r: '+r[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});
