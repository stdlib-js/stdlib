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
var slice = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof slice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( slice.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty string if provided a second argument greater or equal to string length', function test( t ) {
	t.strictEqual( slice( 'hello world', 12, 4 ), '', 'returns expected value' );
	t.strictEqual( slice( 'hello world', 11, 4 ), '', 'returns expected value' );
	t.end();
});

tape( 'the function slices the UTF-16 code units of a provided string (positive indices)', function test( t ) {
	var out;

	out = slice( 'hello world', 1, 11 );
	t.strictEqual( out, 'ello world', 'returns expected value' );

	out = slice( 'hello world', 7, 11 );
	t.strictEqual( out, 'orld', 'returns expected value' );

	out = slice( '!!!', 1, 3 );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = slice( '!!!', 2, 3 );
	t.strictEqual( out, '!', 'returns expected value' );

	t.end();
});

tape( 'the function slices the UTF-16 code units of a provided string (negative start index)', function test( t ) {
	var out;

	out = slice( 'hello world', -4, 11 );
	t.strictEqual( out, 'orld', 'returns expected value' );

	out = slice( 'hello world', -7, 11 );
	t.strictEqual( out, 'o world', 'returns expected value' );

	out = slice( '!!!', -1, 3 );
	t.strictEqual( out, '!', 'returns expected value' );

	out = slice( '!!!', -2, 3 );
	t.strictEqual( out, '!!', 'returns expected value' );

	t.end();
});

tape( 'the function slices the UTF-16 code units of a provided string (negative end index)', function test( t ) {
	var out;

	out = slice( 'hello world', 0, -8 );
	t.strictEqual( out, 'hel', 'returns expected value' );

	out = slice( 'hello world', 4, -2 );
	t.strictEqual( out, 'o wor', 'returns expected value' );

	out = slice( '!!!', 0, -1 );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = slice( '!!!', 1, -1 );
	t.strictEqual( out, '!', 'returns expected value' );

	t.end();
});
