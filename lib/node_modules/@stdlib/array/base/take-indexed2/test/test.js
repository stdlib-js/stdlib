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
var take2 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof take2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function takes elements from two arrays', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = [ 5, 6, 7, 8 ];

	indices = [ 1, 3 ];
	actual = take2( x, y, indices );
	expected = [
		[ 2, 4 ],
		[ 6, 8 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	actual = take2( x, y, indices );
	expected = [
		[ 2, 2, 4, 4 ],
		[ 6, 6, 8, 8 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 3, 2, 1, 0 ];
	actual = take2( x, y, indices );
	expected = [
		[ 4, 3, 2, 1 ],
		[ 8, 7, 6, 5 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = take2( x, y, indices );
	expected = [
		[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
		[ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function does not perform bounds checking', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3, 4 ];
	y = [ 5, 6, 7, 8 ];

	indices = [ 4, 5, 1, 2 ];
	actual = take2( x, y, indices );
	expected = [
		[ void 0, void 0, 2, 3 ],
		[ void 0, void 0, 6, 7 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided a third argument which is empty', function test( t ) {
	var x = [ 1, 2, 3, 4 ];
	t.deepEqual( take2( x, x, [] ), [ [], [] ], 'returns expected value' );
	t.end();
});
