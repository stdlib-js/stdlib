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
var linspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof linspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a linearly spaced array', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;

	start = 0;
	stop = 10;

	actual = linspace( start, stop, 10 );

	// Verify correct length:
	t.strictEqual( actual.length, 10, 'returns expected value' );

	// Verify that the returned array includes the start and stop values:
	t.strictEqual( actual[0], start, 'returns expected value' );
	t.strictEqual( actual[actual.length-1], 10, 'returns expected value' );

	// Verify correct values:
	actual = linspace( start, stop, 11 );
	expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	// Decrement:
	actual = linspace( stop, start, 11 );
	expected = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided a length equal to `0`', function test( t ) {
	t.deepEqual( linspace( 0, 10, 0 ), [], 'returns expected value' );
	t.end();
});
