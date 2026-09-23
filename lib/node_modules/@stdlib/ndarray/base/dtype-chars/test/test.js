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
var dtypeChars = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypeChars, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'r',
		'x',
		'j',
		'c',
		'z',
		'h',
		'f',
		'd',
		'o',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a'
	];
	actual = dtypeChars();

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data type single letter character abbreviations (all)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'r',
		'x',
		'j',
		'c',
		'z',
		'h',
		'f',
		'd',
		'o',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a'
	];
	actual = dtypeChars( 'all' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data type single letter character abbreviations (all, including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'r',
		'x',
		'j',
		'c',
		'z',
		'h',
		'f',
		'd',
		'o',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a'
	];
	actual = dtypeChars( 'all_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data type single letter character abbreviations (typed)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'r',
		'x',
		'j',
		'c',
		'z',
		'h',
		'f',
		'd',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a'
	];
	actual = dtypeChars( 'typed' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of ndarray data type single letter character abbreviations (typed, including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'r',
		'x',
		'j',
		'c',
		'z',
		'h',
		'f',
		'd',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a',
		'o'
	];
	actual = dtypeChars( 'typed_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of floating-point ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'j',
		'c',
		'z',
		'h',
		'f',
		'd'
	];
	actual = dtypeChars( 'floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of floating-point ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'j',
		'c',
		'z',
		'h',
		'f',
		'd',
		'o'
	];
	actual = dtypeChars( 'floating_point_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued floating-point ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'h',
		'f',
		'd'
	];
	actual = dtypeChars( 'real_floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued floating-point ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'h',
		'f',
		'd',
		'o'
	];
	actual = dtypeChars( 'real_floating_point_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of complex-valued floating-point ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'j',
		'c',
		'z'
	];
	actual = dtypeChars( 'complex_floating_point' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of complex-valued floating-point ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'j',
		'c',
		'z',
		'o'
	];
	actual = dtypeChars( 'complex_floating_point_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of boolean ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'x'
	];
	actual = dtypeChars( 'boolean' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of boolean ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'x',
		'o'
	];
	actual = dtypeChars( 'boolean_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a'
	];
	actual = dtypeChars( 'integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a',
		'o'
	];
	actual = dtypeChars( 'integer_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of signed integer ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'k',
		'i',
		's'
	];
	actual = dtypeChars( 'signed_integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of signed integer ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'k',
		'i',
		's',
		'o'
	];
	actual = dtypeChars( 'signed_integer_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of unsigned integer ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		't',
		'u',
		'b',
		'a'
	];
	actual = dtypeChars( 'unsigned_integer' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of unsigned integer ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		't',
		'u',
		'b',
		'a',
		'o'
	];
	actual = dtypeChars( 'unsigned_integer_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'h',
		'f',
		'd',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a'
	];
	actual = dtypeChars( 'real' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of real-valued ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'h',
		'f',
		'd',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a',
		'o'
	];
	actual = dtypeChars( 'real_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of numeric ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'j',
		'c',
		'z',
		'h',
		'f',
		'd',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a'
	];
	actual = dtypeChars( 'numeric' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of numeric ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'j',
		'c',
		'z',
		'h',
		'f',
		'd',
		'k',
		'i',
		's',
		't',
		'u',
		'b',
		'a',
		'o'
	];
	actual = dtypeChars( 'numeric_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer index ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'i'
	];
	actual = dtypeChars( 'integer_index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of integer index ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'i',
		'o'
	];
	actual = dtypeChars( 'integer_index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of boolean index ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'x'
	];
	actual = dtypeChars( 'boolean_index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of boolean index ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'x',
		'o'
	];
	actual = dtypeChars( 'boolean_index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of mask index ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'b'
	];
	actual = dtypeChars( 'mask_index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of mask index ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'b',
		'o'
	];
	actual = dtypeChars( 'mask_index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of typed index ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'i',
		'b',
		'x'
	];
	actual = dtypeChars( 'typed_index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of typed index ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'i',
		'b',
		'x',
		'o'
	];
	actual = dtypeChars( 'typed_index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of index ndarray data type single letter character abbreviations', function test( t ) {
	var expected;
	var actual;

	expected = [
		'i',
		'b',
		'x',
		'o'
	];
	actual = dtypeChars( 'index' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports returning a list of index ndarray data type single letter character abbreviations (including "generic")', function test( t ) {
	var expected;
	var actual;

	expected = [
		'i',
		'b',
		'x',
		'o'
	];
	actual = dtypeChars( 'index_and_generic' );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty array if provided an unrecognized data type kind', function test( t ) {
	t.deepEqual( dtypeChars( 'beep' ), [], 'returns expected value' );
	t.deepEqual( dtypeChars( 'beep_and_generic' ), [], 'returns expected value' );
	t.deepEqual( dtypeChars( 'generic' ), [], 'returns expected value' );
	t.deepEqual( dtypeChars( '_and_generic' ), [], 'returns expected value' );
	t.deepEqual( dtypeChars( '' ), [], 'returns expected value' );
	t.end();
});
