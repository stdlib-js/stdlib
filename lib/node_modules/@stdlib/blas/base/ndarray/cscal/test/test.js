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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var cscal = require( './../lib' );


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
	return new ndarray( 'complex64', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( cscal.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies a one-dimensional ndarray by a scalar constant', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex64Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0,  // 2
		5.0,  // 3
		6.0   // 3
	]);
	x = vector( xbuf, 3, 1, 0 );
	alpha = scalar2ndarray( new Complex64( 2.0, 0.0 ), {
		'dtype': 'complex64'
	});

	v = cscal( [ x, alpha ] );

	expected = new Complex64Array([
		2.0,   // 1
		4.0,   // 1
		6.0,   // 2
		8.0,   // 2
		10.0,  // 3
		12.0   // 3
	]);
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Complex64Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0   // 2
	]);
	x = vector( xbuf, 2, 1, 0 );
	alpha = scalar2ndarray( new Complex64( 2.0, 0.0 ), {
		'dtype': 'complex64'
	});

	v = cscal( [ x, alpha ] );

	expected = new Complex64Array([
		2.0,  // 1
		4.0,  // 1
		6.0,  // 2
		8.0   // 2
	]);
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns the input ndarray unchanged', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex64Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	alpha = scalar2ndarray( new Complex64( 2.0, 0.0 ), {
		'dtype': 'complex64'
	});

	v = cscal( [ x, alpha ] );

	expected = new Complex64Array( [] );
	t.strictEqual( v, x, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex64Array([
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
	alpha = scalar2ndarray( new Complex64( 2.0, 0.0 ), {
		'dtype': 'complex64'
	});

	v = cscal( [ x, alpha ] );

	expected = new Complex64Array([
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
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex64Array([
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
	alpha = scalar2ndarray( new Complex64( 2.0, 0.0 ), {
		'dtype': 'complex64'
	});

	v = cscal( [ x, alpha ] );

	expected = new Complex64Array([
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
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Complex64Array([
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
	alpha = scalar2ndarray( new Complex64( 2.0, 0.0 ), {
		'dtype': 'complex64'
	});

	v = cscal( [ x, alpha ] );

	expected = new Complex64Array([
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
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
