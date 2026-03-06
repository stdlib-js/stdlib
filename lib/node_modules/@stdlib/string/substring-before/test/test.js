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
var substringBefore = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof substringBefore, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string primitive as its first argument', function test( t ) {
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
			substringBefore( value, 'beep' );
		};
	}
});

tape( 'the function throws an error if not provided a string primitive as its second argument', function test( t ) {
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
			substringBefore( 'beep boop', value );
		};
	}
});

tape( 'the function returns the substring before a provided search string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringBefore( str, ' ' );
	expected = 'beep';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = substringBefore( str, 'p' );
	expected = 'bee';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'Hello, World!';
	actual = substringBefore( str, 'o' );
	expected = 'Hell';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the substring before a provided search string (Unicode characters)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep 😀 boop 😀 baz';
	actual = substringBefore( str, '😀' );
	expected = 'beep ';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🤖 Robot army 🤖!';
	actual = substringBefore( str, '🤖' );
	expected = '';

	str = '🐺 Wolf brothers 🐺';
	actual = substringBefore( str, 'o' );
	expected = '🐺 W';

	t.end();
});

tape( 'the function returns the entire string if the search string is not found', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringBefore( str, 'z' );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	actual = substringBefore( str, 'baz' );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the empty string if the search string is the empty string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'beep boop';
	actual = substringBefore( str, '' );
	expected = '';
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
