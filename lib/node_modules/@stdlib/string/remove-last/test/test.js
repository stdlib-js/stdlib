/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
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
			removeLast( value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		3.12,
		'abc',
		null,
		true,
		void 0,
		NaN,
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
			removeLast( 'beep', value );
		};
	}
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( removeLast( '' ), '', 'returns empty string' );
	t.end();
});

tape( 'the function removes the last character of a given string', function test( t ) {
	var out;

	out = removeLast( 'hello world' );
	t.strictEqual( out, 'hello worl', 'removes character' );

	out = removeLast( '!!!' );
	t.strictEqual( out, '!!', 'removes character' );

	out = removeLast( 'Hello World' );
	t.strictEqual( out, 'Hello Worl', 'removes character' );

	t.end();
});

tape( 'the function removes the last character of a given string (Unicode characters)', function test( t ) {
	var out;

	out = removeLast( '😀😀😀' );
	t.strictEqual( out, '😀😀', 'removes character' );

	out = removeLast( '🤖 Robot Army 🤖' );
	t.strictEqual( out, '🤖 Robot Army ', 'removes character' );

	out = removeLast( 'अनुच्छेद' );
	t.strictEqual( out, 'अनुच्छे', 'returns expected value' );

	out = removeLast( '六书/六書' );
	t.strictEqual( out, '六书/六', 'returns expected value' );

	out = removeLast( '🌷' );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});

tape( 'the function returns the original string if provided zero for the second parameter', function test( t ) {
	var out;

	out = removeLast( 'hello world', 0 );
	t.strictEqual( out, 'hello world', 'returns original string' );

	t.end();
});

tape( 'the function removes the last `n` characters when supplied a second argument', function test( t ) {
	var out;

	out = removeLast( 'hello world', 5 );
	t.strictEqual( out, 'hello ', 'removes characters' );

	out = removeLast( '!!!', 1 );
	t.strictEqual( out, '!!', 'removes character' );

	out = removeLast( '!!!', 2 );
	t.strictEqual( out, '!', 'removes character' );

	t.end();
});

tape( 'the function returns an empty string if `n` is greater than or equal to the length of the string', function test( t ) {
	var out;

	out = removeLast( 'hello world', 12 );
	t.strictEqual( out, '', 'returns empty string' );

	out = removeLast( '!!!', 3 );
	t.strictEqual( out, '', 'returns empty string' );

	t.end();
});

tape( 'the function removes the last `n` characters when supplied a second argument (Unicode characters)', function test( t ) {
	var out;

	out = removeLast( '😀😀😀', 1 );
	t.strictEqual( out, '😀😀', 'removes character' );

	out = removeLast( '🤖 Robot Army 🤖', 2 );
	t.strictEqual( out, '🤖 Robot Army', 'removes character' );

	out = removeLast( '六书/六書', 1 );
	t.strictEqual( out, '六书/六', 'returns expected value' );

	out = removeLast( '🌷', 1 );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});
