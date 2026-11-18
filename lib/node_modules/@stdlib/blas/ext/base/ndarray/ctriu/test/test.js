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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var ctriu = require( './../lib' );


// FUNCTIONS //

/**
* Returns a two-dimensional ndarray.
*
* @private
* @param {Collection} buffer - underlying data buffer
* @param {NonNegativeInteger} M - number of rows
* @param {NonNegativeInteger} N - number of columns
* @param {integer} stride0 - stride of the first dimension
* @param {integer} stride1 - stride of the second dimension
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} two-dimensional ndarray
*/
function matrix( buffer, M, N, stride0, stride1, offset ) {
	return new ndarray( 'complex64', buffer, [ M, N ], [ stride0, stride1 ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctriu, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( ctriu.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function copies the upper triangular part of a two-dimensional ndarray (row-major, k=0)', function test( t ) {
	var expected;
	var Abuf;
	var Bbuf;
	var A;
	var B;
	var k;
	var v;

	Abuf = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	Bbuf = new Complex64Array( 9 );
	A = matrix( Abuf, 3, 3, 3, 1, 0 );
	B = matrix( Bbuf, 3, 3, 3, 1, 0 );

	k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	v = ctriu( [ A, B, k ] );

	expected = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 0.0, 0.0, 5.0, 5.0, 6.0, 6.0, 0.0, 0.0, 0.0, 0.0, 9.0, 9.0 ] );
	t.strictEqual( v, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of a two-dimensional ndarray (row-major, k>0)', function test( t ) {
	var expected;
	var Abuf;
	var Bbuf;
	var A;
	var B;
	var k;
	var v;

	Abuf = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	Bbuf = new Complex64Array( 9 );
	A = matrix( Abuf, 3, 3, 3, 1, 0 );
	B = matrix( Bbuf, 3, 3, 3, 1, 0 );

	k = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	v = ctriu( [ A, B, k ] );

	expected = new Complex64Array( [ 0.0, 0.0, 2.0, 2.0, 3.0, 3.0, 0.0, 0.0, 0.0, 0.0, 6.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( v, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of a two-dimensional ndarray (row-major, k<0)', function test( t ) {
	var expected;
	var Abuf;
	var Bbuf;
	var A;
	var B;
	var k;
	var v;

	Abuf = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	Bbuf = new Complex64Array( 9 );
	A = matrix( Abuf, 3, 3, 3, 1, 0 );
	B = matrix( Bbuf, 3, 3, 3, 1, 0 );

	k = scalar2ndarray( -1, {
		'dtype': 'generic'
	});
	v = ctriu( [ A, B, k ] );

	expected = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 0.0, 0.0, 8.0, 8.0, 9.0, 9.0 ] );
	t.strictEqual( v, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of a two-dimensional ndarray (column-major, k=0)', function test( t ) {
	var expected;
	var Abuf;
	var Bbuf;
	var A;
	var B;
	var k;
	var v;

	Abuf = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	Bbuf = new Complex64Array( 9 );
	A = matrix( Abuf, 3, 3, 1, 3, 0 );
	B = matrix( Bbuf, 3, 3, 1, 3, 0 );

	k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	v = ctriu( [ A, B, k ] );

	expected = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 5.0, 5.0, 0.0, 0.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	t.strictEqual( v, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (row-major)', function test( t ) {
	var expected;
	var Abuf;
	var Bbuf;
	var A;
	var B;
	var k;
	var v;

	Abuf = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] );
	Bbuf = new Complex64Array( 6 );
	A = matrix( Abuf, 2, 3, 3, 1, 0 );
	B = matrix( Bbuf, 2, 3, 3, 1, 0 );

	k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	v = ctriu( [ A, B, k ] );

	expected = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 0.0, 0.0, 5.0, 5.0, 6.0, 6.0 ] );
	t.strictEqual( v, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var Abuf;
	var Bbuf;
	var A;
	var B;
	var k;
	var v;

	Abuf = new Complex64Array( [ 99.0, 99.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	Bbuf = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	A = matrix( Abuf, 2, 2, 2, 1, 1 );
	B = matrix( Bbuf, 2, 2, 2, 1, 1 );

	k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	v = ctriu( [ A, B, k ] );

	expected = new Complex64Array( [ 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 0.0, 0.0, 4.0, 4.0 ] );
	t.strictEqual( v, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function leaves elements outside of the copied region unchanged', function test( t ) {
	var expected;
	var Abuf;
	var Bbuf;
	var A;
	var B;
	var k;
	var v;

	Abuf = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	Bbuf = new Complex64Array( [ -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0 ] );
	A = matrix( Abuf, 3, 3, 3, 1, 0 );
	B = matrix( Bbuf, 3, 3, 3, 1, 0 );

	k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	v = ctriu( [ A, B, k ] );

	expected = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, -1.0, -1.0, 5.0, 5.0, 6.0, 6.0, -1.0, -1.0, -1.0, -1.0, 9.0, 9.0 ] );
	t.strictEqual( v, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
