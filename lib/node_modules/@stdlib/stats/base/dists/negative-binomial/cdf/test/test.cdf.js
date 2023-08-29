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
var cdf = require( './../lib' );


// FIXTURES //

var smallSmall = require( './fixtures/julia/small_small.json' );
var smallHigh = require( './fixtures/julia/small_high.json' );
var highSmall = require( './fixtures/julia/high_small.json' );
var highHigh = require( './fixtures/julia/high_high.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = cdf( NaN, 10, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = cdf( 0.0, NaN, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = cdf( 0.0, 10, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a `x` equal to `+Infinity`, the function returns `1` (provided `r` and `p` are valid)', function test( t ) {
	var y = cdf( PINF, 20, 0.5 );
	t.equal( y, 1.0, 'returns 1' );

	t.end();
});

tape( 'if provided a negative number for `x` and a valid `r` and `p`, the function returns `0`', function test( t ) {
	var y = cdf( NINF, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = cdf( -10.0, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = cdf( -1.0, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a `r` which is not a positive number, the function returns `NaN`', function test( t ) {
	var y;

	y = cdf( 2.0, -2.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 2.0, -1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 0.0, 0.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 0.0, NINF, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function returns `NaN`', function test( t ) {
	var y;

	y = cdf( 2.0, 20, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 0.0, 20, 1.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 2.0, 20, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 2.0, 20, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the cdf for `x` given large `r` and `p`', function test( t ) {
	var expected;
	var delta;
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
		y = cdf( x[i], r[i], p[i] );
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

tape( 'the function evaluates the cdf for `x` given large `r` and small `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var r;
	var p;
	var y;
	var i;

	expected = highSmall.expected;
	x = highSmall.x;
	r = highSmall.r;
	p = highSmall.p;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], r[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 320.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. r: '+r[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given small `r` and large `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var r;
	var p;
	var y;
	var i;

	expected = smallHigh.expected;
	x = smallHigh.x;
	r = smallHigh.r;
	p = smallHigh.p;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], r[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 10.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. r: '+r[i]+'. p: '+p[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given small `r` and `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var r;
	var p;
	var y;
	var i;

	expected = smallSmall.expected;
	x = smallSmall.x;
	r = smallSmall.r;
	p = smallSmall.p;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], r[i], p[i] );
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
