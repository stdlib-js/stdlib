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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float16/pinf' );
var NINF = require( '@stdlib/constants/float16/ninf' );
var sub = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sub, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function subtracts two numbers', function test( t ) {
	t.strictEqual( sub( -2.0, 4.0 ), -6.0, 'returns expected value' );
	t.strictEqual( sub( 3.0, 0.0 ), 3.0, 'returns expected value' );
	t.strictEqual( sub( 0.0, -0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( sub( -3.0, -3.0 ), 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function handles negative zeros', function test( t ) {
	t.strictEqual( isPositiveZero( sub( -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( sub( -0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( sub( 0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( sub( 0.0, 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles infinities', function test( t ) {
	t.strictEqual( sub( PINF, 5.0 ), PINF, 'returns expected value' );
	t.strictEqual( sub( 5.0, PINF ), NINF, 'returns expected value' );
	t.strictEqual( isnan( sub( PINF, PINF ) ), true, 'returns expected value' );

	t.strictEqual( sub( NINF, 5.0 ), NINF, 'returns expected value' );
	t.strictEqual( sub( 5.0, NINF ), PINF, 'returns expected value' );
	t.strictEqual( isnan( sub( NINF, NINF ) ), true, 'returns expected value' );

	t.strictEqual( sub( NINF, PINF ), NINF, 'returns expected value' );
	t.strictEqual( sub( PINF, NINF ), PINF, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	t.strictEqual( isnan( sub( NaN, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( sub( NaN, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( sub( NaN, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( sub( 5.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( sub( PINF, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( sub( NINF, NaN ) ), true, 'returns expected value' );

	t.strictEqual( isnan( sub( NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
