/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// FIXTURES //

var largeShape = require( './fixtures/julia/large_shape.json' );
var largeRate = require( './fixtures/julia/large_rate.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );


// VARIABLES //

var cdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( NaN, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite `alpha` and `beta`, the function returns `1`', opts, function test( t ) {
	var y = cdf( PINF, 0.5, 1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `alpha` and `beta`, the function returns `0`', opts, function test( t ) {
	var y = cdf( NINF, 0.5, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `alpha`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 2.0, 0.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `beta`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 2.0, 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the cdf for `x` given large `alpha`', opts, function test( t ) {
	var expected;
	var alpha;
	var delta;
	var beta;
	var tol;
	var x;
	var y;
	var i;

	expected = largeShape.expected;
	x = largeShape.x;
	alpha = largeShape.alpha;
	beta = largeShape.beta;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], alpha[i], beta[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', alpha: '+alpha[i]+', beta: '+beta[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1e-11 * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. alpha: '+alpha[i]+'. beta: '+beta[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given large `beta`', opts, function test( t ) {
	var expected;
	var alpha;
	var delta;
	var beta;
	var tol;
	var x;
	var y;
	var i;

	expected = largeRate.expected;
	x = largeRate.x;
	alpha = largeRate.alpha;
	beta = largeRate.beta;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], alpha[i], beta[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', alpha: '+alpha[i]+', beta: '+beta[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1e-11 * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. alpha: '+alpha[i]+'. beta: '+beta[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given large `alpha` and `beta`', opts, function test( t ) {
	var expected;
	var alpha;
	var delta;
	var beta;
	var tol;
	var x;
	var y;
	var i;

	expected = bothLarge.expected;
	x = bothLarge.x;
	alpha = bothLarge.alpha;
	beta = bothLarge.beta;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], alpha[i], beta[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', alpha: '+alpha[i]+', beta: '+beta[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1e-11 * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. alpha: '+alpha[i]+'. beta: '+beta[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
