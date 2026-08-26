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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var zscal = require( './../lib' );


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
	return new ndarray( 'complex128', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( zscal.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies a one-dimensional ndarray by a scalar constant', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex128Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0,  // 2
		5.0,  // 3
		6.0   // 3
	]);
	x = vector( xbuf, 3, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});

	v = zscal( [ x, alpha ] );

	expected = new Complex128Array([
		2.0,   // 1
		4.0,   // 1
		6.0,   // 2
		8.0,   // 2
		10.0,  // 3
		12.0   // 3
	]);
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Complex128Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0   // 2
	]);
	x = vector( xbuf, 2, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});

	v = zscal( [ x, alpha ] );

	expected = new Complex128Array([
		2.0,  // 1
		4.0,  // 1
		6.0,  // 2
		8.0   // 2
	]);
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns the input ndarray unchanged', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex128Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});

	v = zscal( [ x, alpha ] );

	expected = new Complex128Array( [] );
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex128Array([
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		5.0,  // 2
		6.0   // 2
	]);
	x = vector( xbuf, 3, 2, 0 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});

	v = zscal( [ x, alpha ] );

	expected = new Complex128Array([
		2.0,   // 0
		4.0,   // 0
		0.0,
		0.0,
		6.0,   // 1
		8.0,   // 1
		0.0,
		0.0,
		10.0,  // 2
		12.0   // 2
	]);
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex128Array([
		1.0,  // 2
		2.0,  // 2
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		5.0,  // 0
		6.0   // 0
	]);
	x = vector( xbuf, 3, -2, 4 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});

	v = zscal( [ x, alpha ] );

	expected = new Complex128Array([
		2.0,   // 2
		4.0,   // 2
		0.0,
		0.0,
		6.0,   // 1
		8.0,   // 1
		0.0,
		0.0,
		10.0,  // 0
		12.0   // 0
	]);
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		1.0,   // 0
		2.0,   // 0
		0.0,
		0.0,
		3.0,   // 1
		4.0,   // 1
		0.0,
		0.0,
		5.0,   // 2
		6.0,   // 2
		0.0,
		0.0,
		7.0,   // 3
		8.0    // 3
	]);
	x = vector( xbuf, 4, 2, 1 );
	alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
		'dtype': 'complex128'
	});

	v = zscal( [ x, alpha ] );

	expected = new Complex128Array([
		0.0,
		0.0,
		2.0,   // 0
		4.0,   // 0
		0.0,
		0.0,
		6.0,   // 1
		8.0,   // 1
		0.0,
		0.0,
		10.0,  // 2
		12.0,  // 2
		0.0,
		0.0,
		14.0,  // 3
		16.0   // 3
	]);
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
