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
var substringBeforeLast = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof substringBeforeLast, 'function', 'main export is a function' );
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
			substringBeforeLast( value, 'beep' );
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
			substringBeforeLast( 'beep', value );
		};
	}
});

tape( 'the function returns the substring before the last occurrence of the provided search string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringBeforeLast( str, ' ' );
	expected = 'beep';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = substringBeforeLast( str, 'p' );
	expected = 'beep boo';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'Hello, World!';
	actual = substringBeforeLast( str, 'o' );
	expected = 'Hello, W';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the substring before a provided search string (Unicode characters)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep 😀 boop 😀 baz';
	actual = substringBeforeLast( str, '😀' );
	expected = 'beep 😀 boop ';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🤖 Robot army 🤖!';
	actual = substringBeforeLast( str, '🤖' );
	expected = '🤖 Robot army ';

	str = '🐺 Wolf brothers 🐺';
	actual = substringBeforeLast( str, 'o' );
	expected = '🐺 Wolf brothers ';

	t.end();
});

tape( 'the function returns the entire string if the search string is not found', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringBeforeLast( str, 'z' );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = substringBeforeLast( str, 'baz' );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entire string if the search string is the empty string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringBeforeLast( str, '' );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
