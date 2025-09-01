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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var Float32Array = require( '@stdlib/array/float32' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var srange = require( './../lib' );


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
	return new ndarray( 'float32', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof srange, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( srange.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the range of a one-dimensional ndarray', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	v = srange( [ vector( x, 6, 1, 0 ) ] );
	t.strictEqual( v, 9.0, 'returns expected value' );

	x = new Float32Array( [ -4.0, -5.0 ] );
	v = srange( [ vector( x, 2, 1, 0 ) ] );
	t.strictEqual( v, 1.0, 'returns expected value' );

	x = new Float32Array( [ -0.0, 0.0, -0.0 ] );
	v = srange( [ vector( x, 3, 1, 0 ) ] );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN ] );
	v = srange( [ vector( x, 1, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	v = srange( [ vector( x, 2, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty vector, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [] );

	v = srange( [ vector( x, 0, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a vector containing a single element, the function returns `0`', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0 ] );

	v = srange( [ vector( x, 1, 1, 0 ) ] );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
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
		2.0
	]);

	v = srange( [ vector( x, 4, 2, 0 ) ] );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	v = srange( [ vector( x, 4, -2, 6 ) ] );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
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
		4.0   // 3
	]);

	v = srange( [ vector( x, 4, 2, 1 ) ] );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});
