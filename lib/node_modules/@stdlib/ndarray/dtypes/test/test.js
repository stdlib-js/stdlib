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
	'complex128'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
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

tape( 'the function supports returning a list of ndarray data types (all)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
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
	actual = dtypes( 'all' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data types (typed)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
		'complex64',
		'complex128',
		'float32',
		'float64',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	actual = dtypes( 'typed' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of floating-point ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex64',
		'complex128',
		'float32',
		'float64'
	];
	actual = dtypes( 'floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued floating-point ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'float32',
		'float64'
	];
	actual = dtypes( 'real_floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of complex-valued floating-point ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex64',
		'complex128'
	];
	actual = dtypes( 'complex_floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	actual = dtypes( 'integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of signed integer ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int16',
		'int32',
		'int8'
	];
	actual = dtypes( 'signed_integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of unsigned integer ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	actual = dtypes( 'unsigned_integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'float32',
		'float64',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	actual = dtypes( 'real' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of numeric ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex64',
		'complex128',
		'float32',
		'float64',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	actual = dtypes( 'numeric' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty array if provided an unrecognized data type kind', function test( t ) {
	t.deepEqual( dtypes( 'beep' ), [], 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `enum` method to return an object mapping dtypes to enumeration constants for C inter-operation', function test( t ) {
	var obj;
	var i;

	t.strictEqual( hasOwnProp( dtypes, 'enum' ), true, 'has property' );
	t.strictEqual( typeof dtypes.enum, 'function', 'has method' );

	obj = dtypes.enum();
	t.strictEqual( typeof obj, 'object', 'returns expected value type' );

	for ( i = 0; i < DTYPES.length; i++ ) {
		t.strictEqual( hasOwnProp( obj, DTYPES[ i ] ), true, 'has property `' + DTYPES[ i ] + '`' );
		t.strictEqual( isNonNegativeInteger( obj[ DTYPES[i] ] ), true, 'returns expected value' );
	}

	t.end();
});

tape( 'attached to the main function are dtype enumeration constants', function test( t ) {
	var i;
	for ( i = 0; i < DTYPES.length; i++ ) {
		t.strictEqual( isNonNegativeInteger( dtypes[ DTYPES[i] ] ), true, 'returns expected value' );
	}
	t.end();
});
