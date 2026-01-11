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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveFinite = require( '@stdlib/assert/is-positive-finite' );
var EPS = require( '@stdlib/constants/float16/eps' );
var SMALLEST_SUBNORMAL = require( '@stdlib/constants/float16/smallest-subnormal' );
var PINF = require( '@stdlib/constants/float16/pinf' );
var NINF = require( '@stdlib/constants/float16/ninf' );
var ulpdiff = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ulpdiff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the ULP difference between two half-precision floating-point numbers', function test( t ) {
	t.strictEqual( ulpdiff( 1.0, 1.0+EPS ), 1.0, 'returns expected value' );
	t.strictEqual( ulpdiff( 1.0+EPS, 1.0 ), 1.0, 'returns expected value' );

	t.strictEqual( ulpdiff( 1.0, 1.0+( EPS*2.0 ) ), 2.0, 'returns expected value' );
	t.strictEqual( ulpdiff( -1.0, -1.0+EPS ), 2.0, 'returns expected value' );

	t.strictEqual( ulpdiff( -1.0, -1.0-( EPS*2.0 ) ), 2.0, 'returns expected value' );
	t.strictEqual( ulpdiff( -1.0, -1.0+( EPS*2.0 ) ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'the function handles signed zeros', function test( t ) {
	t.strictEqual( ulpdiff( 0.0, -0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( ulpdiff( -0.0, 0.0 ), 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` for identical values', function test( t ) {
	t.strictEqual( ulpdiff( 5.0, 5.0 ), 0.0, 'returns expected value' );
	t.strictEqual( ulpdiff( -5.0, -5.0 ), 0.0, 'returns expected value' );
	t.strictEqual( ulpdiff( 0.0, 0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( ulpdiff( -0.0, -0.0 ), 0.0, 'returns expected value' );

	t.strictEqual( ulpdiff( SMALLEST_SUBNORMAL, SMALLEST_SUBNORMAL ), 0.0, 'returns expected value' );
	t.strictEqual( ulpdiff( -SMALLEST_SUBNORMAL, -SMALLEST_SUBNORMAL ), 0.0, 'returns expected value' );

	t.strictEqual( ulpdiff( PINF, PINF ), 0.0, 'returns expected value' );
	t.strictEqual( ulpdiff( NINF, NINF ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function handles infinities', function test( t ) {
	t.strictEqual( isPositiveFinite( ulpdiff( 5.0, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveFinite( ulpdiff( PINF, 5.0 ) ), true, 'returns expected value' );

	t.strictEqual( isPositiveFinite( ulpdiff( 5.0, NINF ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveFinite( ulpdiff( NINF, 5.0 ) ), true, 'returns expected value' );

	t.strictEqual( isPositiveFinite( ulpdiff( PINF, NINF ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveFinite( ulpdiff( NINF, PINF ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function handles subnormal numbers', function test( t ) {
	t.strictEqual( ulpdiff( SMALLEST_SUBNORMAL, 0.0 ), 1.0, 'returns expected value' );
	t.strictEqual( ulpdiff( 0.0, SMALLEST_SUBNORMAL ), 1.0, 'returns expected value' );

	t.strictEqual( ulpdiff( SMALLEST_SUBNORMAL, -SMALLEST_SUBNORMAL ), 2.0, 'returns expected value' );
	t.strictEqual( ulpdiff( -SMALLEST_SUBNORMAL, SMALLEST_SUBNORMAL ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	t.strictEqual( isnan( ulpdiff( NaN, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( ulpdiff( NaN, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( ulpdiff( NaN, NINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( ulpdiff( NaN, SMALLEST_SUBNORMAL ) ), true, 'returns expected value' );

	t.strictEqual( isnan( ulpdiff( 5.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( ulpdiff( PINF, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( ulpdiff( NINF, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( ulpdiff( SMALLEST_SUBNORMAL, NaN ) ), true, 'returns expected value' );

	t.strictEqual( isnan( ulpdiff( NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
