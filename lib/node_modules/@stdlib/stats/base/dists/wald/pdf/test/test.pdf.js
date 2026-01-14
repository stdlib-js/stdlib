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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var pdf = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/r/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y;

	y = pdf( NaN, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 1.0, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 1.0, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 1.0, NaN, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( NaN, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( NaN, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( NaN, NaN, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `+infinity` for `x` and finite `mu` and `lambda`, the function returns `0`', function test( t ) {
	var y = pdf( PINF, 1.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and finite `mu` and `lambda`, the function returns `0`', function test( t ) {
	var y = pdf( NINF, 1.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a negative `lambda`, the function always returns `NaN`', function test( t ) {
	var y;

	y = pdf( 2.0, 1.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 1.0, 1.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, PINF, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NINF, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NaN, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a non-positive `mu`, the function always returns `NaN`', function test( t ) {
	var y;

	y = pdf( 2.0, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, 0.0, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, 0.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, 0.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 1.0, -1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, -1.0, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, -1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, -1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NINF, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NINF, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `lambda` equals `0`, the function evaluates a degenerate distribution centered at `mu`', function test( t ) {
	var y;

	y = pdf( 2.0, 2.0, 0.0 );
	t.strictEqual( y, PINF, 'returns expected value' );

	y = pdf( 1.0, 2.0, 0.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( PINF, 2.0, 0.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( NINF, 2.0, 0.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( NaN, 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a non-positive `x`, the function returns `0` (outside support)', function test( t ) {
	var y;

	y = pdf( 0.0, 1.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( -1.0, 1.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( -10.0, 2.0, 3.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( NINF, 1.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the pdf for `x` given parameters `mu` and `lambda`', function test( t ) {
	var expected;
	var lambda;
	var mu;
	var x;
	var y;
	var i;

	expected = data.expected;
	x = data.x;
	mu = data.mu;
	lambda = data.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], mu[i], lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', mu:'+mu[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 1500 ), 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});
