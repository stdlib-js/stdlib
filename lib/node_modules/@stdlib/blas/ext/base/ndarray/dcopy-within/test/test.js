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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var dcopyWithin = require( './../lib' );


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

/**
* Returns a zero-dimensional ndarray.
*
* @private
* @param {number} v - scalar value
* @returns {ndarray} zero-dimensional ndarray
*/
function scalar( v ) {
	return scalar2ndarray( v, {
		'dtype': 'generic'
	});
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcopyWithin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dcopyWithin.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function copies elements within a one-dimensional ndarray', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	wbuf = new Float64Array( 6 );

	x = vector( xbuf, 6, 1, 0 );
	w = vector( wbuf, 6, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 3 ), scalar( 1 ), scalar( 4 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ] ), 'returns expected value' );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	wbuf = new Float64Array( 6 );

	x = vector( xbuf, 6, 1, 0 );
	w = vector( wbuf, 6, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 3 ), scalar( 0 ), scalar( 3 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 3.0 ] ), 'returns expected value' );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	wbuf = new Float64Array( 5 );

	x = vector( xbuf, 5, 1, 0 );
	w = vector( wbuf, 5, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 2 ), scalar( 0 ), scalar( 5 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 1.0, 2.0, 3.0 ] ), 'returns expected value' );

	t.end();
});

tape( 'if the `target` index is greater than or equal to the number of elements, the function returns the input ndarray unchanged', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	wbuf = new Float64Array( 6 );

	x = vector( xbuf, 6, 1, 0 );
	w = vector( wbuf, 6, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 6 ), scalar( 0 ), scalar( 3 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 'returns expected value' );

	actual = dcopyWithin( [ x, scalar( 10 ), scalar( 0 ), scalar( 3 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 'returns expected value' );

	t.end();
});

tape( 'if the input ndarray is empty, the function returns the input ndarray unchanged', function test( t ) {
	var actual;
	var x;
	var w;

	x = vector( new Float64Array( [] ), 0, 1, 0 );
	w = vector( new Float64Array( [] ), 0, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 0 ), scalar( 0 ), scalar( 0 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [] ), 'returns expected value' );

	t.end();
});

tape( 'if the `start` index is greater than or equal to the `end` index, the function returns the input ndarray unchanged', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	wbuf = new Float64Array( 6 );

	x = vector( xbuf, 6, 1, 0 );
	w = vector( wbuf, 6, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 0 ), scalar( 3 ), scalar( 1 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 'returns expected value' );

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	wbuf = new Float64Array( 6 );

	x = vector( xbuf, 6, 1, 0 );
	w = vector( wbuf, 6, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 0 ), scalar( 2 ), scalar( 2 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 'returns expected value' );

	t.end();
});

tape( 'if the `end` index is greater than the number of elements, the function copies elements up to the last indexed element', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	wbuf = new Float64Array( 5 );

	x = vector( xbuf, 5, 1, 0 );
	w = vector( wbuf, 5, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 0 ), scalar( 2 ), scalar( 10 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 3.0, 4.0, 5.0, 4.0, 5.0 ] ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	wbuf = new Float64Array( 4 );

	x = vector( xbuf, 4, 2, 0 );
	w = vector( wbuf, 4, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 0 ), scalar( 2 ), scalar( 4 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 5.0, 2.0, 7.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	wbuf = new Float64Array( 3 );

	x = vector( xbuf, 3, -1, 2 );
	w = vector( wbuf, 3, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 0 ), scalar( 1 ), scalar( 3 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ] ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	wbuf = new Float64Array( 4 );

	x = vector( xbuf, 4, 1, 1 );
	w = vector( wbuf, 4, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 2 ), scalar( 0 ), scalar( 2 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 3.0, 2.0, 3.0, 6.0 ] ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a zero stride', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	wbuf = new Float64Array( 6 );

	x = vector( xbuf, 6, 0, 0 );
	w = vector( wbuf, 6, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 1 ), scalar( 0 ), scalar( 2 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride and non-zero offset', function test( t ) {
	var actual;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	wbuf = new Float64Array( 4 );

	x = vector( xbuf, 4, -1, 3 );
	w = vector( wbuf, 4, 1, 0 );

	actual = dcopyWithin( [ x, scalar( 0 ), scalar( 2 ), scalar( 4 ), w ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 1.0, 2.0, 1.0, 2.0, 5.0, 6.0, 7.0, 8.0 ] ), 'returns expected value' );

	t.end();
});
