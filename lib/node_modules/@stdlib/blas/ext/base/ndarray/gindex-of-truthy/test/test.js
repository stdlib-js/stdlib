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
var gindexOfTruthy = require( './../lib' );


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
	t.strictEqual( typeof gindexOfTruthy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first truthy element', function test( t ) {
	var actual;
	var x;

	x = vector( [ 0.0, 0.0, 3.0, 0.0, 4.0, 0.0 ], 6, 1, 0 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = vector( [ 1.0, 2.0, 3.0 ], 3, 1, 0 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a truthy element', function test( t ) {
	var actual;
	var x;

	x = vector( [ 0.0, 0.0, 0.0, 0.0 ], 4, 1, 0 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function ignores falsy elements (e.g., `0`, `NaN`)', function test( t ) {
	var actual;
	var x;

	x = vector( [ 0.0, NaN, 5.0, 0.0 ], 4, 1, 0 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var actual;
	var x;

	x = vector( [ 0.0, 3.0, 0.0, 4.0, 0.0, 5.0 ], 3, 2, 0 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = vector( [ 3.0, 0.0, 0.0, 4.0, 0.0, 5.0 ], 3, 2, 0 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var actual;
	var x;

	x = vector( [ 0.0, 0.0, 3.0, 0.0, 4.0, 0.0 ], 6, -1, 5 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var actual;
	var x;

	x = vector( [ 3.0, 0.0, 0.0, 4.0, 0.0, 5.0 ], 3, 1, 1 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an empty one-dimensional ndarray', function test( t ) {
	var actual;
	var x;

	x = vector( [], 0, 1, 0 );

	actual = gindexOfTruthy( [ x ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
