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
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var mulf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mulf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies two numbers', function test( t ) {
	t.strictEqual( mulf( -2.0, 4.0 ), -8.0, 'returns expected value' );
	t.strictEqual( mulf( 3.0, 0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( mulf( 0.0, 5.0 ), 0.0, 'returns expected value' );
	t.strictEqual( mulf( -3.0, -3.0 ), 9.0, 'returns expected value' );
	t.end();
});

tape( 'the function handles negative zeros', function test( t ) {
	t.strictEqual( isPositiveZerof( mulf( -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( mulf( -0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( mulf( 0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( mulf( 0.0, 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles infinities', function test( t ) {
	t.strictEqual( mulf( PINF, 5.0 ), PINF, 'returns expected value' );
	t.strictEqual( mulf( 5.0, PINF ), PINF, 'returns expected value' );
	t.strictEqual( mulf( PINF, PINF ), PINF, 'returns expected value' );

	t.strictEqual( mulf( NINF, 5.0 ), NINF, 'returns expected value' );
	t.strictEqual( mulf( 5.0, NINF ), NINF, 'returns expected value' );
	t.strictEqual( mulf( NINF, NINF ), PINF, 'returns expected value' );

	t.strictEqual( mulf( NINF, PINF ), NINF, 'returns expected value' );
	t.strictEqual( mulf( PINF, NINF ), NINF, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	t.strictEqual( isnanf( mulf( NaN, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( mulf( NaN, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( mulf( NaN, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnanf( mulf( 5.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( mulf( PINF, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( mulf( NINF, NaN ) ), true, 'returns expected value' );

	t.strictEqual( isnanf( mulf( NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
