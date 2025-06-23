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
var isArrayArray = require( '@stdlib/assert/is-array-array' );
var linspace2d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof linspace2d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a linearly spaced two-dimensional nested array', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;
	var sh;

	start = 0;
	stop = 10;
	sh = [ 2, 3 ];

	actual = linspace2d( start, stop, sh, false );

	// Verify that the output is a nested array:
	t.strictEqual( isArrayArray( actual ), true, 'returns expected value' );

	// Verify that the returned array includes the start and stop values:
	t.strictEqual( actual[0][0], start, 'returns expected value' );
	t.strictEqual( actual[actual.length-1][2], 10, 'returns expected value' );

	// Verify correct values:
	actual = linspace2d( 0, 100, sh, false );
	expected = [ [ 0, 20, 40 ], [ 60, 80, 100 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	// Decrement:
	actual = linspace2d( 100, 0, sh, false );
	expected = [ [ 100, 80, 60 ], [ 40, 20, 0 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced two-dimensional nested array (colexicographic)', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;
	var sh;

	start = 0;
	stop = 10;
	sh = [ 2, 3 ];

	actual = linspace2d( start, stop, sh, true );

	// Verify that the output is a nested array:
	t.strictEqual( isArrayArray( actual ), true, 'returns expected value' );

	// Verify that the returned array includes the start and stop values:
	t.strictEqual( actual[0][0], start, 'returns expected value' );
	t.strictEqual( actual[actual.length-1][2], 10, 'returns expected value' );

	// Verify correct values:
	actual = linspace2d( 0, 100, sh, true );
	expected = [ [ 0, 40, 80 ], [ 20, 60, 100 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	// Decrement:
	actual = linspace2d( 100, 0, sh, true );
	expected = [ [ 100, 60, 20 ], [ 80, 40, 0 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if the product of the number of rows and columns is `0`', function test( t ) {
	t.deepEqual( linspace2d( 0, 10, [ 2, 0 ], false ), [], 'returns expected value' );
	t.end();
});
