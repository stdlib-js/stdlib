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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var zaxpb = require( './../lib' );


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
	t.strictEqual( typeof zaxpb, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies each element by a scalar constant and adds a scalar constant', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var x;

	xbuf = new Complex128Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0, 2.0, 1.0 ] );
	x = vector( xbuf, 5, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpb( [ x, alpha, beta ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ -3.0, 2.0, 7.0, -10.0, 9.0, 0.0, -1.0, -6.0, 5.0, 2.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var x;

	xbuf = new Complex128Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	x = vector( xbuf, 2, 2, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpb( [ x, alpha, beta ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ -3.0, 2.0, 3.0, -5.0, 9.0, 0.0, -1.0, -3.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var x;

	xbuf = new Complex128Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0, 2.0, 1.0 ] );
	x = vector( xbuf, 5, -1, 4 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpb( [ x, alpha, beta ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ -3.0, 2.0, 7.0, -10.0, 9.0, 0.0, -1.0, -6.0, 5.0, 2.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var x;

	xbuf = new Complex128Array( [ 1.0, 0.0, -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0, 2.0, 1.0 ] );
	x = vector( xbuf, 3, 1, 2 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpb( [ x, alpha, beta ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 1.0, 0.0, -2.0, 1.0, 7.0, -10.0, 9.0, 0.0, -1.0, -6.0, 2.0, 1.0 ] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var x;

	xbuf = new Complex128Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});
	beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zaxpb( [ x, alpha, beta ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [] );
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});
