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
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var isTypedArrayLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isTypedArrayLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a typed-array-like object', function test( t ) {
	var values;
	var i;

	values = [
		new Int8Array(),
		new Uint8Array(),
		new Int16Array(),
		new Uint16Array(),
		new Int32Array(),
		new Uint32Array(),
		new Float32Array(),
		new Float64Array(),
		new Uint8ClampedArray(),
		{
			'length': 10,
			'BYTES_PER_ELEMENT': 4,
			'byteOffset': 0,
			'byteLength': 10
		}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isTypedArrayLike( values[i] ), true, 'returns true when provided '+values[i] );
	}

	t.end();
});

tape( 'the function returns `false` if not provided a typed-array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		5,
		null,
		void 0,
		NaN,
		true,
		false,
		{},
		[],
		function boop() {},
		{
			'length': 3.14,
			'BYTES_PER_ELEMENT': 4,
			'byteOffset': 0,
			'byteLength': 10
		},
		{
			'length': 10,
			'BYTES_PER_ELEMENT': true,
			'byteOffset': 0,
			'byteLength': 10
		},
		{
			'length': 10,
			'BYTES_PER_ELEMENT': 4,
			'byteOffset': [],
			'byteLength': 10
		},
		{
			'length': 10,
			'BYTES_PER_ELEMENT': 4,
			'byteOffset': 0,
			'byteLength': null
		},
		{
			'BYTES_PER_ELEMENT': 4,
			'byteOffset': 0,
			'byteLength': 10
		},
		{
			'length': 10,
			'byteOffset': 0,
			'byteLength': 10
		},
		{
			'length': 10,
			'BYTES_PER_ELEMENT': 4,
			'byteLength': 10
		},
		{
			'length': 10,
			'BYTES_PER_ELEMENT': 4,
			'byteOffset': 0
		}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isTypedArrayLike( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
