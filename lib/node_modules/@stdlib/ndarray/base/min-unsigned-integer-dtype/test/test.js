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
var minUnsignedIntegerDataType = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minUnsignedIntegerDataType, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the minimum ndarray data type for storing a provided unsigned integer value', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		0,
		1,
		128,
		300, // >2**8
		65537, // >2**16
		99999999,
		4294967297 // >2**32
	];
	expected = [
		'uint8',
		'uint8',
		'uint8',
		'uint16',
		'uint32',
		'uint32',
		'float64'

	];
	for ( i = 0; i < values.length; i++ ) {
		actual = minUnsignedIntegerDataType( values[i] );
		t.strictEqual( actual, expected[ i ], 'returns expected value when provided '+values[i] );
	}
	t.end();
});
