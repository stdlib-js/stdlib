/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var wrapIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof wrapIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function wraps an index on the interval [0,max]', function test( t ) {
	var expected;
	var values;
	var i;

	values = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]; // eslint-disable-line max-len
	expected = [ 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 ]; // eslint-disable-line max-len

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( wrapIndex( values[ i ], 9 ), expected[ i ], 'returns expected value. idx: '+values[ i ]+'. expected: '+expected[ i ]+'.' );
	}
	t.end();
});

tape( 'the function wraps an index on the interval [0,max]', function test( t ) {
	t.strictEqual( wrapIndex( 2, 10 ), 2, 'returns expected value' );
	t.strictEqual( wrapIndex( 12, 10 ), 1, 'returns expected value' );
	t.strictEqual( wrapIndex( -2, 10 ), 9, 'returns expected value' );
	t.strictEqual( wrapIndex( 21, 10 ), 10, 'returns expected value' );
	t.strictEqual( wrapIndex( 22, 10 ), 0, 'returns expected value' );
	t.strictEqual( wrapIndex( 26, 10 ), 4, 'returns expected value' );
	t.strictEqual( wrapIndex( -21, 10 ), 1, 'returns expected value' );
	t.strictEqual( wrapIndex( -22, 10 ), 0, 'returns expected value' );
	t.strictEqual( wrapIndex( -26, 10 ), 7, 'returns expected value' );
	t.end();
});
