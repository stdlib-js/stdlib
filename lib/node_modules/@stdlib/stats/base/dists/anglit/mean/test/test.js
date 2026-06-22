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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var mean = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );
var smallMu = require( './fixtures/python/small_mu.json' );
var largeMu = require( './fixtures/python/large_mu.json' );
var smallSigma = require( './fixtures/python/small_sigma.json' );
var largeSigma = require( './fixtures/python/large_sigma.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mean, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = mean( NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = mean( 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `sigma`, the function returns `NaN`', function test( t ) {
	var y;

	y = mean( 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the expected value of an anglit distribution', function test( t ) {
	var expected;
	var sigma;
	var mu;
	var y;
	var i;

	expected = data.expected;
	mu = data.mu;
	sigma = data.sigma;
	for ( i = 0; i < mu.length; i++ ) {
		y = mean( mu[i], sigma[i] );
		t.strictEqual( y, expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the expected value for small `mu` values', function test( t ) {
	var expected;
	var sigma;
	var mu;
	var y;
	var i;

	expected = smallMu.expected;
	mu = smallMu.mu;
	sigma = smallMu.sigma;
	for ( i = 0; i < mu.length; i++ ) {
		y = mean( mu[i], sigma[i] );
		t.strictEqual( y, expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the expected value for large `mu` values', function test( t ) {
	var expected;
	var sigma;
	var mu;
	var y;
	var i;

	expected = largeMu.expected;
	mu = largeMu.mu;
	sigma = largeMu.sigma;
	for ( i = 0; i < mu.length; i++ ) {
		y = mean( mu[i], sigma[i] );
		t.strictEqual( y, expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the expected value for small `sigma` values', function test( t ) {
	var expected;
	var sigma;
	var mu;
	var y;
	var i;

	expected = smallSigma.expected;
	mu = smallSigma.mu;
	sigma = smallSigma.sigma;
	for ( i = 0; i < mu.length; i++ ) {
		y = mean( mu[i], sigma[i] );
		t.strictEqual( y, expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the expected value for large `sigma` values', function test( t ) {
	var expected;
	var sigma;
	var mu;
	var y;
	var i;

	expected = largeSigma.expected;
	mu = largeSigma.mu;
	sigma = largeSigma.sigma;
	for ( i = 0; i < mu.length; i++ ) {
		y = mean( mu[i], sigma[i] );
		t.strictEqual( y, expected[i], 'returns expected value' );
	}
	t.end();
});
