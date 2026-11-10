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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var dediff = require( './../lib' );


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
	t.strictEqual( typeof dediff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dediff.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the differences between consecutive elements of a one-dimensional ndarray', function test( t ) {
	var expected;
	var actual;
	var obuf;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var x;
	var p;
	var a;

	xbuf = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	pbuf = new Float64Array( [ 1.0 ] );
	abuf = new Float64Array( [ 11.0 ] );
	obuf = new Float64Array( 6 );

	x = vector( xbuf, 5, 1, 0 );
	p = vector( pbuf, 1, 1, 0 );
	a = vector( abuf, 1, 1, 0 );
	out = vector( obuf, 6, 1, 0 );

	actual = dediff( [ x, p, a, out ] );
	t.strictEqual( actual, out, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 2.0, 2.0, 2.0, 11.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports no prepend and no append', function test( t ) {
	var expected;
	var actual;
	var obuf;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var x;
	var p;
	var a;

	xbuf = new Float64Array( [ 1.0, 3.0, 6.0, 10.0 ] );
	pbuf = new Float64Array( 0 );
	abuf = new Float64Array( 0 );
	obuf = new Float64Array( 3 );

	x = vector( xbuf, 4, 1, 0 );
	p = vector( pbuf, 0, 1, 0 );
	a = vector( abuf, 0, 1, 0 );
	out = vector( obuf, 3, 1, 0 );

	actual = dediff( [ x, p, a, out ] );
	t.strictEqual( actual, out, 'returns expected value' );

	expected = new Float64Array( [ 2.0, 3.0, 4.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var obuf;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var x;
	var p;
	var a;

	// stride=2 accesses x[0]=2, x[2]=6, x[4]=10 (N=3):
	xbuf = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	pbuf = new Float64Array( [ 1.0 ] );
	abuf = new Float64Array( [ 11.0 ] );
	obuf = new Float64Array( 4 );

	x = vector( xbuf, 3, 2, 0 );
	p = vector( pbuf, 1, 1, 0 );
	a = vector( abuf, 1, 1, 0 );
	out = vector( obuf, 4, 1, 0 );

	actual = dediff( [ x, p, a, out ] );
	t.strictEqual( actual, out, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 4.0, 4.0, 11.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var obuf;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var x;
	var p;
	var a;

	// stride=-1, offset=4 accesses x[4]=10, x[3]=8, ..., x[0]=2:
	xbuf = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	pbuf = new Float64Array( [ 1.0 ] );
	abuf = new Float64Array( [ 11.0 ] );
	obuf = new Float64Array( 6 );

	x = vector( xbuf, 5, -1, 4 );
	p = vector( pbuf, 1, 1, 0 );
	a = vector( abuf, 1, 1, 0 );
	out = vector( obuf, 6, 1, 0 );

	actual = dediff( [ x, p, a, out ] );
	t.strictEqual( actual, out, 'returns expected value' );

	expected = new Float64Array( [ 1.0, -2.0, -2.0, -2.0, -2.0, 11.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var obuf;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var x;
	var p;
	var a;

	// offset=2, N=3 accesses x[2]=6, x[3]=8, x[4]=10:
	xbuf = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	pbuf = new Float64Array( [ 1.0 ] );
	abuf = new Float64Array( [ 11.0 ] );
	obuf = new Float64Array( 4 );

	x = vector( xbuf, 3, 1, 2 );
	p = vector( pbuf, 1, 1, 0 );
	a = vector( abuf, 1, 1, 0 );
	out = vector( obuf, 4, 1, 0 );

	actual = dediff( [ x, p, a, out ] );
	t.strictEqual( actual, out, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 2.0, 11.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an output ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var obuf;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var x;
	var p;
	var a;

	// stride=2 for out: results written at indices 0, 2, 4, 6, 8, 10:
	xbuf = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	pbuf = new Float64Array( [ 1.0 ] );
	abuf = new Float64Array( [ 11.0 ] );
	obuf = new Float64Array( 12 );

	x = vector( xbuf, 5, 1, 0 );
	p = vector( pbuf, 1, 1, 0 );
	a = vector( abuf, 1, 1, 0 );
	out = vector( obuf, 6, 2, 0 );

	actual = dediff( [ x, p, a, out ] );
	t.strictEqual( actual, out, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 2.0, 0.0, 2.0, 0.0, 11.0, 0.0 ] ); // eslint-disable-line max-len
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an output ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var obuf;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var x;
	var p;
	var a;

	// offset=2 for out: results written starting at index 2:
	xbuf = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	pbuf = new Float64Array( [ 1.0 ] );
	abuf = new Float64Array( [ 11.0 ] );
	obuf = new Float64Array( 8 );

	x = vector( xbuf, 5, 1, 0 );
	p = vector( pbuf, 1, 1, 0 );
	a = vector( abuf, 1, 1, 0 );
	out = vector( obuf, 6, 1, 2 );

	actual = dediff( [ x, p, a, out ] );
	t.strictEqual( actual, out, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 1.0, 2.0, 2.0, 2.0, 2.0, 11.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a zero stride', function test( t ) {
	var expected;
	var actual;
	var obuf;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var x;
	var p;
	var a;

	// stride=0, offset=2: all 5 elements read xbuf[2]=6.0:
	xbuf = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	pbuf = new Float64Array( [ 1.0 ] );
	abuf = new Float64Array( [ 11.0 ] );
	obuf = new Float64Array( 6 );

	x = vector( xbuf, 5, 0, 2 );
	p = vector( pbuf, 1, 1, 0 );
	a = vector( abuf, 1, 1, 0 );
	out = vector( obuf, 6, 1, 0 );

	actual = dediff( [ x, p, a, out ] );
	t.strictEqual( actual, out, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 11.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});
