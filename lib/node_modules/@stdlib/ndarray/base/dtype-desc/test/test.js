/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var table = require( './../lib/table.js' );
var dtypeDesc = require( './../lib' );


// VARIABLES //

var DTYPES = [
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
	'complex128'
];
var DESC = table();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypeDesc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object mapping data type strings to descriptions if not provided an argument', function test( t ) {
	var expected;
	var obj;
	var v;
	var i;

	obj = dtypeDesc();
	for ( i = 0; i < DTYPES.length; i++ ) {
		v = obj[ DTYPES[ i ] ];
		expected = DESC[ DTYPES[ i ] ] || null;
		t.strictEqual( v, expected, 'returns '+expected+' when provided '+DTYPES[i] );
	}
	t.end();
});

tape( 'the function returns the description for a specified data type', function test( t ) {
	var expected;
	var v;
	var i;

	for ( i = 0; i < DTYPES.length; i++ ) {
		v = dtypeDesc( DTYPES[ i ] );
		expected = DESC[ DTYPES[ i ] ] || null;
		t.strictEqual( v, expected, 'returns '+expected+' when provided '+DTYPES[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unknown/unsupported data type', function test( t ) {
	var v = dtypeDesc( 'foobar' );
	t.strictEqual( v, null, 'returns expected value' );
	t.end();
});
