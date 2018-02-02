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
var utf16ToUTF8Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof utf16ToUTF8Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
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
			utf16ToUTF8Array( value );
		};
	}
});

tape( 'the function converts a UTF-16 encoded string to an array of integers using UTF-8 encoding', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		'0123456789',
		'abcdefghij',
		'klmnopqrst',
		'uvwxyz',
		'ABCDEFGHIJ',
		'KLMNOPQRST',
		'UVWXYZ',
		'☃', // 3 bytes
		'æ', // 2 bytes
		'𐐷' // surrogate pair
	];

	/*
	* U+10437 (𐐷) => 00000000 00000001 00000100 00110111
	*
	* To convert U+10437 to a UTF-8 array, pack the bit sequence (more specifically, the last 21 bits) into 4 bytes using UTF-8 encoding.
	*
	*   ```text
	*   00000000 000 00001 00000100 00110111
	*
	*   00001 00000100 00110111
	*
	*   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	*
	*   11110000 10010000 10010000 10110111
	*   ```
	*
	* To determine the surrogate pair,
	*
	* -   Subtract 0x10000.
	*
	*     ```text
	*     0x10437 - 0x10000 = 0x00437 => 0000 0000 0100 0011 0111
	*     ```
	*
	* -   Split into high and low 10-bits.
	*
	*     ```text
	*     0000 0000 01
	*     00 0011 0111
	*     ```
	*
	* -   Add 0xD800 to high 10-bits to get high surrogate.
	*
	*     ```text
	*     0xD800 + 0x0001 = 0xD801 => 1101100000000001
	*     ```
	*
	* -   Add 0xDC00 to low 10-bits to get low surrogate.
	*
	*     ```text
	*     0xDC00 + 0x0037 = 0xDC37 => 1101110000110111
	*     ```
	*/

	expected = [
		[ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57 ],
		[ 97, 98, 99, 100, 101, 102, 103, 104, 105, 106 ],
		[ 107, 108, 109, 110, 111, 112, 113, 114, 115, 116 ],
		[ 117, 118, 119, 120, 121, 122 ],
		[ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74 ],
		[ 75, 76, 77, 78, 79, 80, 81, 82, 83, 84 ],
		[ 85, 86, 87, 88, 89, 90 ],
		[ 226, 152, 131 ],
		[ 195, 166 ],
		[ 240, 144, 144, 183 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		out = utf16ToUTF8Array( values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value for '+values[i] );
	}
	t.end();
});
