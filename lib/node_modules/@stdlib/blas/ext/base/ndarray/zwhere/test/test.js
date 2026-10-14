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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var BooleanArray = require( '@stdlib/array/bool' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var zwhere = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional double-precision complex floating-point ndarray.
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

/**
* Returns a one-dimensional boolean ndarray.
*
* @private
* @param {BooleanArray} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function bvector( buffer, length, stride, offset ) {
	return new ndarray( 'bool', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zwhere, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( zwhere.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition', function test( t ) {
	var expected;
	var actual;
	var cbuf;
	var obuf;
	var xbuf;
	var ybuf;
	var out;
	var c;
	var x;
	var y;

	cbuf = new BooleanArray( [ true, false, true, false, true ] );
	xbuf = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0,
		3.0,
		-3.0,
		4.0,
		-4.0,
		5.0,
		-5.0
	]);
	ybuf = new Complex128Array([
		6.0,
		-6.0,
		7.0,
		-7.0,
		8.0,
		-8.0,
		9.0,
		-9.0,
		10.0,
		-10.0
	]);
	obuf = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	c = bvector( cbuf, 5, 1, 0 );
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	out = vector( obuf, 5, 1, 0 );
	expected = new Complex128Array([
		1.0,   // x[0]
		-1.0,  // x[0]
		7.0,   // y[1]
		-7.0,  // y[1]
		3.0,   // x[2]
		-3.0,  // x[2]
		9.0,   // y[3]
		-9.0,  // y[3]
		5.0,   // x[4]
		-5.0   // x[4]
	]);

	actual = zwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( obuf, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (all true)', function test( t ) {
	var expected;
	var actual;
	var cbuf;
	var obuf;
	var xbuf;
	var ybuf;
	var out;
	var c;
	var x;
	var y;

	cbuf = new BooleanArray( [ true, true, true, true, true ] );
	xbuf = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0,
		3.0,
		-3.0,
		4.0,
		-4.0,
		5.0,
		-5.0
	]);
	ybuf = new Complex128Array([
		6.0,
		-6.0,
		7.0,
		-7.0,
		8.0,
		-8.0,
		9.0,
		-9.0,
		10.0,
		-10.0
	]);
	obuf = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	c = bvector( cbuf, 5, 1, 0 );
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	out = vector( obuf, 5, 1, 0 );
	expected = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0,
		3.0,
		-3.0,
		4.0,
		-4.0,
		5.0,
		-5.0
	]);

	actual = zwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( obuf, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (all false)', function test( t ) {
	var expected;
	var actual;
	var cbuf;
	var obuf;
	var xbuf;
	var ybuf;
	var out;
	var c;
	var x;
	var y;

	cbuf = new BooleanArray( [ false, false, false, false, false ] );
	xbuf = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0,
		3.0,
		-3.0,
		4.0,
		-4.0,
		5.0,
		-5.0
	]);
	ybuf = new Complex128Array([
		6.0,
		-6.0,
		7.0,
		-7.0,
		8.0,
		-8.0,
		9.0,
		-9.0,
		10.0,
		-10.0
	]);
	obuf = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	c = bvector( cbuf, 5, 1, 0 );
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	out = vector( obuf, 5, 1, 0 );
	expected = new Complex128Array([
		6.0,
		-6.0,
		7.0,
		-7.0,
		8.0,
		-8.0,
		9.0,
		-9.0,
		10.0,
		-10.0
	]);

	actual = zwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( obuf, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarrays having non-unit strides', function test( t ) {
	var expected;
	var actual;
	var cbuf;
	var obuf;
	var xbuf;
	var ybuf;
	var out;
	var c;
	var x;
	var y;

	cbuf = new BooleanArray([
		true,  // 0
		false,
		false, // 1
		true,
		true,  // 2
		false,
		false, // 3
		true
	]);
	xbuf = new Complex128Array([
		1.0,   // 0
		-1.0,  // 0
		-2.0,
		2.0,
		3.0,   // 1
		-3.0,  // 1
		-4.0,
		4.0,
		5.0,   // 2
		-5.0,  // 2
		-6.0,
		6.0,
		7.0,   // 3
		-7.0,  // 3
		-8.0,
		8.0
	]);
	ybuf = new Complex128Array([
		11.0,   // 0
		-11.0,  // 0
		-12.0,
		12.0,
		13.0,   // 1
		-13.0,  // 1
		-14.0,
		14.0,
		15.0,   // 2
		-15.0,  // 2
		-16.0,
		16.0,
		17.0,   // 3
		-17.0,  // 3
		-18.0,
		18.0
	]);
	obuf = new Complex128Array([
		0.0,
		0.0,
		99.0,
		99.0,
		0.0,
		0.0,
		99.0,
		99.0,
		0.0,
		0.0,
		99.0,
		99.0,
		0.0,
		0.0,
		99.0,
		99.0
	]);
	c = bvector( cbuf, 4, 2, 0 );
	x = vector( xbuf, 4, 2, 0 );
	y = vector( ybuf, 4, 2, 0 );
	out = vector( obuf, 4, 2, 0 );
	expected = new Complex128Array([
		1.0,    // x[0]
		-1.0,   // x[0]
		99.0,
		99.0,
		13.0,   // y[2]
		-13.0,  // y[2]
		99.0,
		99.0,
		5.0,    // x[4]
		-5.0,   // x[4]
		99.0,
		99.0,
		17.0,   // y[6]
		-17.0,  // y[6]
		99.0,
		99.0
	]);

	actual = zwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( obuf, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarrays having negative strides', function test( t ) {
	var expected;
	var actual;
	var cbuf;
	var obuf;
	var xbuf;
	var ybuf;
	var out;
	var c;
	var x;
	var y;

	cbuf = new BooleanArray([
		true,  // 4
		false, // 3
		true,  // 2
		false, // 1
		true   // 0
	]);
	xbuf = new Complex128Array([
		1.0,   // 4
		-1.0,  // 4
		2.0,   // 3
		-2.0,  // 3
		3.0,   // 2
		-3.0,  // 2
		4.0,   // 1
		-4.0,  // 1
		5.0,   // 0
		-5.0   // 0
	]);
	ybuf = new Complex128Array([
		6.0,   // 4
		-6.0,  // 4
		7.0,   // 3
		-7.0,  // 3
		8.0,   // 2
		-8.0,  // 2
		9.0,   // 1
		-9.0,  // 1
		10.0,  // 0
		-10.0  // 0
	]);
	obuf = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	c = bvector( cbuf, 5, -1, 4 );
	x = vector( xbuf, 5, -1, 4 );
	y = vector( ybuf, 5, -1, 4 );
	out = vector( obuf, 5, -1, 4 );
	expected = new Complex128Array([
		1.0,   // x[0]
		-1.0,  // x[0]
		7.0,   // y[1]
		-7.0,  // y[1]
		3.0,   // x[2]
		-3.0,  // x[2]
		9.0,   // y[3]
		-9.0,  // y[3]
		5.0,   // x[4]
		-5.0   // x[4]
	]);

	actual = zwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( obuf, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var actual;
	var cbuf;
	var obuf;
	var xbuf;
	var ybuf;
	var out;
	var c;
	var x;
	var y;

	cbuf = new BooleanArray([
		false,
		false,
		true,  // 0
		false, // 1
		true,  // 2
		false
	]);
	xbuf = new Complex128Array([
		-1.0,
		1.0,
		-2.0,
		2.0,
		3.0,   // 0
		-3.0,  // 0
		4.0,   // 1
		-4.0,  // 1
		5.0,   // 2
		-5.0,  // 2
		-6.0,
		6.0
	]);
	ybuf = new Complex128Array([
		-11.0,
		11.0,
		-12.0,
		12.0,
		13.0,   // 0
		-13.0,  // 0
		14.0,   // 1
		-14.0,  // 1
		15.0,   // 2
		-15.0,  // 2
		-16.0,
		16.0
	]);
	obuf = new Complex128Array([
		99.0,
		99.0,
		99.0,
		99.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		99.0,
		99.0
	]);
	c = bvector( cbuf, 3, 1, 2 );
	x = vector( xbuf, 3, 1, 2 );
	y = vector( ybuf, 3, 1, 2 );
	out = vector( obuf, 3, 1, 2 );
	expected = new Complex128Array([
		99.0,
		99.0,
		99.0,
		99.0,
		3.0,    // x[2]
		-3.0,   // x[2]
		14.0,   // y[3]
		-14.0,  // y[3]
		5.0,    // x[4]
		-5.0,   // x[4]
		99.0,
		99.0
	]);

	actual = zwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( obuf, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarrays having different strides and offsets', function test( t ) {
	var expected;
	var actual;
	var cbuf;
	var obuf;
	var xbuf;
	var ybuf;
	var out;
	var c;
	var x;
	var y;

	cbuf = new BooleanArray( [ false, true, false, true, false, false ] );
	xbuf = new Complex128Array([
		1.0,     // 0
		-1.0,    // 0
		100.0,
		100.0,
		2.0,     // 1
		-2.0,    // 1
		100.0,
		100.0,
		3.0,     // 2
		-3.0,    // 2
		100.0,
		100.0,
		4.0,     // 3
		-4.0     // 3
	]);
	ybuf = new Complex128Array([
		40.0,   // 3
		-40.0,  // 3
		30.0,   // 2
		-30.0,  // 2
		20.0,   // 1
		-20.0,  // 1
		10.0,   // 0
		-10.0   // 0
	]);
	obuf = new Complex128Array( 12 );
	c = bvector( cbuf, 4, -1, 4 );
	x = vector( xbuf, 4, 2, 0 );
	y = vector( ybuf, 4, -1, 3 );
	out = vector( obuf, 4, 3, 1 );
	expected = new Complex128Array([
		0.0,
		0.0,
		10.0,   // cbuf[4]=false => y[3]
		-10.0,  // cbuf[4]=false => y[3]
		0.0,
		0.0,
		0.0,
		0.0,
		2.0,    // cbuf[3]=true => x[2]
		-2.0,   // cbuf[3]=true => x[2]
		0.0,
		0.0,
		0.0,
		0.0,
		30.0,   // cbuf[2]=false => y[1]
		-30.0,  // cbuf[2]=false => y[1]
		0.0,
		0.0,
		0.0,
		0.0,
		4.0,    // cbuf[1]=true => x[6]
		-4.0,   // cbuf[1]=true => x[6]
		0.0,
		0.0
	]);

	actual = zwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( obuf, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the output ndarray unchanged when the input ndarrays are empty', function test( t ) {
	var expected;
	var actual;
	var cbuf;
	var obuf;
	var xbuf;
	var ybuf;
	var out;
	var c;
	var x;
	var y;

	cbuf = new BooleanArray( [] );
	xbuf = new Complex128Array( [] );
	ybuf = new Complex128Array( [] );
	obuf = new Complex128Array( [] );
	c = bvector( cbuf, 0, 1, 0 );
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );
	out = vector( obuf, 0, 1, 0 );
	expected = new Complex128Array( [] );

	actual = zwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( obuf, expected ), true, 'returns expected value' );

	t.end();
});
