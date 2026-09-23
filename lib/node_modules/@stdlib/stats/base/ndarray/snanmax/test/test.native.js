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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var Float32Array = require( '@stdlib/array/float32' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var snanmax = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( snanmax instanceof Error )
};


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Float32Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'float32', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof snanmax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', opts, function test( t ) {
	t.strictEqual( snanmax.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the maximum value of a one-dimensional ndarray, ignoring NaN values', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ] );
	v = snanmax( [ vector( x, 7, 1, 0 ) ] );
	t.strictEqual( v, 5.0, 'returns expected value' );

	x = new Float32Array( [ -4.0, NaN, -5.0 ] );
	v = snanmax( [ vector( x, 3, 1, 0 ) ] );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = new Float32Array( [-0.0, 0.0, NaN, -0.0 ] );
	v = snanmax( [ vector( x, 4, 1, 0 ) ] );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN ] );
	v = snanmax( [ vector( x, 1, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	v = snanmax( [ vector( x, 2, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns `NaN`', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [] );

	v = snanmax( [ vector( x, 0, 1, 0 ) ] );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an ndarray containing a single element, the function returns that element', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0 ] );

	v = snanmax( [ vector( x, 1, 1, 0 ) ] );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', opts, function test( t ) {
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
		NaN,  // 4
		NaN
	]);

	v = snanmax( [ vector( x, 5, 2, 0 ) ] );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	v = snanmax( [ vector( x, 5, -2, 8 ) ] );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', opts, function test( t ) {
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
		6.0,
		NaN,  // 4
		NaN
	]);

	v = snanmax( [ vector( x, 5, 2, 1 ) ] );
	t.strictEqual( v, 4.0, 'returns expected value' );

	t.end();
});
