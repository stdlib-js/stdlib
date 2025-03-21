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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var dtypes = require( './../lib' );


// VARIABLES //

// List of native C types which should be supported...
var DTYPES = [
	'int8',
	'uint8',
	'int16',
	'uint16',
	'int32',
	'uint32',
	'int64',
	'uint64',

	'float32',
	'float64',

	'complex64',
	'complex128',

	'bool'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of strided array data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
		'bool',
		'complex64',
		'complex128',
		'float32',
		'float64',
		'generic',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	actual = dtypes();

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `enum` method to return an object mapping data type strings to enumeration constants', function test( t ) {
	var obj;
	var i;

	t.strictEqual( hasOwnProp( dtypes, 'enum' ), true, 'has property' );
	t.strictEqual( typeof dtypes.enum, 'function', 'has method' );

	obj = dtypes.enum();
	t.strictEqual( typeof obj, 'object', 'returns expected value type' );

	for ( i = 0; i < DTYPES.length; i++ ) {
		t.strictEqual( hasOwnProp( obj, DTYPES[ i ] ), true, 'has property `' + DTYPES[ i ] + '`' );
		t.strictEqual( isNonNegativeInteger( obj[ DTYPES[ i ] ] ), true, 'returns expected value' );
	}

	t.end();
});

tape( 'attached to the main function are data type enumeration constants', function test( t ) {
	var i;
	for ( i = 0; i < DTYPES.length; i++ ) {
		t.strictEqual( isNonNegativeInteger( dtypes[ DTYPES[ i ] ] ), true, 'returns expected value' );
	}
	t.end();
});
