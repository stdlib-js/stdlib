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
var gwhere = require( './../lib' );


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
	t.strictEqual( typeof gwhere, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( gwhere.length, 1, 'has expected arity' );
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

	cbuf = [ 1, 0, 1, 0, 1 ];
	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ybuf = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	c = vector( cbuf, 5, 1, 0 );
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	out = vector( obuf, 5, 1, 0 );
	expected = [
		1.0,  // x[0]
		7.0,  // y[1]
		3.0,  // x[2]
		9.0,  // y[3]
		5.0   // x[4]
	];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

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

	cbuf = [ 1, 1, 1, 1, 1 ];
	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ybuf = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	c = vector( cbuf, 5, 1, 0 );
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	out = vector( obuf, 5, 1, 0 );
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

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

	cbuf = [ 0, 0, 0, 0, 0 ];
	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ybuf = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	c = vector( cbuf, 5, 1, 0 );
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	out = vector( obuf, 5, 1, 0 );
	expected = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (truthy/falsy)', function test( t ) {
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

	cbuf = [ 'a', 0, null, 5, '', -1.5, NaN, true ];
	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	ybuf = [ 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0 ];
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	c = vector( cbuf, 8, 1, 0 );
	x = vector( xbuf, 8, 1, 0 );
	y = vector( ybuf, 8, 1, 0 );
	out = vector( obuf, 8, 1, 0 );
	expected = [
		1.0,  // 'a'  => truthy
		12.0, // 0    => falsy
		13.0, // null => falsy
		4.0,  // 5    => truthy
		15.0, // ''   => falsy
		6.0,  // -1.5 => truthy
		17.0, // NaN  => falsy
		8.0   // true => truthy
	];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

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

	cbuf = [
		1, // 0
		0,
		0, // 1
		1,
		1, // 2
		0,
		0, // 3
		1
	];
	xbuf = [
		1.0, // 0
		-2.0,
		3.0, // 1
		-4.0,
		5.0, // 2
		-6.0,
		7.0, // 3
		-8.0
	];
	ybuf = [
		11.0, // 0
		-12.0,
		13.0, // 1
		-14.0,
		15.0, // 2
		-16.0,
		17.0, // 3
		-18.0
	];
	obuf = [ 0.0, 99.0, 0.0, 99.0, 0.0, 99.0, 0.0, 99.0 ];
	c = vector( cbuf, 4, 2, 0 );
	x = vector( xbuf, 4, 2, 0 );
	y = vector( ybuf, 4, 2, 0 );
	out = vector( obuf, 4, 2, 0 );
	expected = [
		1.0,  // x[0]
		99.0,
		13.0, // y[2]
		99.0,
		5.0,  // x[4]
		99.0,
		17.0, // y[6]
		99.0
	];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

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

	cbuf = [
		1, // 4
		0, // 3
		1, // 2
		0, // 1
		1  // 0
	];
	xbuf = [
		1.0, // 4
		2.0, // 3
		3.0, // 2
		4.0, // 1
		5.0  // 0
	];
	ybuf = [
		6.0,  // 4
		7.0,  // 3
		8.0,  // 2
		9.0,  // 1
		10.0  // 0
	];
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	c = vector( cbuf, 5, -1, 4 );
	x = vector( xbuf, 5, -1, 4 );
	y = vector( ybuf, 5, -1, 4 );
	out = vector( obuf, 5, -1, 4 );
	expected = [
		1.0,  // x[0]
		7.0,  // y[1]
		3.0,  // x[2]
		9.0,  // y[3]
		5.0   // x[4]
	];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

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

	cbuf = [
		0,
		0,
		1, // 0
		0, // 1
		1, // 2
		0
	];
	xbuf = [
		-1.0,
		-2.0,
		3.0, // 0
		4.0, // 1
		5.0, // 2
		-6.0
	];
	ybuf = [
		-11.0,
		-12.0,
		13.0, // 0
		14.0, // 1
		15.0, // 2
		-16.0
	];
	obuf = [ 99.0, 99.0, 0.0, 0.0, 0.0, 99.0 ];
	c = vector( cbuf, 3, 1, 2 );
	x = vector( xbuf, 3, 1, 2 );
	y = vector( ybuf, 3, 1, 2 );
	out = vector( obuf, 3, 1, 2 );
	expected = [
		99.0,
		99.0,
		3.0,  // x[2]
		14.0, // y[3]
		5.0,  // x[4]
		99.0
	];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

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

	cbuf = [ 0, 1, 0, 1, 0, 0 ];
	xbuf = [ 1.0, 100.0, 2.0, 100.0, 3.0, 100.0, 4.0 ];
	ybuf = [ 40.0, 30.0, 20.0, 10.0 ];
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	c = vector( cbuf, 4, -1, 4 );
	x = vector( xbuf, 4, 2, 0 );
	y = vector( ybuf, 4, -1, 3 );
	out = vector( obuf, 4, 3, 1 );
	expected = [
		0.0,
		10.0, // cbuf[4] = 0 => y[3]
		0.0,
		0.0,
		2.0,  // cbuf[3] = 1 => x[2]
		0.0,
		0.0,
		30.0, // cbuf[2] = 0 => y[1]
		0.0,
		0.0,
		4.0,  // cbuf[1] = 1 => x[6]
		0.0
	];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

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

	cbuf = [];
	xbuf = [];
	ybuf = [];
	obuf = [];
	c = vector( cbuf, 0, 1, 0 );
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );
	out = vector( obuf, 0, 1, 0 );
	expected = [];

	actual = gwhere( [ c, x, y, out ] );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});
