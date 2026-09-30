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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var ctril2triu = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( ctril2triu instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctril2triu, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 11', opts, function test( t ) {
	t.strictEqual( ctril2triu.length, 11, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the lower triangular part of `A` to `B` (row-major, k=0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctril2triu( 3, 3, 0, A, 3, 1, 0, B, 3, 1, 0 );

	expected = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 0.0, 0.0, 5.0, 5.0, 8.0, 8.0, 0.0, 0.0, 0.0, 0.0, 9.0, 9.0 ] );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the lower triangular part of `A` to `B` (row-major, k<0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctril2triu( 3, 3, -1, A, 3, 1, 0, B, 3, 1, 0 );

	expected = new Complex64Array( [ 0.0, 0.0, 4.0, 4.0, 7.0, 7.0, 0.0, 0.0, 0.0, 0.0, 8.0, 8.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the lower triangular part of `A` to `B` (row-major, k=-2)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctril2triu( 3, 3, -2, A, 3, 1, 0, B, 3, 1, 0 );

	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 7.0, 7.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the lower triangular part of `A` to `B` (column-major, k=0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctril2triu( 3, 3, 0, A, 1, 3, 0, B, 1, 3, 0 );

	expected = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 4.0, 4.0, 5.0, 5.0, 0.0, 0.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the lower triangular part of `A` to `B` (column-major, k=-2)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctril2triu( 3, 3, -2, A, 1, 3, 0, B, 1, 3, 0 );

	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.0, 7.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the lower triangular part of `A` to `B` (column-major, k<0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctril2triu( 3, 3, -1, A, 1, 3, 0, B, 1, 3, 0 );

	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 4.0, 0.0, 0.0, 0.0, 0.0, 7.0, 7.0, 8.0, 8.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (row-major)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	// 2x3 row-major
	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] );
	B = new Complex64Array( 6 );
	out = ctril2triu( 2, 3, 0, A, 3, 1, 0, B, 2, 1, 0 );
	expected = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 0.0, 0.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (column-major)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	// 3x2 column-major
	A = new Complex64Array( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 2.0, 2.0, 4.0, 4.0, 6.0, 6.0 ] );
	B = new Complex64Array( 6 );
	out = ctril2triu( 3, 2, 0, A, 1, 3, 0, B, 1, 2, 0 );
	expected = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `A` offset', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	// 2x2 with A offset=1 (start from 2nd element)
	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
	B = new Complex64Array( 4 );

	out = ctril2triu( 2, 2, 0, A, 2, 1, 1, B, 2, 1, 0 );

	expected = new Complex64Array( [ 2.0, 2.0, 4.0, 4.0, 0.0, 0.0, 5.0, 5.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `B` offset', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	// 2x2 with B offset=2 (start writing from 3rd element)
	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	B = new Complex64Array( 6 );

	out = ctril2triu( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 2 );

	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 3.0, 3.0, 0.0, 0.0, 4.0, 4.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	// 2x2 row-major with negative stride for columns (reversed columns)
	A = new Complex64Array( [ 2.0, 2.0, 1.0, 1.0, 4.0, 4.0, 3.0, 3.0 ] );
	B = new Complex64Array( 4 );

	out = ctril2triu( 2, 2, 0, A, 2, -1, 1, B, 2, 1, 0 );

	expected = new Complex64Array( [ 1.0, 1.0, 3.0, 3.0, 0.0, 0.0, 4.0, 4.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function leaves elements outside of the reflected region unchanged', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex64Array( [ -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0 ] );

	out = ctril2triu( 3, 3, 0, A, 3, 1, 0, B, 3, 1, 0 );

	expected = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, -1.0, -1.0, 5.0, 5.0, 8.0, 8.0, -1.0, -1.0, -1.0, -1.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently negative, the function reflects nothing', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	B = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );

	out = ctril2triu( 2, 2, -2, A, 2, 1, 0, B, 2, 1, 0 );

	expected = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently positive, the function reflects the entire matrix', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	B = new Complex64Array( 4 );

	out = ctril2triu( 2, 2, 2, A, 2, 1, 0, B, 2, 1, 0 );

	expected = new Complex64Array( [ 1.0, 1.0, 3.0, 3.0, 2.0, 2.0, 4.0, 4.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function leaves `B` unchanged when `M` or `N` is equal to zero', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	expected = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );

	B = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	out = ctril2triu( 0, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	B = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	out = ctril2triu( 2, 0, 0, A, 2, 1, 0, B, 2, 1, 0 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (non-unit strides and offsets on both `A` and `B`)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 9.0, 9.0, 1.0, 1.0, 9.0, 9.0, 2.0, 2.0, 9.0, 9.0, 3.0, 3.0, 9.0, 9.0, 4.0, 4.0 ] );
	B = new Complex64Array( 8 );

	out = ctril2triu( 2, 2, 0, A, 4, 2, 1, B, 4, 2, 1 );

	expected = new Complex64Array( [ 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 3.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 4.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});
