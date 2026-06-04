/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isAlmostSameValue = require( '@stdlib/number/float64/base/assert/is-almost-same-value' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// VARIABLES //

var quantile = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( quantile instanceof Error )
};


// FIXTURES //

var positiveMu = require( './fixtures/python/positive_mu.json' );
var negativeMu = require( './fixtures/python/negative_mu.json' );
var largeSigma = require( './fixtures/python/large_sigma.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = quantile( NaN, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = quantile( 0.2, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = quantile( 0.2, 0.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and a valid `mu` and `sigma`, the function returns `NaN`', opts, function test( t ) {
	var y = quantile( 1.1, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = quantile( -0.1, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a negative `sigma`, the function always returns `NaN`', opts, function test( t ) {
	var y;

	y = quantile( 0.5, 0.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.0, 0.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.5, 0.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.5, PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.5, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.5, NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `sigma` equals `0`, the function evaluates a degenerate distribution centered at `mu`', opts, function test( t ) {
	var y;

	y = quantile( 0.3, 2.0, 0.0 );
	t.strictEqual( y, 2.0, 'returns expected value' );

	y = quantile( 0.9, 2.0, 0.0 );
	t.strictEqual( y, 2.0, 'returns expected value' );

	y = quantile( 1.1, 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( -0.1, 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the quantile function at `p` given positive `mu`', opts, function test( t ) {
	var expected;
	var sigma;
	var mu;
	var p;
	var y;
	var i;

	expected = positiveMu.expected;
	p = positiveMu.p;
	mu = positiveMu.mu;
	sigma = positiveMu.sigma;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], mu[i], sigma[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+', mu: '+mu[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 5 ), 'within tolerance. p: '+p[ i ]+'. mu: '+mu[i]+'. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile function at `p` given negative `mu`', opts, function test( t ) {
	var expected;
	var sigma;
	var mu;
	var p;
	var y;
	var i;

	expected = negativeMu.expected;
	p = negativeMu.p;
	mu = negativeMu.mu;
	sigma = negativeMu.sigma;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], mu[i], sigma[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+', mu: '+mu[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 80 ), 'within tolerance. p: '+p[ i ]+'. mu: '+mu[i]+'. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile function at `p` given large `sigma`', opts, function test( t ) {
	var expected;
	var sigma;
	var mu;
	var p;
	var y;
	var i;

	expected = largeSigma.expected;
	p = largeSigma.p;
	mu = largeSigma.mu;
	sigma = largeSigma.sigma;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], mu[i], sigma[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+', mu: '+mu[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 500 ), 'within tolerance. p: '+p[ i ]+'. mu: '+mu[i]+'. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});
