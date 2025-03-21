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
var toBinaryStringUint32 = require( '@stdlib/number/uint32/base/to-binary-string' );
var fromBinaryStringUint32 = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fromBinaryStringUint32, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a string with a length other than `32`, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'1010101',
		'',
		'101',
		'111111111',
		'1111111111111111111111111111111',
		'111111111111111111111111111111111',
		'11111111111111111111111111111111111111111111111111111111111111111',
		'111111111111111111111111111111111111111111111111111111111111111'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fromBinaryStringUint32( value );
		};
	}
});

tape( 'if provided all zeros, the function returns `0`', function test( t ) {
	t.strictEqual( fromBinaryStringUint32( toBinaryStringUint32( 0 ) ), 0, 'returns 0' );
	t.end();
});

tape( 'if provided all ones, the function returns `4294967295`', function test( t ) {
	t.strictEqual( fromBinaryStringUint32( toBinaryStringUint32( 4294967295 ) ), 4294967295, 'returns 4294967295' );
	t.end();
});

tape( 'the function creates unsigned 32-bit integers from literal bit representations', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = data.x;
	expected = data.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromBinaryStringUint32( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});
