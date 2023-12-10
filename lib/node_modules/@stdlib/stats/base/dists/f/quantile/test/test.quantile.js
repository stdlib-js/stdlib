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
var quantile = require( './../lib' );


// FIXTURES //

var largeD1 = require( './fixtures/cpp/large_d1.json' );
var largeD2 = require( './fixtures/cpp/large_d2.json' );
var bothLarge = require( './fixtures/cpp/both_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and a valid `d1` and `d2`, the function returns `NaN`', function test( t ) {
	var y = quantile( 1.1, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided a nonpositive `d1`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, NINF, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `d2`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the quantile for `x` given large parameters `d1` and `d2`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var d1;
	var d2;
	var i;
	var p;
	var y;

	expected = bothLarge.expected;
	p = bothLarge.p;
	d1 = bothLarge.d1;
	d2 = bothLarge.d2;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], d1[i], d2[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 20.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given large parameter `d1`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var d1;
	var d2;
	var i;
	var p;
	var y;

	expected = largeD1.expected;
	p = largeD1.p;
	d1 = largeD1.d1;
	d2 = largeD1.d2;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], d1[i], d2[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 30.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given large parameter `d2`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var d1;
	var d2;
	var i;
	var p;
	var y;

	expected = largeD2.expected;
	p = largeD2.p;
	d1 = largeD2.d1;
	d2 = largeD2.d2;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], d1[i], d2[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 20.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
