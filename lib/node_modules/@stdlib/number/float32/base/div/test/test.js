/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var divf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof divf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function divides two numbers', function test( t ) {
	t.strictEqual( divf( -2.0, 4.0 ), -0.5, 'returns expected value' );
	t.strictEqual( divf( 2.0, -4.0 ), -0.5, 'returns expected value' );
	t.strictEqual( divf( 3.0, 3.0 ), 1.0, 'returns expected value' );
	t.strictEqual( divf( -9.0, -3.0 ), 3.0, 'returns expected value' );
	t.strictEqual( isNegativeZerof( divf( 0.0, -5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( divf( 0.0, 5.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles divfision by zero', function test( t ) {
	t.strictEqual( isnanf( divf( 0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( -0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( 0.0, -0.0 ) ), true, 'returns expected value' );

	t.strictEqual( divf( 5.0, 0.0 ), PINF, 'returns expected value' );
	t.strictEqual( divf( PINF, 0.0 ), PINF, 'returns expected value' );
	t.strictEqual( divf( NINF, 0.0 ), NINF, 'returns expected value' );

	t.strictEqual( divf( 5.0, -0.0 ), NINF, 'returns expected value' );
	t.strictEqual( divf( PINF, -0.0 ), NINF, 'returns expected value' );
	t.strictEqual( divf( NINF, -0.0 ), PINF, 'returns expected value' );

	t.end();
});

tape( 'the function handles signed zeros', function test( t ) {
	t.strictEqual( isPositiveZerof( divf( -0.0, -5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( divf( -0.0, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( divf( 0.0, -5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( divf( 0.0, 5.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles infinities', function test( t ) {
	t.strictEqual( divf( PINF, 5.0 ), PINF, 'returns expected value' );
	t.strictEqual( isPositiveZerof( divf( 5.0, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( PINF, PINF ) ), true, 'returns expected value' );

	t.strictEqual( divf( NINF, 5.0 ), NINF, 'returns expected value' );
	t.strictEqual( isNegativeZerof( divf( 5.0, NINF ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( NINF, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnanf( divf( NINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( PINF, NINF ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	t.strictEqual( isnanf( divf( NaN, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( NaN, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( NaN, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnanf( divf( 5.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( PINF, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( divf( NINF, NaN ) ), true, 'returns expected value' );

	t.strictEqual( isnanf( divf( NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
