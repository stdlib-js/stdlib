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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PI = require( '@stdlib/constants/float64/pi' );
var add4 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof add4, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function adds four numbers', function test( t ) {
	t.strictEqual( add4( -2.0, 4.0, 3.0, 5.0 ), 10.0, 'returns expected value' );
	t.strictEqual( add4( 3.0, 0.0, 2.0, 4.0 ), 9.0, 'returns expected value' );
	t.strictEqual( add4( 0.0, -0.0, -0.0, -0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( add4( -PI, -PI, -PI, -PI ), -4.0*PI, 'returns expected value' );
	t.end();
});

tape( 'the function handles negative zeros', function test( t ) {
	t.strictEqual( isNegativeZero( add4( -0.0, -0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add4( -0.0, 0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add4( 0.0, -0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add4( 0.0, 0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add4( 0.0, -0.0, 0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add4( -0.0, 0.0, 0.0, -0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles infinities', function test( t ) {
	t.strictEqual( add4( PINF, 5.0, 2.0, 1.0 ), PINF, 'returns expected value' );
	t.strictEqual( add4( 5.0, PINF, 2.0, 1.0 ), PINF, 'returns expected value' );
	t.strictEqual( add4( PINF, PINF, PINF, PINF ), PINF, 'returns expected value' );

	t.strictEqual( add4( NINF, 5.0, 2.0, 1.0 ), NINF, 'returns expected value' );
	t.strictEqual( add4( 5.0, NINF, 2.0, 1.0 ), NINF, 'returns expected value' );
	t.strictEqual( add4( NINF, NINF, NINF, NINF ), NINF, 'returns expected value' );

	t.strictEqual( isnan( add4( NINF, PINF, PINF, NINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add4( PINF, NINF, PINF, NINF ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	t.strictEqual( isnan( add4( NaN, 5.0, 2.0, 1.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add4( NaN, PINF, PINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add4( NaN, NINF, NINF, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( add4( 5.0, NaN, 2.0, 1.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add4( PINF, NaN, PINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add4( NINF, NaN, NINF, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( add4( 5.0, 2.0, NaN, 1.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add4( PINF, PINF, NaN, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add4( NINF, NINF, NaN, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( add4( NaN, NaN, NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
