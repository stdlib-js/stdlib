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
var insertAt = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof insertAt, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function inserts an element into an array', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 1, 2, 3, 3 ];
	expected = [ 1, 1, 4, 2, 3, 3 ];
	actual = insertAt( x, 2, 4 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	expected = [ 1, 1, 4, 2, 3, 3 ];
	actual = insertAt( x, -3, 4 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	expected = [ 1, 1, 2, 3, 4, 3 ];
	actual = insertAt( x, x.length-1, 4 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	expected = [ 1, 1, 2, 3, 4, 3 ];
	actual = insertAt( x, -1, 4 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	expected = [ 4, 1, 1, 2, 3, 3 ];
	actual = insertAt( x, 0, 4 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	expected = [ 4, 1, 1, 2, 3, 3 ];
	actual = insertAt( x, -x.length, 4 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	expected = [ 1, 1, 2, 3, 3, 4 ];
	actual = insertAt( x, x.length, 4 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function clamps out-of-bounds indices to the beginning and end of the array', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3, 4, 5, 6 ];
	expected = [ 1, 2, 3, 4, 5, 6, 7 ];

	actual = insertAt( x, 10, 7 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4, 5, 6 ];
	expected = [ 1, 2, 3, 4, 5, 6, 7 ];

	actual = insertAt( x, 40, 7 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4, 5, 6 ];
	expected = [ 7, 1, 2, 3, 4, 5, 6 ];

	actual = insertAt( x, -10, 7 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4, 5, 6 ];
	expected = [ 7, 1, 2, 3, 4, 5, 6 ];

	actual = insertAt( x, -40, 7 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports inserting a value into an empty array', function test( t ) {
	var expected;
	var actual;

	expected = [ 1 ];

	actual = insertAt( [], 0, 1 );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = insertAt( [], -1, 1 );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
