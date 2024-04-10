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
var replaceBefore = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof replaceBefore, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function replaces the substring before the first occurrence of a specified search string', function test( t ) {
	var expected;
	var actual;

	actual = replaceBefore( 'beep boop', ' ', 'foo', 0 );
	expected = 'foo boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceBefore( 'beep boop', 'p', 'foo', 0 );
	expected = 'foop boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceBefore( 'Hello, World!', 'o', 'foo', 0 );
	expected = 'fooo, World!';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring before the first occurrence of a specified search string (Unicode characters)', function test( t ) {
	var expected;
	var actual;

	actual = replaceBefore( 'beep 😀 boop 😀 baz', '😀', 'foo', 0 );
	expected = 'foo😀 boop 😀 baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceBefore( '🤖 Robot army 🤖!', '🤖', 'foo', 0 );
	expected = 'foo🤖 Robot army 🤖!';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceBefore( '🐺 Wolf brothers 🐺', 'o', 'foo', 0 );
	expected = 'fooolf brothers 🐺';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring before a provided search string (custom start index)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop baz';
	actual = replaceBefore( str, ' ', 'foo', 6 );
	expected = 'foo baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBefore( str, 'p', 'foo', 6 );
	expected = 'foop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBefore( str, 'beep', 'foo', -2 );
	expected = 'beep boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBefore( str, 'baz', 'foo', -5 );
	expected = 'foobaz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBefore( str, 'beep', 'foo', 20 );
	expected = 'beep boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = replaceBefore( str, 'beep', 'foo', -200 );
	expected = 'foobeep boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is not found', function test( t ) {
	var expected;
	var actual;

	actual = replaceBefore( 'beep boop', 'z', 'foo', 0 );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = replaceBefore( 'beep boop', 'baz', 'foo', 0 );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is the empty string', function test( t ) {
	var expected;
	var actual;

	actual = replaceBefore( 'beep boop', '', 'foo', 0 );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
