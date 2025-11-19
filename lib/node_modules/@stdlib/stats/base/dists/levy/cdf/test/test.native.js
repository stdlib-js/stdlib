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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var negativeMean = require( './fixtures/julia/negative_mean.json' );
var positiveMean = require( './fixtures/julia/positive_mean.json' );
var largeVariance = require( './fixtures/julia/large_variance.json' );


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
	var y = cdf( NaN, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = cdf( 0.0, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = cdf( 0.0, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a valid `mu` and `c`, the function returns `1`', opts, function test( t ) {
	var y = cdf( PINF, 0.5, 1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a valid `mu` and `c`, the function returns `0`', opts, function test( t ) {
	var y = cdf( NINF, 0.5, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a `x` smaller than `mu`, the function returns `0`', opts, function test( t ) {
	var y = cdf( -1.0, 0.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = cdf( 3.0, 4.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `c`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 2.0, 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the cdf for `x` given a positive `mu`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var x;
	var c;
	var y;
	var i;

	expected = positiveMean.expected;
	x = positiveMean.x;
	mu = positiveMean.mu;
	c = positiveMean.c;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[ i ], mu[ i ], c[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: ' + x[ i ] + ', mu: ' + mu[ i ] + ', c: ' + c[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );

			// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. mu: ' + mu[ i ] + '. c: ' + c[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given a negative `mu`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var x;
	var c;
	var y;
	var i;

	expected = negativeMean.expected;
	x = negativeMean.x;
	mu = negativeMean.mu;
	c = negativeMean.c;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[ i ], mu[ i ], c[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: ' + x[ i ] + ', mu: ' + mu[ i ] + ', c: ' + c[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. mu: ' + mu[ i ] + '. c: ' + c[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given a large variance ( = large `b` )', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var x;
	var c;
	var y;
	var i;

	expected = largeVariance.expected;
	x = largeVariance.x;
	mu = largeVariance.mu;
	c = largeVariance.c;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[ i ], mu[ i ], c[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: ' + x[ i ] + ', mu: ' + mu[ i ] + ', c: ' + c[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );

			// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. mu: ' + mu[ i ] + '. c: ' + c[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});
