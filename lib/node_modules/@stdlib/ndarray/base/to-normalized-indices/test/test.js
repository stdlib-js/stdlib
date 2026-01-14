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
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var isArray = require( '@stdlib/assert/is-array' );
var Int32Array = require( '@stdlib/array/int32' );
var toNormalizedIndices = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toNormalizedIndices, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function normalizes a list of indices to the interval `[0,max]`', function test( t ) {
	var expected;
	var actual;
	var idx;

	idx = [ 2, 5, 0, 7, 1, -5, -1, -2, -10, -11 ];
	expected = [ 2, 5, 0, 7, 1, 6, 10, 9, 1, 0 ];

	actual = toNormalizedIndices( idx, 10 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = new Int32Array( [ 2, 5, 0, 7, 1, -5, -1, -2, -10, -11 ] );
	expected = new Int32Array( [ 2, 5, 0, 7, 1, 6, 10, 9, 1, 0 ] );

	actual = toNormalizedIndices( idx, 10 );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an out-of-bounds index, the function normalizes the index to `-1`', function test( t ) {
	var expected;
	var actual;
	var idx;

	idx = [ 15, -15 ];
	expected = [ -1, -1 ];

	actual = toNormalizedIndices( idx, 10 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = new Int32Array( [ 15, -15 ] );
	expected = new Int32Array( [ -1, -1 ] );

	actual = toNormalizedIndices( idx, 10 );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
