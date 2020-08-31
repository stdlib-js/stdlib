/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var codePointAt = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof codePointAt, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a string primitive', function test( t ) {
	var values;
	var i;

	values = [
		-5,
		3.14,
		-1.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			codePointAt( value, 0 );
		};
	}
});

tape( 'the function throws an error if the second argument is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'bar',
		-5,
		3.14,
		-1.0,
		NaN,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			codePointAt( 'foo', value );
		};
	}
});

tape( 'the function throws an error if the third argument is not a boolean primitive', function test( t ) {
	var values;
	var i;

	values = [
		'bar',
		-5,
		3.14,
		-1.0,
		NaN,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			codePointAt( 'foo', 0, value );
		};
	}
});

tape( 'the function throws an error if a provided position is not a valid index in the provided string', function test( t ) {
	var values;
	var i;

	values = [
		[ 'bar', 3 ],
		[ 'string', 7 ],
		[ '', 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			codePointAt( value[ 0 ], value[ 1 ] );
		};
	}
});

tape( 'the arity of the function is 3', function test( t ) {
	t.strictEqual( codePointAt.length, 3, 'has length 3' );
	t.end();
});

tape( 'the function returns the code point at a specified string position', function test( t ) {
	var out;

	out = codePointAt( 'last man standing', 4 );
	t.strictEqual( out, 0x20, 'returns expected value' );

	out = codePointAt( 'presidential election', 8, true );
	t.strictEqual( out, 0x74, 'returns expected value' );

	out = codePointAt( 'अनुच्छेद', 2 );
	t.strictEqual( out, 0x941, 'returns expected value' );

	out = codePointAt( '🌷', 0, true );
	t.strictEqual( out, 0x1F337, 'returns expected value' );

	t.end();
});
