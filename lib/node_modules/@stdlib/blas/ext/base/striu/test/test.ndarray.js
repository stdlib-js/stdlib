/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
var striu = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof striu, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 11', function test( t ) {
	t.strictEqual( striu.length, 11, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (row-major, k=0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	B = new Float32Array( 9 );

	out = striu( 3, 3, 0, A, 3, 1, 0, B, 3, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0, 0.0, 0.0, 9.0 ] );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (row-major, k>0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	B = new Float32Array( 9 );

	out = striu( 3, 3, 1, A, 3, 1, 0, B, 3, 1, 0 );

	expected = new Float32Array( [ 0.0, 2.0, 3.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (row-major, k<0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	B = new Float32Array( 9 );

	out = striu( 3, 3, -1, A, 3, 1, 0, B, 3, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 0.0, 8.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (column-major, k=0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ] );
	B = new Float32Array( 9 );

	out = striu( 3, 3, 0, A, 1, 3, 0, B, 1, 3, 0 );

	expected = new Float32Array( [ 1.0, 0.0, 0.0, 2.0, 5.0, 0.0, 3.0, 6.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (column-major, k<0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ] );
	B = new Float32Array( 9 );

	out = striu( 3, 3, -1, A, 1, 3, 0, B, 1, 3, 0 );

	expected = new Float32Array( [ 1.0, 4.0, 0.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (column-major, k>0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ] );
	B = new Float32Array( 9 );

	out = striu( 3, 3, 1, A, 1, 3, 0, B, 1, 3, 0 );

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 6.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (row-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	B = new Float32Array( 6 );
	out = striu( 2, 3, 0, A, 3, 1, 0, B, 3, 1, 0 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (column-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 3.0, 5.0, 2.0, 4.0, 6.0 ] );
	B = new Float32Array( 6 );
	out = striu( 3, 2, 0, A, 1, 3, 0, B, 1, 3, 0 );
	expected = new Float32Array( [ 1.0, 0.0, 0.0, 2.0, 4.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `A` offset', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	B = new Float32Array( 4 );

	out = striu( 2, 2, 0, A, 2, 1, 1, B, 2, 1, 0 );

	expected = new Float32Array( [ 2.0, 3.0, 0.0, 5.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `B` offset', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	B = new Float32Array( 6 );

	out = striu( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 2 );

	expected = new Float32Array( [ 0.0, 0.0, 1.0, 2.0, 0.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 2.0, 1.0, 4.0, 3.0 ] );
	B = new Float32Array( 4 );

	out = striu( 2, 2, 0, A, 2, -1, 1, B, 2, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 0.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (non-unit strides and offsets on both `A` and `B`)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 9.0, 1.0, 9.0, 2.0, 9.0, 3.0, 9.0, 4.0 ] );
	B = new Float32Array( 8 );

	out = striu( 2, 2, 0, A, 4, 2, 1, B, 4, 2, 1 );

	expected = new Float32Array( [ 0.0, 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function leaves elements outside of the copied region unchanged', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	B = new Float32Array( [ -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0 ] );

	out = striu( 3, 3, 0, A, 3, 1, 0, B, 3, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, -1.0, 5.0, 6.0, -1.0, -1.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'when `k` is greater than or equal to `N`, the function copies nothing', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	B = new Float32Array( [ 9.0, 9.0, 9.0, 9.0 ] );

	out = striu( 2, 2, 2, A, 2, 1, 0, B, 2, 1, 0 );

	expected = new Float32Array( [ 9.0, 9.0, 9.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently negative, the function copies the entire matrix', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	B = new Float32Array( 4 );

	out = striu( 2, 2, -2, A, 2, 1, 0, B, 2, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function leaves `B` unchanged when `M` or `N` is equal to zero', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new Float32Array( [ 9.0, 9.0, 9.0, 9.0 ] );

	B = new Float32Array( [ 9.0, 9.0, 9.0, 9.0 ] );
	out = striu( 0, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value (M=0)' );

	B = new Float32Array( [ 9.0, 9.0, 9.0, 9.0 ] );
	out = striu( 2, 0, 0, A, 2, 1, 0, B, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value (N=0)' );

	t.end();
});
