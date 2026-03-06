/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var replaceAfter = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof replaceAfter, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function replaces the substring after the first occurrence of a specified search string', function test( t ) {
	var expected;
	var actual;

	actual = replaceAfter( 'beep boop', ' ', 'foo', 0 );
	expected = 'beep foo';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceAfter( 'beep boop', 'p', 'foo', 0 );
	expected = 'beepfoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceAfter( 'Hello, World!', 'o', 'foo', 0 );
	expected = 'Hellofoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring after the first occurrence of a specified search string (Unicode characters)', function test( t ) {
	var expected;
	var actual;

	actual = replaceAfter( 'beep 😀 boop 😀 baz', '😀', 'foo', 0 );
	expected = 'beep 😀foo';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceAfter( '🤖 Robot army 🤖!', '🤖', 'foo', 0 );
	expected = '🤖foo';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceAfter( '🐺 Wolf brothers 🐺', 'o', 'foo', 0 );
	expected = '🐺 Wofoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring after a provided search string (custom start index)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop baz';
	actual = replaceAfter( str, ' ', 'foo', 6 );
	expected = 'beep boop foo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceAfter( str, 'p', 'foo', 6 );
	expected = 'beep boopfoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceAfter( str, 'baz', 'foo', -5 );
	expected = 'beep boop bazfoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceAfter( str, 'beep', 'foo', -20 );
	expected = 'beepfoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceAfter( str, ' ', 'foo', 1000 );
	expected = 'beep boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is not found', function test( t ) {
	var expected;
	var actual;

	actual = replaceAfter( 'beep boop', 'z', 'foo', 0 );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceAfter( 'beep boop', 'baz', 'foo', 0 );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is the empty string', function test( t ) {
	var expected;
	var actual;

	actual = replaceAfter( 'beep boop', '', 'foo', 0 );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
