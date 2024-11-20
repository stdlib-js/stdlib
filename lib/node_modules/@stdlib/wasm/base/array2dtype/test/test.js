/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var empty = require( '@stdlib/array/empty' );
var array2dtype = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2dtype, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the data type for an input array', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		empty( 1, 'float64' ),
		empty( 1, 'float32' ),
		empty( 1, 'int32' ),
		empty( 1, 'int16' ),
		empty( 1, 'int8' ),
		empty( 1, 'uint32' ),
		empty( 1, 'uint16' ),
		empty( 1, 'uint8' ),
		empty( 1, 'uint8c' ),
		empty( 1, 'bool' ),
		empty( 1, 'complex128' ),
		empty( 1, 'complex64' )
	];

	expected = [
		'float64',
		'float32',
		'int32',
		'int16',
		'int8',
		'uint32',
		'uint16',
		'uint8',
		'uint8',
		'uint8',
		'complex128',
		'complex64'
	];

	for ( i = 0; i < expected.length; i++ ) {
		actual = array2dtype( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'if provided an array-like object, the function returns "float64"', function test( t ) {
	var arr;
	var dt;

	arr = {
		'length': 10
	};
	dt = array2dtype( arr );
	t.strictEqual( dt, 'float64', 'returns expected value' );
	t.end();
});

tape( 'if provided an argument having an unknown/unsupported data type, the function returns "float64"', function test( t ) {
	var buffers;
	var i;

	buffers = [
		'beep',
		{},
		function noop() {}
	];
	for ( i = 0; i < buffers.length; i++ ) {
		t.strictEqual( array2dtype( buffers[i] ), 'float64', 'returns expected value for ' + buffers[ i ] );
	}
	t.end();
});
