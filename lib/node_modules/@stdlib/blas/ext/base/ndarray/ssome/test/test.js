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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ssome = require( './../lib' );


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

/**
* Returns a zero-dimensional ndarray.
*
* @private
* @param {integer} k - minimum number of truthy elements
* @returns {ndarray} zero-dimensional ndarray
*/
function scalar( k ) {
	return scalar2ndarray( k, {
		'dtype': 'generic'
	});
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ssome, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( ssome.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function tests whether a one-dimensional ndarray contains at least `k` truthy elements', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 0.0, 0.0, 1.0, 2.0 ] );
	v = ssome( [ vector( x, 4, 1, 0 ), scalar( 2 ) ] );
	t.strictEqual( v, true, 'returns expected value' );

	x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	v = ssome( [ vector( x, 4, 1, 0 ), scalar( 1 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	v = ssome( [ vector( x, 4, 1, 0 ), scalar( 5 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	v = ssome( [ vector( x, 4, 1, 0 ), scalar( 4 ) ] );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` values as falsy', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ NaN, NaN, NaN ] );
	v = ssome( [ vector( x, 3, 1, 0 ), scalar( 1 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	x = new Float32Array( [ NaN, 1.0, 2.0 ] );
	v = ssome( [ vector( x, 3, 1, 0 ), scalar( 2 ) ] );
	t.strictEqual( v, true, 'returns expected value' );

	x = new Float32Array( [ NaN, 1.0, 0.0 ] );
	v = ssome( [ vector( x, 3, 1, 0 ), scalar( 2 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns `false`', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [] );

	v = ssome( [ vector( x, 0, 1, 0 ), scalar( 1 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		1.0, // 0
		0.0,
		0.0, // 1
		0.0,
		1.0, // 2
		0.0,
		0.0, // 3
		0.0
	]);

	v = ssome( [ vector( x, 4, 2, 0 ), scalar( 2 ) ] );

	t.strictEqual( v, true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);

	v = ssome( [ vector( x, 3, -2, 5 ), scalar( 2 ) ] );

	t.strictEqual( v, true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		0.0,
		1.0, // 0
		2.0, // 1
		3.0,
		4.0
	]);

	v = ssome( [ vector( x, 2, 1, 1 ), scalar( 2 ) ] );
	t.strictEqual( v, true, 'returns expected value' );

	v = ssome( [ vector( x, 2, 1, 1 ), scalar( 3 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});
