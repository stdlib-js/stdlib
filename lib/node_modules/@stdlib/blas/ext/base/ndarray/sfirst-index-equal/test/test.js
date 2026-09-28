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
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var Float32Array = require( '@stdlib/array/float32' );
var sfirstIndexEqual = require( './../lib' );


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

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sfirstIndexEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first element in a one-dimensional ndarray equal to a corresponding element in another one-dimensional ndarray', function test( t ) {
	var actual;
	var x;
	var y;

	x = vector( new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 6, 1, 0 );
	y = vector( new Float32Array( [ 1.0, 0.0, 3.0, 0.0, 5.0, 0.0 ] ), 6, 1, 0 );

	actual = sfirstIndexEqual( [ x, y ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = vector( new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 6, 1, 0 );
	y = vector( new Float32Array( [ 0.0, 2.0, 3.0, 0.0, 0.0, 0.0 ] ), 6, 1, 0 );

	actual = sfirstIndexEqual( [ x, y ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = vector( new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 6, 1, 0 );
	y = vector( new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 6.0 ] ), 6, 1, 0 );

	actual = sfirstIndexEqual( [ x, y ] );
	t.strictEqual( actual, 5, 'returns expected value' );

	x = vector( new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 6, 1, 0 );
	y = vector( new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ), 6, 1, 0 );

	actual = sfirstIndexEqual( [ x, y ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find an element in the first one-dimensional input ndarray equal to a corresponding element in the second one-dimensional input ndarray', function test( t ) {
	var actual;
	var x;
	var y;

	x = vector( new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 6, 1, 0 );
	y = vector( new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ), 6, 1, 0 );

	actual = sfirstIndexEqual( [ x, y ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		3.0,  // 1
		4.0,
		5.0,  // 2
		6.0,
		7.0,  // 3
		8.0
	]);
	y = new Float32Array([
		0.0,  // 0
		2.0,
		0.0,  // 1
		4.0,
		5.0,  // 2
		6.0,
		7.0,  // 3
		8.0
	]);

	actual = sfirstIndexEqual( [ vector( x, 4, 2, 0 ), vector( y, 4, 2, 0 ) ] );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float32Array([
		1.0,  // 3
		2.0,
		3.0,  // 2
		4.0,
		5.0,  // 1
		6.0,
		7.0,  // 0
		8.0
	]);
	y = new Float32Array([
		0.0,  // 3
		2.0,
		3.0,  // 2
		4.0,
		0.0,  // 1
		6.0,
		0.0,  // 0
		8.0
	]);

	actual = sfirstIndexEqual( [ vector( x, 4, -2, 6 ), vector( y, 4, -2, 6 ) ] );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float32Array([
		0.0,
		1.0,  // 0
		2.0,
		2.0,  // 1
		4.0,
		3.0,  // 2
		6.0,
		4.0   // 3
	]);
	y = new Float32Array([
		0.0,
		0.0,  // 0
		2.0,
		2.0,  // 1
		4.0,
		0.0,  // 2
		6.0,
		4.0   // 3
	]);

	actual = sfirstIndexEqual( [ vector( x, 4, 2, 1 ), vector( y, 4, 2, 1 ) ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function considers NaN values as distinct', function test( t ) {
	var actual;
	var x;
	var y;

	x = vector( new Float32Array( [ NaN, NaN, NaN ] ), 3, 1, 0 );
	y = vector( new Float32Array( [ NaN, NaN, NaN ] ), 3, 1, 0 );

	actual = sfirstIndexEqual( [ x, y ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function considers -0 and +0 as the same', function test( t ) {
	var actual;
	var x;
	var y;

	x = vector( new Float32Array( [ 1.0, -0.0, 3.0 ] ), 3, 1, 0 );
	y = vector( new Float32Array( [ 0.0, 0.0, 0.0 ] ), 3, 1, 0 );

	actual = sfirstIndexEqual( [ x, y ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});
