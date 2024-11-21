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
var incrspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a linearly spaced array', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;

	start = 0;
	stop = 10;

	actual = incrspace( start, stop, 2 );
	expected = [ 0, 2, 4, 6, 8 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = incrspace( start, 11, 2 );
	expected = [ 0, 2, 4, 6, 8, 10 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	// Decrement:
	actual = incrspace( stop, start, -2 );
	expected = [ 10, 8, 6, 4, 2 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	// Large array:
	actual = incrspace( start, 1e6, 1 );
	t.equal( actual.length, 1e6, 'returns expected value' );

	t.end();
});

tape( 'the function returns a single element array for incompatible increments', function test( t ) {
	t.deepEqual( incrspace( 0, 10, -1 ), [ 0 ], 'returns expected value' );
	t.deepEqual( incrspace( 0, 10, 11 ), [ 0 ], 'returns expected value' );
	t.end();
});
