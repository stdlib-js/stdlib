/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var unitspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unitspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a linearly spaced array', function test( t ) {
	var expected;
	var actual;

	actual = unitspace( 0, 10 );
	expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = unitspace( -5, 5 );
	expected = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a single element array for bounds incompatible with incrementing', function test( t ) {
	t.deepEqual( unitspace( 0, -1 ), [ 0 ], 'returns expected value' );
	t.deepEqual( unitspace( 5, 4 ), [ 5 ], 'returns expected value' );
	t.deepEqual( unitspace( 5, 5 ), [ 5 ], 'returns expected value' );
	t.deepEqual( unitspace( 5, 5.5 ), [ 5 ], 'returns expected value' );
	t.deepEqual( unitspace( 5, 6 ), [ 5 ], 'returns expected value' );
	t.end();
});
