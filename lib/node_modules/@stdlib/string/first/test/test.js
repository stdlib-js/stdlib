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
var first = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof first, 'function', 'main export is a function' );
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
			first( value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		3.14,
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
			first( 'beep', value );
		};
	}
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( first( '' ), '', 'returns empty string' );
	t.end();
});

tape( 'the function returns the first visual character of a provided string', function test( t ) {
	var out;

	out = first( 'hello world' );
	t.strictEqual( out, 'h', 'returns expected value' );

	out = first( '!!!' );
	t.strictEqual( out, '!', 'returns expected value' );

	out = first( 'Hello World' );
	t.strictEqual( out, 'H', 'returns expected value' );

	out = first( 'अनुच्छेद' );
	t.strictEqual( out, 'अ', 'returns expected value' );

	out = first( '六书/六書' );
	t.strictEqual( out, '六', 'returns expected value' );

	out = first( '🌷' );
	t.strictEqual( out, '🌷', 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty string if provided zero as the second argument', function test( t ) {
	var out;

	out = first( 'hello world', 0 );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning the first `n` visual characters of a provided string', function test( t ) {
	var out;

	out = first( 'hello world', 1 );
	t.strictEqual( out, 'h', 'returns expected value' );

	out = first( 'hello world', 7 );
	t.strictEqual( out, 'hello w', 'returns expected value' );

	out = first( '!!!', 1 );
	t.strictEqual( out, '!', 'returns expected value' );

	out = first( '!!!', 2 );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = first( 'अनुच्छेद', 1 );
	t.strictEqual( out, 'अ', 'returns expected value' );

	out = first( '六书/六書', 1 );
	t.strictEqual( out, '六', 'returns expected value' );

	out = first( '🌷', 1 );
	t.strictEqual( out, '🌷', 'returns expected value' );

	t.end();
});
