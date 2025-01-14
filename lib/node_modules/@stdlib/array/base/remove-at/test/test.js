/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var removeAt = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof removeAt, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function removes an element from an array', function test( t ) {
	var expected;
	var actual;
	var len;
	var x;

	x = [ 1, 1, 2, 3, 3 ];
	len = x.length;
	expected = [ 1, 1, 3, 3 ];
	actual = removeAt( x, 2 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len-1, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	len = x.length;
	expected = [ 1, 1, 3, 3 ];
	actual = removeAt( x, -3 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len-1, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	len = x.length;
	expected = [ 1, 1, 2, 3 ];
	actual = removeAt( x, x.length-1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len-1, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	len = x.length;
	expected = [ 1, 1, 2, 3 ];
	actual = removeAt( x, -1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len-1, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	len = x.length;
	expected = [ 1, 2, 3, 3 ];
	actual = removeAt( x, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len-1, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 1, 2, 3, 3 ];
	len = x.length;
	expected = [ 1, 2, 3, 3 ];
	actual = removeAt( x, -x.length );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len-1, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an input unchanged if provided an out-of-bounds index', function test( t ) {
	var expected;
	var actual;
	var len;
	var x;

	x = [ 1, 2, 3, 4, 5, 6 ];
	len = x.length;
	expected = x.slice();

	actual = removeAt( x, 10 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = removeAt( x, 40 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = removeAt( x, -10 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = removeAt( x, -40 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, len, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided an array of length `0`', function test( t ) {
	var expected;
	var actual;

	expected = [];

	actual = removeAt( [], 0 );
	t.strictEqual( actual.length, 0, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = removeAt( [], -1 );
	t.strictEqual( actual.length, 0, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
