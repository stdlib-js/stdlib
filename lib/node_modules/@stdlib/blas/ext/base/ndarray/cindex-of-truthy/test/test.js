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
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var cindexOfTruthy = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Complex64Array} buffer - underlying data buffer
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
	t.strictEqual( typeof cindexOfTruthy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first truthy element', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex64Array([
		0.0,
		0.0,
		1.0,
		1.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		1.0,
		0.0,
		0.0
	]);

	x = vector( xbuf, 6, 1, 0 );

	actual = cindexOfTruthy( [ x ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = vector( xbuf, 5, 1, 1 );

	actual = cindexOfTruthy( [ x ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = vector( xbuf, 3, 2, 0 );

	actual = cindexOfTruthy( [ x ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	x = vector( xbuf, 6, -1, 5 );

	actual = cindexOfTruthy( [ x ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function ignores falsy elements (e.g., `0+0i`, `NaN+NaNi`, `NaN+0i`)', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex64Array([
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

	actual = cindexOfTruthy( [ x ] );
	t.strictEqual( actual, 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a truthy element', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex64Array([
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

	actual = cindexOfTruthy( [ x ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
