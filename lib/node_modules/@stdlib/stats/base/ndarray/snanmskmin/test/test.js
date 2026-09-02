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
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var snanmskmin = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {string} dtype - data type
* @param {Collection} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( dtype, buffer, length, stride, offset ) {
	return new ndarray( dtype, buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof snanmskmin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( snanmskmin.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the minimum value of a one-dimensional single-precision floating-point ndarray according to a mask, ignoring NaN values', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 1, 0, 0, 0 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = new Float32Array( [ -4.0, NaN, -5.0 ] );
	mask = new Uint8Array( [ 0, 1, 0 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( v, -5.0, 'returns expected value' );

	x = new Float32Array( [ -0.0, 0.0, NaN, -0.0 ] );
	mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	x = new Float32Array( [ -4.0, 0.0, NaN, 5.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 0 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = new Float32Array( [ NaN ] );
	mask = new Uint8Array( [ 0 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN ] );
	mask = new Uint8Array( [ 1 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 1, 1 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 1, 0 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 0, 1 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 0, 0 ] );
	v = snanmskmin( [ vector( 'float32', x, x.length, 1, 0 ), vector( 'uint8', mask, mask.length, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns `NaN`', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array( [] );
	mask = new Uint8Array( [] );

	v = snanmskmin( [ vector( 'float32', x, 0, 1, 0 ), vector( 'uint8', mask, 0, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an ndarray containing a single element, the function returns the first element', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 0, 0 ] );

	v = snanmskmin( [ vector( 'float32', x, 1, 1, 0 ), vector( 'uint8', mask, 1, 1, 0 ) ] );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		5.0,  // 4
		6.0
	]);
	mask = new Uint8Array([
		0, // 0
		0,
		0, // 1
		0,
		0, // 2
		0,
		0, // 3
		0,
		1, // 4
		1
	]);

	v = snanmskmin( [ vector( 'float32', x, 5, 2, 0 ), vector( 'uint8', mask, 5, 2, 0 ) ] );
	t.strictEqual( v, -2.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array([
		5.0,  // 4
		6.0,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	mask = new Uint8Array([
		1, // 4
		1,
		0, // 3
		0,
		0, // 2
		0,
		0, // 1
		0,
		0, // 0
		0
	]);

	v = snanmskmin( [ vector( 'float32', x, 5, -2, 8 ), vector( 'uint8', mask, 5, -2, 8 ) ] );
	t.strictEqual( v, -2.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		5.0,
		6.0   // 4
	]);
	mask = new Uint8Array([
		0,
		0, // 0
		0,
		0, // 1
		0,
		0, // 2
		0,
		0, // 3
		1,
		1  // 4
	]);

	v = snanmskmin( [ vector( 'float32', x, 5, 2, 1 ), vector( 'uint8', mask, 5, 2, 1 ) ] );
	t.strictEqual( v, -2.0, 'returns expected value' );

	t.end();
});
