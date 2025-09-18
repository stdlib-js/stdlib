/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var dtypeAlignment = require( './../lib' );


// VARIABLES //

var DTYPES = [
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
	'generic',
	'complex32',
	'complex64',
	'complex128',
	'bool'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypeAlignment, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object mapping data type strings to alignments if not provided an argument', function test( t ) {
	var expected;
	var obj;
	var out;
	var i;

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
		null,
		2,
		4,
		8,
		1
	];

	obj = dtypeAlignment();
	for ( i = 0; i < DTYPES.length; i++ ) {
		out = obj[ DTYPES[ i ] ];
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+DTYPES[i] );
	}
	t.end();
});

tape( 'the function returns the alignment for an underlying array data type', function test( t ) {
	var expected;
	var out;
	var i;

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
		null,
		2,
		4,
		8,
		1
	];
	for ( i = 0; i < DTYPES.length; i++ ) {
		out = dtypeAlignment( DTYPES[ i ] );
		t.strictEqual( out, expected[ i ], 'returns '+expected[i]+' when provided '+DTYPES[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unknown/unsupported data type', function test( t ) {
	var out = dtypeAlignment( 'foobar' );
	t.strictEqual( out, null, 'returns expected value' );
	t.end();
});
