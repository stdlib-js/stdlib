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

var largeScale = require( './fixtures/julia/large_scale.json' );
var largeShape = require( './fixtures/julia/large_shape.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 1.0, 1.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.2, NaN, 1.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.2, 1.0, NaN, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.2, 1.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p`, the function returns `NaN`', function test( t ) {
	var y = quantile( 1.1, 1.0, 1.0, 0.0 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1, 1.0, 1.0, 0.0 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided a nonpositive `alpha`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.3, -1.0, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, -1.0, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.2, 0.0, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, 0.0, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, NINF, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.3, NINF, PINF, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.3, NINF, NaN, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `s`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.3, 2.0, -1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, 2.0, -1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.2, 2.0, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, 2.0, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.3, 1.0, NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.2, PINF, NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.1, NaN, NINF, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the quantile function for `p` given large `alpha`', function test( t ) {
	var expected;
	var alpha;
	var delta;
	var tol;
	var s;
	var p;
	var y;
	var i;

	expected = largeShape.expected;
	p = largeShape.p;
	alpha = largeShape.alpha;
	s = largeShape.s;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], alpha[i], s[i], 0.0 );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', alpha: '+alpha[i]+', s: '+s[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile function for `p` given large `s`', function test( t ) {
	var expected;
	var alpha;
	var delta;
	var tol;
	var s;
	var p;
	var y;
	var i;

	expected = largeScale.expected;
	p = largeScale.p;
	alpha = largeScale.alpha;
	s = largeScale.s;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], alpha[i], s[i], 0.0 );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', alpha: '+alpha[i]+', s: '+s[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile function for `p` given large `alpha` and `s`', function test( t ) {
	var expected;
	var alpha;
	var delta;
	var tol;
	var s;
	var p;
	var y;
	var i;

	expected = bothLarge.expected;
	p = bothLarge.p;
	alpha = bothLarge.alpha;
	s = bothLarge.s;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], alpha[i], s[i], 0.0 );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', alpha: '+alpha[i]+', s: '+s[i]+', m: 0, y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. y: '+y+'. m: 0. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
