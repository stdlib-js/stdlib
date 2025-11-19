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

/* eslint-disable no-multi-spaces */

'use strict';

// MODULES //

var tape = require( 'tape' );
var toCompact = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toCompact, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a banded nested array to compact banded storage (colexicographic=false)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		[  1,  2,  3,   0,  0 ],
		[ -2,  4,  5,   6,  0 ],
		[ -3, -5,  7,   8,  9 ],
		[  0, -6, -8,  10, 11 ],
		[  0,  0, -9, -11, 12 ]
	];

	expected = [
		[  0,  0,  3,   6,  9 ],
		[  0,  2,  5,   8, 11 ],
		[  1,  4,  7,  10, 12 ],
		[ -2, -5, -8, -11,  0 ],
		[ -3, -6, -9,   0,  0 ]
	];
	actual = toCompact( arr, 2, 2, false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[  1,  4,  7, 10, 12 ]
	];
	actual = toCompact( arr, 0, 0, false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[  0,  2,  5,  8, 11 ],
		[  1,  4,  7, 10, 12 ]
	];
	actual = toCompact( arr, 1, 0, false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[  1,  4,  7, 10, 12 ],
		[ -2, -5, -8, -11,  0 ]
	];
	actual = toCompact( arr, 0, 1, false );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a banded nested array to compact banded storage ( colexicographic=true)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [
		[  1,  2,  3,   0,  0 ],
		[ -2,  4,  5,   6,  0 ],
		[ -3, -5,  7,   8,  9 ],
		[  0, -6, -8,  10, 11 ],
		[  0,  0, -9, -11, 12 ]
	];

	expected = [
		[ 0,  0,  1,  -2, -3 ],
		[ 0,  2,  4,  -5, -6 ],
		[ 3,  5,  7,  -8, -9 ],
		[ 6,  8, 10, -11,  0 ],
		[ 9, 11, 12,   0,  0 ]
	];
	actual = toCompact( arr, 2, 2, true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[  1 ],
		[  4 ],
		[  7 ],
		[ 10 ],
		[ 12 ]
	];
	actual = toCompact( arr, 0, 0, true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[  0,  1 ],
		[  2,  4 ],
		[  5,  7 ],
		[  8, 10 ],
		[ 11, 12 ]
	];
	actual = toCompact( arr, 1, 0, true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[  1,  -2, -3 ],
		[  4,  -5, -6 ],
		[  7,  -8, -9 ],
		[ 10, -11,  0 ],
		[ 12,   0,  0 ]
	];
	actual = toCompact( arr, 0, 2, true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
