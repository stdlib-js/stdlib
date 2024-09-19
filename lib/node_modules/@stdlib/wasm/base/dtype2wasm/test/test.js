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
var dtype2wasm = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtype2wasm, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the WebAssembly data type associated with a provided data type string', function test( t ) {
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
		'generic',
		'complex64',
		'complex128',
		'bool'
	];

	expected = [
		'float64',
		'float32',
		'int8',
		'uint8',
		'uint8',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'int64',
		'uint64',
		'float64',
		'complex64',
		'complex128',
		'uint8'
	];
	for ( i = 0; i < values.length; i++ ) {
		out = dtype2wasm( values[ i ] );
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `float64` if provided an unknown/unsupported data type', function test( t ) {
	var out = dtype2wasm( 'foobar' );
	t.strictEqual( out, 'float64', 'returns expected value' );
	t.end();
});
