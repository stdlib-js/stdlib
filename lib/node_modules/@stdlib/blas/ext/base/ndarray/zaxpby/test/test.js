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

/* eslint-disable stdlib/empty-line-before-comment */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var zaxpby = require( './../lib' );


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
	t.strictEqual( typeof zaxpby, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( zaxpby.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies `x` by a scalar constant and adds the result to `y` multiplied by a scalar constant', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
	ybuf = new Complex128Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 1.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, -1.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpby( [ x, y, alpha, beta ] );
	expected = new Complex128Array([
		// (2.0+1.0i)*(1.0+2.0i) + (1.0-1.0i)*(2.0+1.0i)
		3.0,
		4.0,
		// (2.0+1.0i)*(3.0-1.0i) + (1.0-1.0i)*(-1.0+3.0i)
		9.0,
		5.0,
		// (2.0+1.0i)*(0.0+1.0i) + (1.0-1.0i)*(4.0+0.0i)
		3.0,
		-2.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = new Complex128Array( [ 1.0, 0.0, 2.0, 1.0 ] );
	ybuf = new Complex128Array( [ 3.0, -1.0, 4.0, 2.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 2, 1, 0 );

	actual = zaxpby( [ x, y, alpha, beta ] );
	expected = new Complex128Array([
		// (2.0+1.0i)*(1.0+0.0i) + (1.0-1.0i)*(3.0-1.0i)
		4.0,
		-3.0,
		// (2.0+1.0i)*(2.0+1.0i) + (1.0-1.0i)*(4.0+2.0i)
		9.0,
		2.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array([
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		3.0,  // 1
		-1.0, // 1
		0.0,
		0.0,
		0.0,  // 2
		1.0   // 2
	]);
	ybuf = new Complex128Array([
		2.0,  // 0
		1.0,  // 0
		-1.0, // 1
		3.0,  // 1
		4.0,  // 2
		0.0   // 2
	]);
	x = vector( xbuf, 3, 2, 0 );
	y = vector( ybuf, 3, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 1.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, -1.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpby( [ x, y, alpha, beta ] );
	expected = new Complex128Array([
		// (2.0+1.0i)*(1.0+2.0i) + (1.0-1.0i)*(2.0+1.0i)
		3.0,
		4.0,
		// (2.0+1.0i)*(3.0-1.0i) + (1.0-1.0i)*(-1.0+3.0i)
		9.0,
		5.0,
		// (2.0+1.0i)*(0.0+1.0i) + (1.0-1.0i)*(4.0+0.0i)
		3.0,
		-2.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array([
		1.0,  // 0
		2.0,  // 0
		3.0,  // 1
		-1.0, // 1
		0.0,  // 2
		1.0   // 2
	]);
	ybuf = new Complex128Array([
		2.0,  // 0
		1.0,  // 0
		0.0,
		0.0,
		-1.0, // 1
		3.0,  // 1
		0.0,
		0.0,
		4.0,  // 2
		0.0   // 2
	]);
	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 2, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 1.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, -1.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpby( [ x, y, alpha, beta ] );
	expected = new Complex128Array([
		// (2.0+1.0i)*(1.0+2.0i) + (1.0-1.0i)*(2.0+1.0i)
		3.0,
		4.0,
		0.0,
		0.0,
		// (2.0+1.0i)*(3.0-1.0i) + (1.0-1.0i)*(-1.0+3.0i)
		9.0,
		5.0,
		0.0,
		0.0,
		// (2.0+1.0i)*(0.0+1.0i) + (1.0-1.0i)*(4.0+0.0i)
		3.0,
		-2.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports ndarrays having negative strides', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array([
		1.0,  // 2
		2.0,  // 2
		0.0,
		0.0,
		3.0,  // 1
		-1.0, // 1
		0.0,
		0.0,
		5.0,  // 0
		6.0   // 0
	]);
	ybuf = new Complex128Array([
		4.0,  // 2
		0.0,  // 2
		3.0,  // 1
		-1.0, // 1
		2.0,  // 0
		1.0   // 0
	]);
	x = vector( xbuf, 3, -2, 4 );
	y = vector( ybuf, 3, -1, 2 );
	alpha = scalar2ndarray( new Complex128( 2.0, 1.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, -1.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpby( [ x, y, alpha, beta ] );
	expected = new Complex128Array([
		// (2.0+1.0i)*(1.0+2.0i) + (1.0-1.0i)*(4.0+0.0i)
		4.0,
		1.0,
		// (2.0+1.0i)*(3.0-1.0i) + (1.0-1.0i)*(3.0-1.0i)
		9.0,
		-3.0,
		// (2.0+1.0i)*(5.0+6.0i) + (1.0-1.0i)*(2.0+1.0i)
		7.0,
		16.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		1.0,  // 0
		0.0,  // 0
		0.0,
		0.0,
		2.0,  // 1
		0.0,  // 1
		0.0,
		0.0,
		3.0,  // 2
		0.0   // 2
	]);
	ybuf = new Complex128Array([
		0.0,
		0.0,
		2.0,  // 0
		0.0,  // 0
		3.0,  // 1
		0.0,  // 1
		4.0,  // 2
		0.0   // 2
	]);
	x = vector( xbuf, 3, 2, 1 );
	y = vector( ybuf, 3, 1, 1 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpby( [ x, y, alpha, beta ] );

	expected = new Complex128Array([
		0.0,
		0.0,
		// (5.0+0.0i)*(1.0+0.0i) + (2.0+0.0i)*(2.0+0.0i)
		9.0,
		0.0,
		// (5.0+0.0i)*(2.0+0.0i) + (2.0+0.0i)*(3.0+0.0i)
		16.0,
		0.0,
		// (5.0+0.0i)*(3.0+0.0i) + (2.0+0.0i)*(4.0+0.0i)
		23.0,
		0.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty ndarrays, the function returns the output ndarray unchanged', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array( [] );
	ybuf = new Complex128Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 1.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, -1.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpby( [ x, y, alpha, beta ] );
	expected = new Complex128Array( [] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});
