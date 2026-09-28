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
var zwxsa = require( './../lib' );


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
	t.strictEqual( typeof zwxsa, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( zwxsa.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function subtracts a scalar constant from each element and assigns results to an output ndarray', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Complex128Array([
		-2.0, // 0
		1.0,  // 0
		3.0,  // 1
		-5.0, // 1
		4.0,  // 2
		0.0,  // 2
		-1.0, // 3
		-3.0, // 3
		2.0,  // 4
		1.0   // 4
	]);
	wbuf = new Complex128Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0, // 3
		0.0, // 3
		0.0, // 4
		0.0  // 4
	]);
	x = vector( xbuf, 5, 1, 0 );
	w = vector( wbuf, 5, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zwxsa( [ x, w, alpha ] );
	t.strictEqual( actual, w, 'returns expected value' );

	expected = new Complex128Array([
		-7.0, // 0
		1.0,  // 0
		-2.0, // 1
		-5.0, // 1
		-1.0, // 2
		0.0,  // 2
		-6.0, // 3
		-3.0, // 3
		-3.0, // 4
		1.0   // 4
	]);
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Complex128Array([
		-2.0, // 0
		1.0,  // 0
		0.0,
		0.0,
		4.0,  // 1
		0.0,  // 1
		0.0,
		0.0
	]);
	wbuf = new Complex128Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0  // 1
	]);
	x = vector( xbuf, 2, 2, 0 );
	w = vector( wbuf, 2, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zwxsa( [ x, w, alpha ] );
	t.strictEqual( actual, w, 'returns expected value' );

	expected = new Complex128Array([
		-7.0, // 0
		1.0,  // 0
		-1.0, // 1
		0.0   // 1
	]);
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Complex128Array([
		-2.0, // 4
		1.0,  // 4
		3.0,  // 3
		-5.0, // 3
		4.0,  // 2
		0.0,  // 2
		-1.0, // 1
		-3.0, // 1
		2.0,  // 0
		1.0   // 0
	]);
	wbuf = new Complex128Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0, // 3
		0.0, // 3
		0.0, // 4
		0.0  // 4
	]);
	x = vector( xbuf, 5, -1, 4 );
	w = vector( wbuf, 5, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zwxsa( [ x, w, alpha ] );
	t.strictEqual( actual, w, 'returns expected value' );

	expected = new Complex128Array([
		-3.0,  // 0
		1.0,   // 0
		-6.0,  // 1
		-3.0,  // 1
		-1.0,  // 2
		0.0,   // 2
		-2.0,  // 3
		-5.0,  // 3
		-7.0,  // 4
		1.0    // 4
	]);
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an output ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Complex128Array([
		-2.0, // 0
		1.0,  // 0
		3.0,  // 1
		-5.0  // 1
	]);
	wbuf = new Complex128Array([
		0.0, // 0
		0.0, // 0
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0,
		0.0
	]);
	x = vector( xbuf, 2, 1, 0 );
	w = vector( wbuf, 2, 2, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zwxsa( [ x, w, alpha ] );
	t.strictEqual( actual, w, 'returns expected value' );

	expected = new Complex128Array([
		-7.0, // 0
		1.0,  // 0
		0.0,
		0.0,
		-2.0, // 1
		-5.0, // 1
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an output ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Complex128Array([
		-2.0, // 0
		1.0,  // 0
		3.0,  // 1
		-5.0, // 1
		4.0,  // 2
		0.0   // 2
	]);
	wbuf = new Complex128Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0, // 0
		0.0  // 0
	]);
	x = vector( xbuf, 3, 1, 0 );
	w = vector( wbuf, 3, -1, 2 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zwxsa( [ x, w, alpha ] );
	t.strictEqual( actual, w, 'returns expected value' );

	expected = new Complex128Array([
		-1.0, // 2
		0.0,  // 2
		-2.0, // 1
		-5.0, // 1
		-7.0, // 0
		1.0   // 0
	]);
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		3.0,  // 0
		-5.0, // 0
		4.0,  // 1
		0.0,  // 1
		-1.0, // 2
		-3.0  // 2
	]);
	wbuf = new Complex128Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);
	x = vector( xbuf, 3, 1, 2 );
	w = vector( wbuf, 3, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zwxsa( [ x, w, alpha ] );
	t.strictEqual( actual, w, 'returns expected value' );

	expected = new Complex128Array([
		-2.0,  // 0
		-5.0,  // 0
		-1.0,  // 1
		0.0,   // 1
		-6.0,  // 2
		-3.0   // 2
	]);
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an output ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Complex128Array([
		-2.0, // 0
		1.0,  // 0
		3.0,  // 1
		-5.0, // 1
		4.0,  // 2
		0.0   // 2
	]);
	wbuf = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);
	x = vector( xbuf, 3, 1, 0 );
	w = vector( wbuf, 3, 1, 2 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zwxsa( [ x, w, alpha ] );
	t.strictEqual( actual, w, 'returns expected value' );

	expected = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		-7.0, // 0
		1.0,  // 0
		-2.0, // 1
		-5.0, // 1
		-1.0, // 2
		0.0   // 2
	]);
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the output ndarray unchanged when the input ndarray is empty', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var wbuf;
	var x;
	var w;

	xbuf = new Complex128Array( [] );
	wbuf = new Complex128Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	w = vector( wbuf, 0, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});

	actual = zwxsa( [ x, w, alpha ] );
	t.strictEqual( actual, w, 'returns expected value' );

	expected = new Complex128Array( [] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});
