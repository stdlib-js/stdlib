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
var dtypes = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of array data types', function test( t ) {
	var expected;
	var actual;

	expected = [
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

tape( 'the function supports returning a list of array data types (all)', function test( t ) {
	var expected;
	var actual;

	expected = [
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

tape( 'the function supports returning a list of floating-point array data types', function test( t ) {
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

tape( 'the function supports returning a list of real-valued floating-point array data types', function test( t ) {
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

tape( 'the function supports returning a list of complex-valued floating-point array data types', function test( t ) {
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

tape( 'the function supports returning a list of integer array data types', function test( t ) {
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

tape( 'the function supports returning a list of signed integer array data types', function test( t ) {
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

tape( 'the function supports returning a list of unsigned integer array data types', function test( t ) {
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

tape( 'the function supports returning a list of real-valued array data types', function test( t ) {
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

tape( 'the function supports returning a list of numeric array data types', function test( t ) {
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
