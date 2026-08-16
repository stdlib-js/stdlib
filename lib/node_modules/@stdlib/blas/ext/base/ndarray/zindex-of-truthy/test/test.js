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
var Complex128Array = require( '@stdlib/array/complex128' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var zindexOfTruthy = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Complex128Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'complex128', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zindexOfTruthy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first truthy element', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		3.0,
		4.0,
		0.0,
		0.0,
		4.0,
		5.0,
		0.0,
		0.0
	]);
	x = vector( xbuf, 6, 1, 0 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	xbuf = new Complex128Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	x = vector( xbuf, 3, 1, 0 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a truthy element', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	x = vector( xbuf, 4, 1, 0 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function ignores falsy elements (e.g., `0+0i`, `NaN+NaNi`, `NaN+0i`)', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		NaN,
		NaN,
		NaN,
		0.0,
		1.0,
		1.0
	]);
	x = vector( xbuf, 4, 1, 0 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, 3, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		3.0,
		4.0,
		0.0,
		0.0,
		4.0,
		5.0,
		0.0,
		0.0,
		5.0,
		6.0
	]);
	x = vector( xbuf, 3, 2, 0 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	xbuf = new Complex128Array([
		3.0,
		4.0,
		0.0,
		0.0,
		0.0,
		0.0,
		4.0,
		5.0,
		0.0,
		0.0,
		5.0,
		6.0
	]);
	x = vector( xbuf, 3, 2, 0 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		3.0,
		4.0,
		0.0,
		0.0,
		4.0,
		5.0,
		0.0,
		0.0
	]);
	x = vector( xbuf, 6, -1, 5 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex128Array([
		3.0,
		4.0,
		0.0,
		0.0,
		0.0,
		0.0,
		4.0,
		5.0,
		0.0,
		0.0,
		5.0,
		6.0
	]);
	x = vector( xbuf, 3, 1, 1 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an empty one-dimensional ndarray', function test( t ) {
	var actual;
	var x;

	x = vector( new Complex128Array( [] ), 0, 1, 0 );

	actual = zindexOfTruthy( [ x ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
