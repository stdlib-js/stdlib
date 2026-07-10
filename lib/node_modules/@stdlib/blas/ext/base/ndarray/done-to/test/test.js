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
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var doneTo = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Float64Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'float64', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof doneTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( doneTo.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function fills a one-dimensional ndarray with linearly spaced numeric elements which increment by 1 starting from one', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 4, 1, 0 );

	actual = doneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [] );
	x = vector( xbuf, 0, 1, 0 );

	actual = doneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills a one-dimensional ndarray containing a single element', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 5.0 ] );
	x = vector( xbuf, 1, 1, 0 );

	actual = doneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 1.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 4, 2, 0 );

	actual = doneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 5, -1, 4 );

	actual = doneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 5.0, 4.0, 3.0, 2.0, 1.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 4, 1, 2 );

	actual = doneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride and non-zero offset', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 5, -2, 9 );

	actual = doneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 5.0, 0.0, 4.0, 0.0, 3.0, 0.0, 2.0, 0.0, 1.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});
