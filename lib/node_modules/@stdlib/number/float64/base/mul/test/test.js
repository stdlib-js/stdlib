/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var mul = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mul, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies two numbers', function test( t ) {
	t.strictEqual( mul( -2.0, 4.0 ), -8.0, 'returns expected value' );
	t.strictEqual( mul( 3.0, 0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( mul( 0.0, 5.0 ), 0.0, 'returns expected value' );
	t.strictEqual( mul( -3.0, -3.0 ), 9.0, 'returns expected value' );
	t.end();
});

tape( 'the function handles negative zeros', function test( t ) {
	t.strictEqual( isPositiveZero( mul( -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( mul( -0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( mul( 0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( mul( 0.0, 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles infinities', function test( t ) {
	t.strictEqual( mul( PINF, 5.0 ), PINF, 'returns expected value' );
	t.strictEqual( mul( 5.0, PINF ), PINF, 'returns expected value' );
	t.strictEqual( mul( PINF, PINF ), PINF, 'returns expected value' );

	t.strictEqual( mul( NINF, 5.0 ), NINF, 'returns expected value' );
	t.strictEqual( mul( 5.0, NINF ), NINF, 'returns expected value' );
	t.strictEqual( mul( NINF, NINF ), PINF, 'returns expected value' );

	t.strictEqual( mul( NINF, PINF ), NINF, 'returns expected value' );
	t.strictEqual( mul( PINF, NINF ), NINF, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	t.strictEqual( isnan( mul( NaN, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( mul( NaN, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( mul( NaN, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( mul( 5.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( mul( PINF, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( mul( NINF, NaN ) ), true, 'returns expected value' );

	t.strictEqual( isnan( mul( NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
