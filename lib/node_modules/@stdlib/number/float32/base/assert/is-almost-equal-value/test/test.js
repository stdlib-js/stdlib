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
var EPS = require( '@stdlib/constants/float32/eps' );
var isAlmostEqualValue = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAlmostEqualValue, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN` as either input value', function test( t ) {
	t.strictEqual( isAlmostEqualValue( NaN, 3.14, 0 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( 3.14, NaN, 0 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( NaN, NaN, 0 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( NaN, NaN, 1 ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided two single-precision floating-point numbers which are the same value irrespective of the specified number of ULPs', function test( t ) {
	var values;
	var i;

	values = [
		5.0,
		3.14,
		-3.14,
		0.0,
		-0.0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAlmostEqualValue( values[ i ], values[ i ], 0 ), true, 'returns expected value' );
		t.strictEqual( isAlmostEqualValue( values[ i ], values[ i ], 1 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `true` if provided two single-precision floating-point numbers which are approximately equal within a specified number of ULPs', function test( t ) {
	t.strictEqual( isAlmostEqualValue( 1.0, 1.0+EPS, 1 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( 1.0+EPS, 1.0, 1 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( 1.0, 1.0+EPS+EPS, 2 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided two single-precision floating-point numbers which are not approximately equal within a specified number of ULPs', function test( t ) {
	t.strictEqual( isAlmostEqualValue( 1.0, 1.0+EPS, 0 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( 1.0+EPS, 1.0, 0 ), false, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( 1.0, 1.0+EPS+EPS, 1 ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if signed zeros are provided as input values irrespective of the specified number of ULPs', function test( t ) {
	t.strictEqual( isAlmostEqualValue( 0.0, -0.0, 0 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( -0.0, 0.0, 0 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( 0.0, -0.0, 1 ), true, 'returns expected value' );
	t.strictEqual( isAlmostEqualValue( -0.0, 0.0, 1 ), true, 'returns expected value' );
	t.end();
});
