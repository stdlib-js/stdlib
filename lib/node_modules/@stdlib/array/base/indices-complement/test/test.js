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
var isArray = require( '@stdlib/assert/is-array' );
var indicesComplement = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof indicesComplement, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the complement of a list of indices', function test( t ) {
	var expected;
	var actual;
	var idx;

	idx = [ 0, 2, 3 ];
	expected = [ 1, 4 ];

	actual = indicesComplement( 5, idx );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = [ 0, 2, 3 ];
	expected = [ 1, 4, 5, 6, 7, 8, 9 ];

	actual = indicesComplement( 10, idx );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = [ 0, 1, 2, 3, 4 ];
	expected = [];

	actual = indicesComplement( 5, idx );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	idx = [];
	expected = [ 0, 1, 2, 3, 4 ];

	actual = indicesComplement( 5, idx );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, idx, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
