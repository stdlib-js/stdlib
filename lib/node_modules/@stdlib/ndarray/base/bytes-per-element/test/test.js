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
var bytesPerElement = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bytesPerElement, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the number of bytes per element provided an underlying array data type', function test( t ) {
	var expected;
	var values;
	var nbytes;
	var i;

	values = [
		'float64',
		'float32',
		'float16',
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
		'complex64',
		'complex128',
		'generic'
	];

	expected = [
		8,
		4,
		2,
		1,
		1,
		1,
		2,
		2,
		4,
		4,
		8,
		8,
		1,
		8,
		16,
		null
	];
	for ( i = 0; i < values.length; i++ ) {
		nbytes = bytesPerElement( values[ i ] );
		t.strictEqual( nbytes, expected[ i ], 'returns '+expected[i]+' when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unknown/unsupported data type', function test( t ) {
	var nbytes = bytesPerElement( 'foobar' );
	t.strictEqual( nbytes, null, 'returns expected value' );
	t.end();
});
