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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var caxpy = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Collection} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'complex64', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof caxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( caxpy.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies a one-dimensional ndarray `x` by a constant `alpha` and adds the result to a one-dimensional ndarray `y`', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0,  // 2
		5.0,  // 3
		6.0,  // 3
		7.0,  // 4
		8.0,  // 4
		9.0,  // 5
		10.0  // 5
	]);
	ybuf = new Complex64Array([
		1.0,  // 1
		1.0,  // 1
		1.0,  // 2
		1.0,  // 2
		1.0,  // 3
		1.0,  // 3
		1.0,  // 4
		1.0,  // 4
		1.0,  // 5
		1.0   // 5
	]);
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	alpha = scalar2ndarray( new Complex64( 2.0, 2.0 ), 'complex64', 'row-major' );

	v = caxpy( [ x, y, alpha ] );

	expected = new Complex64Array([
		-1.0,  // 1
		7.0,   // 1
		-1.0,  // 2
		15.0,  // 2
		-1.0,  // 3
		23.0,  // 3
		-1.0,  // 4
		31.0,  // 4
		-1.0,  // 5
		39.0   // 5
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Complex64Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0   // 2
	]);
	ybuf = new Complex64Array([
		1.0,  // 1
		1.0,  // 1
		1.0,  // 2
		1.0   // 2
	]);
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 2, 1, 0 );
	alpha = scalar2ndarray( new Complex64( 2.0, 2.0 ), 'complex64', 'row-major' );

	v = caxpy( [ x, y, alpha ] );

	expected = new Complex64Array([
		-1.0,  // 1
		7.0,   // 1
		-1.0,  // 2
		15.0   // 2
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty ndarrays, the function returns the output ndarray unchanged', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array( [] );
	ybuf = new Complex64Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );
	alpha = scalar2ndarray( new Complex64( 1.0, 2.0 ), 'complex64', 'row-major' );

	v = caxpy( [ x, y, alpha ] );

	expected = new Complex64Array( [] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		5.0,  // 2
		6.0   // 2
	]);
	x = vector( xbuf, 3, 2, 0 );

	ybuf = new Complex64Array([
		1.0,  // 0
		1.0,  // 0
		1.0,  // 1
		1.0,  // 1
		1.0,  // 2
		1.0,  // 2
		1.0,
		1.0,
		1.0,
		1.0
	]);
	y = vector( ybuf, 3, 1, 0 );
	alpha = scalar2ndarray( new Complex64( 2.0, 2.0 ), 'complex64', 'row-major' );

	v = caxpy( [ x, y, alpha ] );

	expected = new Complex64Array([
		-1.0,  // 0
		7.0,   // 0
		-1.0,  // 1
		15.0,  // 1
		-1.0,  // 2
		23.0,  // 2
		1.0,
		1.0,
		1.0,
		1.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array([
		1.0,  // 2
		2.0,  // 2
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		5.0,  // 0
		6.0   // 0
	]);
	x = vector( xbuf, 3, -2, 4 );

	ybuf = new Complex64Array([
		6.0,   // 2
		6.0,   // 2
		7.0,   // 1
		7.0,   // 1
		8.0,   // 0
		8.0,   // 0
		9.0,
		9.0,
		10.0,
		10.0
	]);
	y = vector( ybuf, 3, -1, 2 );
	alpha = scalar2ndarray( new Complex64( 2.0, 2.0 ), 'complex64', 'row-major' );

	v = caxpy( [ x, y, alpha ] );

	expected = new Complex64Array([
		4.0,   // 2
		12.0,  // 2
		5.0,   // 1
		21.0,  // 1
		6.0,   // 0
		30.0,  // 0
		9.0,
		9.0,
		10.0,
		10.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array([
		2.0,
		2.0,
		1.0,   // 0
		2.0,   // 0
		2.0,
		2.0,
		-2.0,  // 1
		-1.0,  // 1
		-2.0,
		-2.0,
		2.0,   // 2
		3.0,   // 2
		3.0,
		3.0,
		4.0,   // 3
		5.0    // 3
	]);
	x = vector( xbuf, 4, 2, 1 );

	ybuf = new Complex64Array([
		1.0,
		1.0,
		2.0,
		2.0,
		3.0,   // 0
		3.0,   // 0
		4.0,   // 1
		4.0,   // 1
		5.0,   // 2
		5.0,   // 2
		6.0,   // 3
		6.0,   // 3
		7.0,
		7.0,
		8.0,
		8.0
	]);
	y = vector( ybuf, 4, 1, 2 );
	alpha = scalar2ndarray( new Complex64( 2.0, 2.0 ), 'complex64', 'row-major' );

	v = caxpy( [ x, y, alpha ] );

	expected = new Complex64Array([
		1.0,
		1.0,
		2.0,
		2.0,
		1.0,   // 0
		9.0,   // 0
		2.0,   // 1
		-2.0,  // 1
		3.0,   // 2
		15.0,  // 2
		4.0,   // 3
		24.0,  // 3
		7.0,
		7.0,
		8.0,
		8.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
