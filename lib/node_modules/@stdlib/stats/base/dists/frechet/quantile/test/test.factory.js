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

var largeScale = require( './fixtures/julia/large_scale.json' );
var largeShape = require( './fixtures/julia/large_shape.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var quantile = factory( 1.0, 1.0, 1.0, 0.0 );
	t.equal( typeof quantile, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0, 1.0, 0.0 );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, 1.0, 0.0 );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 1.0, NaN, 0.0 );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 1.0, NaN, 1.0, NaN );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, NaN, NaN );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, NaN, NaN );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `s`, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0, -1.0, 1.0 );

	y = quantile( 0.6 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 1.0, 0.0, 1.0 );

	y = quantile( 0.3 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 1.0, NINF, 1.0 );
	y = quantile( 0.3 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( PINF, NINF, 1.0 );
	y = quantile( 0.3 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, NINF, NaN );
	y = quantile( 0.3 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function returns `NaN` if provided a number outside `[0,1]`', function test( t ) {
	var quantile = factory( 1.0, 1.0, 0.0 );
	var y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'the created function evaluates the quantile function for `p` given large `alpha`', function test( t ) {
	var quantile;
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
		quantile = factory( alpha[i], s[i], 0.0 );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', alpha: '+alpha[i]+', s: '+s[i]+', m: 0, y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. m: 0. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the quantile function for `p` given large `s`', function test( t ) {
	var quantile;
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
		quantile = factory( alpha[i], s[i], 0.0 );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', alpha:'+alpha[i]+', s: '+s[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the quantile function for `p` given large `alpha` and `s`', function test( t ) {
	var quantile;
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
		quantile = factory( alpha[i], s[i], 0.0 );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', alpha:'+alpha[i]+', s: '+s[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
