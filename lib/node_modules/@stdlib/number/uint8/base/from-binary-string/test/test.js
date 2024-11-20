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
var toBinaryStringUint8 = require( '@stdlib/number/uint8/base/to-binary-string' );
var fromBinaryStringUint8 = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fromBinaryStringUint8, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a string with a length other than `16`, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'1010101',
		'',
		'101',
		'111111111',
		'1111111',
		'111111111111111111'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fromBinaryStringUint8( value );
		};
	}
});

tape( 'if provided all zeros, the function returns `0`', function test( t ) {
	t.strictEqual( fromBinaryStringUint8( toBinaryStringUint8( 0 ) ), 0, 'returns 0' );
	t.end();
});

tape( 'if provided all ones, the function returns `255`', function test( t ) {
	t.strictEqual( fromBinaryStringUint8( toBinaryStringUint8( 255 ) ), 255, 'returns 255' );
	t.end();
});

tape( 'the function creates unsigned 8-bit integers from literal bit representations', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = data.x;
	expected = data.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromBinaryStringUint8( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});
