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
var sliceCodePoints = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sliceCodePoints, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( sliceCodePoints.length, 3, 'the function has an arity of 3' );
	t.end();
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( sliceCodePoints( '', 1, 2 ), '', 'returns expected value' );
	t.strictEqual( sliceCodePoints( '', 2, 3 ), '', 'returns expected value' );
	t.strictEqual( sliceCodePoints( '', 3, 4 ), '', 'returns expected value' );
	t.end();
});

tape( 'the function slices a string based on code point indices', function test( t ) {
	var str;
	var out;

	str = 'Hello World';
	out = sliceCodePoints( str, 1, 5 );
	t.strictEqual( out, 'ello', 'returns expected value' );

	str = 'Hello 👋 World';
	out = sliceCodePoints( str, 5, 7 );
	t.strictEqual( out, ' 👋', 'returns expected value' );

	str = 'अनुच्छेद';
	out = sliceCodePoints( str, 1, str.length );
	t.strictEqual( out, 'नुच्छेद', 'returns expected value' );

	str = '六书/六書';
	out = sliceCodePoints( str, 1, str.length );
	t.strictEqual( out, '书/六書', 'returns expected value' );

	str = '𐒻𐓟';
	out = sliceCodePoints( str, 1, str.length );
	t.strictEqual( out, '𐓟', 'returns expected value' );

	str = '\uD800';
	out = sliceCodePoints( str, 1, 2 );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});

tape( 'the function supports providing negative indices', function test( t ) {
	var str;
	var out;

	str = 'Hello World';
	out = sliceCodePoints( str, -5, -1 );
	t.strictEqual( out, 'Worl', 'returns expected value' );

	str = 'Hello 👋 World';
	out = sliceCodePoints( str, 0, -6 );
	t.strictEqual( out, 'Hello 👋', 'returns expected value' );

	str = 'अनुच्छेद';
	out = sliceCodePoints( str, -7, str.length );
	t.strictEqual( out, 'नुच्छेद', 'returns expected value' );

	str = '六书/六書';
	out = sliceCodePoints( str, -4, str.length );
	t.strictEqual( out, '书/六書', 'returns expected value' );

	str = '𐒻𐓟';
	out = sliceCodePoints( str, -1, str.length );
	t.strictEqual( out, '𐓟', 'returns expected value' );

	str = '\uD800';
	out = sliceCodePoints( str, -1, str.length );
	t.strictEqual( out, '\uD800', 'returns expected value' );

	t.end();
});

tape( 'the function handles surrogate pairs correctly', function test( t ) {
	var out;

	out = sliceCodePoints( '👋👋👋', 0, 1 );
	t.strictEqual( out, '👋', 'returns expected value' );

	out = sliceCodePoints( '👋👋👋', 1, 2 );
	t.strictEqual( out, '👋', 'returns expected value' );

	out = sliceCodePoints( '👋a👋b👋', 1, 4 );
	t.strictEqual( out, 'a👋b', 'returns expected value' );

	out = sliceCodePoints( '👋a👋b👋', 1, 4 );
	t.strictEqual( out, 'a👋b', 'returns expected value' );

	t.end();
});

tape( 'the function handles lone surrogates', function test( t ) {
	var out;

	out = sliceCodePoints( '\uD800abc', 0, 2 );
	t.strictEqual( out, '\uD800a', 'returns expected value for lone high surrogate' );

	out = sliceCodePoints( '\uDC00abc', 0, 2 );
	t.strictEqual( out, '\uDC00a', 'returns expected value for lone low surrogate' );

	t.end();
});

tape( 'the function truncates the end index to the string length', function test( t ) {
	var out;

	out = sliceCodePoints( 'hello', 0, 10 );
	t.strictEqual( out, 'hello', 'returns expected value' );

	out = sliceCodePoints( '六书/六書', 1, 10 );
	t.strictEqual( out, '书/六書', 'returns expected value' );

	out = sliceCodePoints( '🏝️🌷', 0, 5 );
	t.strictEqual( out, '🏝️🌷', 'returns expected value' );

	t.end();
});
