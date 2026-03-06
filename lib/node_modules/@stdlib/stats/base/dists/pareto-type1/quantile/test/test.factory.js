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

var largeAlpha = require( './fixtures/julia/large_alpha.json' );
var largeBeta = require( './fixtures/julia/large_beta.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var quantile = factory( 1.0, 1.0 );
	t.strictEqual( typeof quantile, 'function', 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0, 1.0 );
	y = quantile( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NaN, 1.0 );
	y = quantile( 0.1 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( 1.0, NaN );
	y = quantile( 0.1 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NaN, NaN );
	y = quantile( 0.1 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NaN, NaN );
	y = quantile( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a valid `alpha` and `beta`, the function returns a function which returns `NaN` when provided a number outside `[0,1]` for `p`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0, 1.0 );
	y = quantile( -0.1 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 1.1 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `beta`, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 0.0, -1.0 );

	y = quantile( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( 0.0, NINF );
	y = quantile( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( PINF, NINF );
	y = quantile( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NINF, NINF );
	y = quantile( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NaN, NINF );
	y = quantile( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `alpha`, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 0.0, 0.5 );

	y = quantile( 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( -1.0, 0.5 );

	y = quantile( 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NINF, 1.0 );
	y = quantile( 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NINF, PINF );
	y = quantile( 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NINF, NINF );
	y = quantile( 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NINF, NaN );
	y = quantile( 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the created function evaluates the quantile for `p` given large `alpha` and `beta`', function test( t ) {
	var expected;
	var quantile;
	var delta;
	var alpha;
	var beta;
	var tol;
	var i;
	var p;
	var y;

	expected = bothLarge.expected;
	p = bothLarge.p;
	alpha = bothLarge.alpha;
	beta = bothLarge.beta;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( alpha[i], beta[i] );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+', alpha: '+alpha[i]+', beta: '+beta[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. beta: '+beta[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `p` given large parameter `alpha`', function test( t ) {
	var expected;
	var quantile;
	var delta;
	var alpha;
	var beta;
	var tol;
	var i;
	var p;
	var y;

	expected = largeAlpha.expected;
	p = largeAlpha.p;
	alpha = largeAlpha.alpha;
	beta = largeAlpha.beta;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( alpha[i], beta[i] );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+', alpha: '+alpha[i]+', beta: '+beta[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. beta: '+beta[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `p` given large parameter `beta`', function test( t ) {
	var expected;
	var quantile;
	var delta;
	var alpha;
	var beta;
	var tol;
	var i;
	var p;
	var y;

	expected = largeBeta.expected;
	p = largeBeta.p;
	alpha = largeBeta.alpha;
	beta = largeBeta.beta;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( alpha[i], beta[i] );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+', alpha: '+alpha[i]+', beta: '+beta[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. alpha: '+alpha[i]+'. beta: '+beta[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
