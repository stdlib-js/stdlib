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
var dtypeStrings = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypeStrings, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
		'bool',
		'complex32',
		'complex64',
		'complex128',
		'float16',
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
	actual = dtypeStrings();

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data type strings (all)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
		'bool',
		'complex32',
		'complex64',
		'complex128',
		'float16',
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
	actual = dtypeStrings( 'all' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data type strings (all, including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
		'bool',
		'complex32',
		'complex64',
		'complex128',
		'float16',
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
	actual = dtypeStrings( 'all_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data type strings (typed)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
		'bool',
		'complex32',
		'complex64',
		'complex128',
		'float16',
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
	actual = dtypeStrings( 'typed' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data type strings (typed, including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
		'bool',
		'complex32',
		'complex64',
		'complex128',
		'float16',
		'float32',
		'float64',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c',
		'generic'
	];
	actual = dtypeStrings( 'typed_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of floating-point ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex32',
		'complex64',
		'complex128',
		'float16',
		'float32',
		'float64'
	];
	actual = dtypeStrings( 'floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of floating-point ndarray data type strings (including "generic"', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex32',
		'complex64',
		'complex128',
		'float16',
		'float32',
		'float64',
		'generic'
	];
	actual = dtypeStrings( 'floating_point_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued floating-point ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'float16',
		'float32',
		'float64'
	];
	actual = dtypeStrings( 'real_floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued floating-point ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'float16',
		'float32',
		'float64',
		'generic'
	];
	actual = dtypeStrings( 'real_floating_point_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of complex-valued floating-point ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex32',
		'complex64',
		'complex128'
	];
	actual = dtypeStrings( 'complex_floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of complex-valued floating-point ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex32',
		'complex64',
		'complex128',
		'generic'
	];
	actual = dtypeStrings( 'complex_floating_point_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of boolean ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'bool'
	];
	actual = dtypeStrings( 'boolean' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of boolean ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'bool',
		'generic'
	];
	actual = dtypeStrings( 'boolean_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer ndarray data type strings', function test( t ) {
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
	actual = dtypeStrings( 'integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c',
		'generic'
	];
	actual = dtypeStrings( 'integer_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of signed integer ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int16',
		'int32',
		'int8'
	];
	actual = dtypeStrings( 'signed_integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of signed integer ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int16',
		'int32',
		'int8',
		'generic'
	];
	actual = dtypeStrings( 'signed_integer_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of unsigned integer ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	actual = dtypeStrings( 'unsigned_integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of unsigned integer ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'uint16',
		'uint32',
		'uint8',
		'uint8c',
		'generic'
	];
	actual = dtypeStrings( 'unsigned_integer_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'float16',
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
	actual = dtypeStrings( 'real' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'float16',
		'float32',
		'float64',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c',
		'generic'
	];
	actual = dtypeStrings( 'real_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of numeric ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex32',
		'complex64',
		'complex128',
		'float16',
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
	actual = dtypeStrings( 'numeric' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of numeric ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'complex32',
		'complex64',
		'complex128',
		'float16',
		'float32',
		'float64',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c',
		'generic'
	];
	actual = dtypeStrings( 'numeric_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer index ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int32'
	];
	actual = dtypeStrings( 'integer_index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer index ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int32',
		'generic'
	];
	actual = dtypeStrings( 'integer_index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of boolean index ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'bool'
	];
	actual = dtypeStrings( 'boolean_index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of boolean index ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'bool',
		'generic'
	];
	actual = dtypeStrings( 'boolean_index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of mask index ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'uint8'
	];
	actual = dtypeStrings( 'mask_index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of mask index ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'uint8',
		'generic'
	];
	actual = dtypeStrings( 'mask_index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of typed index ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int32',
		'uint8',
		'bool'
	];
	actual = dtypeStrings( 'typed_index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of typed index ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int32',
		'uint8',
		'bool',
		'generic'
	];
	actual = dtypeStrings( 'typed_index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of index ndarray data type strings', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int32',
		'uint8',
		'bool',
		'generic'
	];
	actual = dtypeStrings( 'index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of index ndarray data type strings (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'int32',
		'uint8',
		'bool',
		'generic'
	];
	actual = dtypeStrings( 'index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty array if provided an unrecognized data type kind', function test( t ) {
	t.deepEqual( dtypeStrings( 'beep' ), [], 'returns expected value' );
	t.deepEqual( dtypeStrings( 'beep_and_generic' ), [], 'returns expected value' );
	t.deepEqual( dtypeStrings( 'generic' ), [], 'returns expected value' );
	t.deepEqual( dtypeStrings( '_and_generic' ), [], 'returns expected value' );
	t.deepEqual( dtypeStrings( '' ), [], 'returns expected value' );
	t.end();
});
