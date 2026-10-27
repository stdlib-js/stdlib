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
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var szeroTo = require( './../lib' );


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
	t.strictEqual( typeof szeroTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( szeroTo.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function fills a one-dimensional ndarray with linearly spaced numeric elements which increment by 1 starting from zero', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 4, 1, 0 );

	actual = szeroTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float32Array( [] );
	x = vector( xbuf, 0, 1, 0 );

	actual = szeroTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float32Array( [] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills a one-dimensional ndarray containing a single element', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ 5.0 ] );
	x = vector( xbuf, 1, 1, 0 );

	actual = szeroTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float32Array( [ 0.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 4, 2, 0 );

	actual = szeroTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 5, -1, 4 );

	actual = szeroTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float32Array( [ 4.0, 3.0, 2.0, 1.0, 0.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 4, 1, 2 );

	actual = szeroTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 1.0, 2.0, 3.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride and non-zero offset', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 5, -2, 9 );

	actual = szeroTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 4.0, 0.0, 3.0, 0.0, 2.0, 0.0, 1.0, 0.0, 0.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});
