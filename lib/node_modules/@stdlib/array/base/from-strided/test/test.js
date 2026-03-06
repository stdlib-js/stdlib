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
var isArray = require( '@stdlib/assert/is-array' );
var strided2array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strided2array, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a strided array to generic array', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	actual = strided2array( x.length, x, 1, 0 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 3, 5, 7 ];
	actual = strided2array( 4, x, 2, 0 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 2, 4, 6, 8 ];
	actual = strided2array( 4, x, 2, 1 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 3, 4, 5 ];
	actual = strided2array( 3, x, 1, 2 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 8, 7, 6, 5, 4, 3, 2, 1 ];
	actual = strided2array( x.length, x, -1, x.length-1 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 7, 5, 3 ];
	actual = strided2array( 3, x, -2, x.length-2 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 5, 4, 3 ];
	actual = strided2array( 3, x, -1, x.length-4 );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
