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
var replaceAfterLast = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof replaceAfterLast, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function replaces the substring after the last occurrence of a specified search string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = replaceAfterLast( str, ' ', 'foo', str.length );
	expected = 'beep foo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = replaceAfterLast( str, 'p', 'foo', str.length );
	expected = 'beep boopfoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'Hello, World!';
	actual = replaceAfterLast( str, 'o', 'foo', str.length );
	expected = 'Hello, Wofoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring after the last occurrence of a specified search string (Unicode characters)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep 😀 boop 😀 baz';
	actual = replaceAfterLast( str, '😀', 'foo', str.length );
	expected = 'beep 😀 boop 😀foo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🤖 Robot army 🤖!';
	actual = replaceAfterLast( str, '🤖', 'foo', str.length );
	expected = '🤖 Robot army 🤖foo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🐺 Wolf brothers 🐺';
	actual = replaceAfterLast( str, 'o', 'foo', str.length );
	expected = '🐺 Wolf brofoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring after a provided search string (custom start index)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop baz';
	actual = replaceAfterLast( str, ' ', 'foo', 6 );
	expected = 'beep foo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceAfterLast( str, 'p', 'foo', 6 );
	expected = 'beepfoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceAfterLast( str, 'beep', 'foo', -3 );
	expected = 'beepfoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceAfterLast( str, 'beep', 'foo', -100 );
	expected = 'beep boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceAfterLast( str, 'beep', 'foo', 20 );
	expected = 'beepfoo';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is not found', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = replaceAfterLast( str, 'z', 'foo', str.length );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = replaceAfterLast( str, 'baz', 'foo', str.length );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is the empty string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = replaceAfterLast( str, '', 'foo', str.length );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
