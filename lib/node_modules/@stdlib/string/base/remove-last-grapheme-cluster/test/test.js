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
var removeLast = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof removeLast, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( removeLast( '', 1 ), '', 'returns expected value' );
	t.strictEqual( removeLast( '', 2 ), '', 'returns expected value' );
	t.strictEqual( removeLast( '', 3 ), '', 'returns expected value' );
	t.end();
});

tape( 'the function returns the input string if provided zero as the second argument', function test( t ) {
	t.strictEqual( removeLast( 'hello world', 0 ), 'hello world', 'returns expected value' );
	t.end();
});

tape( 'the function removes the last grapheme cluster of a provided string (ascii)', function test( t ) {
	var out;

	out = removeLast( 'hello world', 1 );
	t.strictEqual( out, 'hello worl', 'returns expected value' );

	out = removeLast( '!!!', 1 );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = removeLast( 'Hello World', 1 );
	t.strictEqual( out, 'Hello Worl', 'returns expected value' );

	t.end();
});

tape( 'the function removes the last grapheme cluster of a provided string (Unicode)', function test( t ) {
	var out;

	out = removeLast( 'अनुच्छेद', 1 );
	t.strictEqual( out, 'अनुच्छे', 'returns expected value' );

	out = removeLast( '六书/六書', 1 );
	t.strictEqual( out, '六书/六', 'returns expected value' );

	t.end();
});

tape( 'the function removes the last grapheme cluster of a provided string (emoji)', function test( t ) {
	var out;

	out = removeLast( '🌷', 1 );
	t.strictEqual( out, '', 'returns expected value' );

	out = removeLast( '🏝️🌷', 1 );
	t.strictEqual( out, '🏝️', 'returns expected value' );

	out = removeLast( '👉🏿', 1 );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});

tape( 'the function supports removing the last `n` grapheme clusters of a provided string', function test( t ) {
	var out;

	out = removeLast( 'hello world', 1 );
	t.strictEqual( out, 'hello worl', 'returns expected value' );

	out = removeLast( 'hello world', 7 );
	t.strictEqual( out, 'hell', 'returns expected value' );

	out = removeLast( '!!!', 1 );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = removeLast( '!!!', 2 );
	t.strictEqual( out, '!', 'returns expected value' );

	out = removeLast( 'अनुच्छेद', 1 );
	t.strictEqual( out, 'अनुच्छे', 'returns expected value' );

	out = removeLast( '六书/六書', 1 );
	t.strictEqual( out, '六书/六', 'returns expected value' );

	out = removeLast( '🌷🌷🌷🌷🌷', 2 );
	t.strictEqual( out, '🌷🌷🌷', 'returns expected value' );

	t.end();
});
