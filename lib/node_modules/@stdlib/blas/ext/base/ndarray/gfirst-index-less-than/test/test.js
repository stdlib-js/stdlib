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
var gfirstIndexLessThan = require( './../lib' );


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
	return new ndarray( 'generic', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfirstIndexLessThan, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first element in a one-dimensional ndarray which is less than a corresponding element in another one-dimensional ndarray', function test( t ) {
	var actual;
	var x;
	var y;

	x = vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 6, 1, 0 );
	y = vector( [ 2.0, 2.0, 2.0, 3.0, 4.0, 5.0 ], 6, 1, 0 );

	actual = gfirstIndexLessThan( [ x, y ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = vector( [ 2.0, 1.0, 3.0, 4.0, 5.0, 6.0 ], 6, 1, 0 );
	y = vector( [ 1.0, 2.0, 2.0, 3.0, 4.0, 5.0 ], 6, 1, 0 );

	actual = gfirstIndexLessThan( [ x, y ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = vector( [ 2.0, 2.0, 2.0, 4.0, 5.0, 6.0 ], 6, 1, 0 );
	y = vector( [ 1.0, 2.0, 3.0, 5.0, 4.0, 5.0 ], 6, 1, 0 );

	actual = gfirstIndexLessThan( [ x, y ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = vector( [ 2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 6, 1, 0 );
	y = vector( [ 1.0, 2.0, 2.0, 3.0, 4.0, 5.0 ], 6, 1, 0 );

	actual = gfirstIndexLessThan( [ x, y ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find an element in the first one-dimensional input ndarray which is less than a corresponding element in the second one-dimensional input ndarray', function test( t ) {
	var actual;
	var x;
	var y;

	x = vector( [ 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ], 6, 1, 0 );
	y = vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 6, 1, 0 );

	actual = gfirstIndexLessThan( [ x, y ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		2.0,  // 0
		2.0,
		2.0,  // 1
		-4.0,
		3.0,  // 2
		3.0,
		5.0,  // 3
		2.0
	];
	y = [
		1.0,  // 0
		2.0,
		1.0,  // 1
		-4.0,
		4.0,  // 2
		3.0,
		4.0,  // 3
		2.0
	];

	actual = gfirstIndexLessThan( [ vector( x, 4, 2, 0 ), vector( y, 4, 2, 0 ) ] );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-2.0,
		3.0,  // 1
		4.0,
		5.0,  // 0
		2.0
	];
	y = [
		4.0,  // 3
		2.0,
		3.0,  // 2
		-2.0,
		4.0,  // 1
		4.0,
		4.0,  // 0
		2.0
	];

	actual = gfirstIndexLessThan( [ vector( x, 4, -2, 6 ), vector( y, 4, -2, 6 ) ] );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		2.0,  // 1
		-2.0,
		3.0,  // 2
		3.0,
		4.0   // 3
	];
	y = [
		2.0,
		2.0,  // 0
		2.0,
		3.0,  // 1
		-2.0,
		2.0,  // 2
		3.0,
		5.0   // 3
	];

	actual = gfirstIndexLessThan( [ vector( x, 4, 2, 1 ), vector( y, 4, 2, 1 ) ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});
