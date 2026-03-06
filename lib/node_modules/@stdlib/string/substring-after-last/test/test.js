/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var substringAfterLast = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof substringAfterLast, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string as its first argument', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			substringAfterLast( value, 'beep' );
		};
	}
});

tape( 'the function throws an error if not provided a string as its second argument', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			substringAfterLast( 'beep', value );
		};
	}
});

tape( 'the function returns the substring after the last occurrence of a provided search string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringAfterLast( str, ' ' );
	expected = 'boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = substringAfterLast( str, 'p' );
	expected = '';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'Hello, World!';
	actual = substringAfterLast( str, 'o' );
	expected = 'rld!';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the substring after the last occurrence of a provided search string (Unicode characters)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep 😀 boop 😀 baz';
	actual = substringAfterLast( str, '😀' );
	expected = ' baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🤖 Robot army 🤖!';
	actual = substringAfterLast( str, '🤖' );
	expected = '!';

	str = '🐺 Wolf brothers 🐺';
	actual = substringAfterLast( str, 'o' );
	expected = 'thers 🐺';

	t.end();
});

tape( 'the function returns the substring after the last occurrence of a provided search string (custom start index)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop baz';
	actual = substringAfterLast( str, ' ', 5 );
	expected = 'boop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop baz';
	actual = substringAfterLast( str, 'b', 8 );
	expected = 'oop baz';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = substringAfterLast( str, 'p', 0 );
	expected = '';
	t.strictEqual( actual, expected, 'returns expected value' );

	actual = substringAfterLast( str, 'p', -20 );
	expected = '';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the empty string if the search string is not found', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringAfterLast( str, 'z' );
	expected = '';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = substringAfterLast( str, 'baz' );
	expected = '';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the empty string if the search string is the empty string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringAfterLast( str, '' );
	expected = '';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
