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
var isArray = require( '@stdlib/assert/is-array' );
var Int32Array = require( '@stdlib/array/int32' );
var toUniqueNormalizedIndices = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toUniqueNormalizedIndices, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a unique list of indices after normalizing to the interval `[0,max]`', function test( t ) {
	var expected;
	var actual;
	var idx;

	idx = [ 2, 5, 0, 7, 1, -5, -1, -2, -10, -11 ];
	expected = [ 2, 5, 0, 7, 1, 6, 10, 9 ];

	actual = toUniqueNormalizedIndices( idx, 10 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = new Int32Array( [ 2, 5, 0, 7, 1, -5, -1, -2, -10, -11 ] );
	expected = [ 2, 5, 0, 7, 1, 6, 10, 9 ];

	actual = toUniqueNormalizedIndices( idx, 10 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an out-of-bounds index, the function returns `null`', function test( t ) {
	var actual;
	var idx;

	idx = [ 15, -15 ];
	actual = toUniqueNormalizedIndices( idx, 10 );
	t.strictEqual( actual, null, 'returns expected value' );

	idx = new Int32Array( [ 15, -15 ] );
	actual = toUniqueNormalizedIndices( idx, 10 );
	t.strictEqual( actual, null, 'returns expected value' );

	t.end();
});
