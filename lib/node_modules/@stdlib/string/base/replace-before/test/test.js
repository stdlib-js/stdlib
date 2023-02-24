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

tape( 'the function throws an error if not provided a string as its first argument', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			replaceBefore( value, 'beep', 'foo' );
		};
	}
});

tape( 'the function throws an error if not provided a string as its second argument', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			replaceBefore( 'beep boop', value, 'foo' );
		};
	}
});

tape( 'the function throws an error if not provided a string as its third argument', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			replaceBefore( 'beep boop', 'beep', value );
		};
	}
});

tape( 'the function replaces the substring before the first occurrence of a specified search string', function test( t ) {
	var replacement;
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	replacement = 'foo';
	actual = replaceBefore( str, ' ', replacement );
	expected = 'foo boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	replacement = 'foo';
	actual = replaceBefore( str, 'p', replacement );
	expected = 'foop boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'Hello, World!';
	replacement = 'foo';
	actual = replaceBefore( str, 'o', replacement );
	expected = 'fooo, World!';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces the substring before the first occurrence of a specified search string (Unicode characters)', function test( t ) {
	var replacement;
	var expected;
	var actual;
	var str;

	str = 'beep 😀 boop 😀 baz';
	replacement = 'foo';
	actual = replaceBefore( str, '😀', replacement );
	expected = 'foo😀 boop 😀 baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🤖 Robot army 🤖!';
	replacement = 'foo';
	actual = replaceBefore( str, '🤖', replacement );
	expected = 'foo🤖 Robot army 🤖!';

	str = '🐺 Wolf brothers 🐺';
	replacement = 'foo';
	actual = replaceBefore( str, 'o', replacement );
	expected = 'fooolf brothers 🐺';

	t.end();
});

tape( 'the function returns the entire string if the search string is not found', function test( t ) {
	var replacement;
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	replacement = 'foo';
	actual = replaceBefore( str, 'z', replacement );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	replacement = 'foo';
	actual = replaceBefore( str, 'baz', replacement );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is the empty string', function test( t ) {
	var replacement;
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	replacement = 'foo';
	actual = replaceBefore( str, '', replacement );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
