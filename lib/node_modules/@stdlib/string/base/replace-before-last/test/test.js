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
var replaceBeforeLast = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof replaceBeforeLast, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function replaces the substring before the last occurrence of a specified search string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = replaceBeforeLast( str, ' ', 'foo', str.length );
	expected = 'foo boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = replaceBeforeLast( str, 'p', 'foo', str.length );
	expected = 'foop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'Hello, World!';
	actual = replaceBeforeLast( str, 'o', 'foo', str.length );
	expected = 'fooorld!';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring before the last occurrence of a specified search string (Unicode characters)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep 😀 boop 😀 baz';
	actual = replaceBeforeLast( str, '😀', 'foo', str.length );
	expected = 'foo😀 baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🤖 Robot army 🤖!';
	actual = replaceBeforeLast( str, '🤖', 'foo', str.length );
	expected = 'foo🤖!';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🐺 Wolf brothers 🐺';
	actual = replaceBeforeLast( str, 'o', 'foo', str.length );
	expected = 'fooothers 🐺';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring before a provided search string (custom start index)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop baz';
	actual = replaceBeforeLast( str, ' ', 'foo', 9 );
	expected = 'foo baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBeforeLast( str, 'p', 'foo', 6 );
	expected = 'foop boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBeforeLast( str, 'beep', 'foo', -2 );
	expected = 'foobeep boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBeforeLast( str, 'beep', 'foo', -20 );
	expected = 'beep boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBeforeLast( str, 'beep', 'foo', 20 );
	expected = 'foobeep boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is not found', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = replaceBeforeLast( str, 'z', 'foo', str.length );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = replaceBeforeLast( str, 'baz', 'foo', str.length );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is the empty string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = replaceBeforeLast( str, '', 'foo', str.length );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring before the last occurrence of a search string when replacement is the empty string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop baz';
	actual = replaceBeforeLast( str, 'p', '', str.length );
	expected = 'p baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
