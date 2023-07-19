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
var PI = require( '@stdlib/constants/float64/pi' );
var add = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof add, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function adds two numbers', function test( t ) {
	t.strictEqual( add( -2.0, 4.0 ), 2.0, 'returns expected value' );
	t.strictEqual( add( 3.0, 0.0 ), 3.0, 'returns expected value' );
	t.strictEqual( add( 0.0, -0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( add( -PI, -PI ), -2.0*PI, 'returns expected value' );
	t.end();
});

tape( 'the function handles negative zeros', function test( t ) {
	t.strictEqual( isNegativeZero( add( -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add( -0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add( 0.0, -0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles infinities', function test( t ) {
	t.strictEqual( add( PINF, 5.0 ), PINF, 'returns expected value' );
	t.strictEqual( add( 5.0, PINF ), PINF, 'returns expected value' );
	t.strictEqual( add( PINF, PINF ), PINF, 'returns expected value' );

	t.strictEqual( add( NINF, 5.0 ), NINF, 'returns expected value' );
	t.strictEqual( add( 5.0, NINF ), NINF, 'returns expected value' );
	t.strictEqual( add( NINF, NINF ), NINF, 'returns expected value' );

	t.strictEqual( isnan( add( NINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add( PINF, NINF ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	t.strictEqual( isnan( add( NaN, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add( NaN, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add( NaN, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( add( 5.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add( PINF, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add( NINF, NaN ) ), true, 'returns expected value' );

	t.strictEqual( isnan( add( NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
