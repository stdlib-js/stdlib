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
var logspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a logarithmically spaced array', function test( t ) {
	var expected;
	var actual;
	var a;
	var b;

	a = 0;
	b = 3;

	actual = logspace( a, b, 10 );

	// Verify the correct length:
	t.strictEqual( actual.length, 10, 'returns expected value' );

	// Verify that the array includes start and stop values:
	t.strictEqual( actual[ 0 ], 1, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 1000, 'returns expected value' );

	// Verify correct values:
	actual = logspace( a, b, 4 );
	expected = [ 1, 10, 100, 1000 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	// Decrement:
	actual = logspace( b, a, 4 );
	expected = [ 1000, 100, 10, 1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if the provided length is `0`', function test( t ) {
	t.deepEqual( logspace( 0, 10, 0 ), [], 'returns expected value' );
	t.end();
});
