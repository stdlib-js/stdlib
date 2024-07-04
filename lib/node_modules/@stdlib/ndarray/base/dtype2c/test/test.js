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
var dtype2c = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtype2c, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the C data type associated with a provided data type string', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		'float64',
		'float32',
		'int8',
		'uint8',
		'uint8c',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'int64',
		'uint64',
		'binary',
		'generic',
		'complex64',
		'complex128',
		'bool'
	];

	expected = [
		'double',
		'float',
		'int8_t',
		'uint8_t',
		null,
		'int16_t',
		'uint16_t',
		'int32_t',
		'uint32_t',
		'int64_t',
		'uint64_t',
		null,
		null,
		'stdlib_complex64_t',
		'stdlib_complex128_t',
		'bool'
	];
	for ( i = 0; i < values.length; i++ ) {
		out = dtype2c( values[ i ] );
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unknown/unsupported data type', function test( t ) {
	var out = dtype2c( 'foobar' );
	t.strictEqual( out, null, 'returns expected value' );
	t.end();
});
