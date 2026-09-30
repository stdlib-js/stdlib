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

/* eslint-disable max-len, stdlib/empty-line-before-comment */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var mul = require( '@stdlib/complex/float32/base/mul' );
var muladd = require( '@stdlib/complex/float32/base/mul-add' );
var caxpby = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof caxpby, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( caxpby.length, 9, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies `x` by a constant and adds the result to `y` multiplied by a constant', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, -1.0 );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
	y = new Complex64Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
	expected = new Complex64Array([
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

	caxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 0.0, 2.0, 1.0 ] );
	y = new Complex64Array( [ 3.0, -1.0, 4.0, 2.0 ] );
	expected = new Complex64Array([
		// (2.0+1.0i)*(1.0+0.0i) + (1.0-1.0i)*(3.0-1.0i)
		4.0,
		-3.0,
		// (2.0+1.0i)*(2.0+1.0i) + (1.0-1.0i)*(4.0+2.0i)
		9.0,
		2.0
	]);

	caxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var alpha;
	var beta;
	var out;
	var x;
	var y;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, -1.0 );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
	y = new Complex64Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
	out = caxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, -1.0 );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Complex64Array( [ 4.0, 5.0, 6.0, 7.0 ] );
	expected = new Complex64Array( [ 4.0, 5.0, 6.0, 7.0 ] );

	caxpby( 0, alpha, x, 1, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	caxpby( -4, alpha, x, 1, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'when `alpha` equals `0`, the function scales `y` by `beta`', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 0.0, 0.0 );
	beta = new Complex64( 1.0, -1.0 );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	y = new Complex64Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0, 5.0, -2.0, 1.0, 4.0 ] );
	expected = new Complex64Array( [ 3.0, -1.0, 2.0, 4.0, 4.0, -4.0, 3.0, -7.0, 5.0, 3.0 ] ); // (1.0-1.0i)*y

	caxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'when `beta` equals `1`, the function multiplies `x` by a constant and adds the result to `y`', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, 0.0 );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	y = new Complex64Array( [ 6.0, 0.0, 7.0, 0.0, 8.0, 0.0, 9.0, 0.0, 10.0, 0.0 ] );
	expected = new Complex64Array( [ 6.0, 5.0, 9.0, 11.0, 12.0, 17.0, 15.0, 23.0, 18.0, 29.0 ] ); // (2.0+1.0i)*x + y

	caxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, -1.0 );

	x = new Complex64Array([
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
	y = new Complex64Array([
		2.0,
		1.0,
		-1.0,
		3.0,
		4.0,
		0.0
	]);
	expected = new Complex64Array([
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

	caxpby( 3, alpha, x, 2, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, -1.0 );

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		-1.0,
		0.0,
		1.0
	]);
	y = new Complex64Array([
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
	expected = new Complex64Array([
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

	caxpby( 3, alpha, x, 1, 0, beta, y, 2, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, -1.0 );

	x = new Complex64Array([
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
	y = new Complex64Array([
		4.0,  // 2
		0.0,  // 2
		3.0,  // 1
		-1.0, // 1
		2.0,  // 0
		1.0   // 0
	]);
	expected = new Complex64Array([
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

	caxpby( 3, alpha, x, -2, x.length-1, beta, y, -1, y.length-1 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 5.0, 0.0 );
	beta = new Complex64( 2.0, 0.0 );

	x = new Complex64Array([
		0.0,
		0.0,
		1.0,  // 0
		0.0,  // 0
		0.0,
		0.0,
		3.0,  // 1
		0.0,  // 1
		0.0,
		0.0,
		5.0,  // 2
		0.0   // 2
	]);
	y = new Complex64Array( [ 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );
	expected = new Complex64Array([
		// (5.0+0.0i)*(1.0+0.0i) + (2.0+0.0i)*(2.0+0.0i)
		9.0,
		0.0,
		// (5.0+0.0i)*(3.0+0.0i) + (2.0+0.0i)*(3.0+0.0i)
		21.0,
		0.0,
		// (5.0+0.0i)*(5.0+0.0i) + (2.0+0.0i)*(4.0+0.0i)
		33.0,
		0.0
	]);

	caxpby( 3, alpha, x, 2, 1, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 5.0, 0.0 );
	beta = new Complex64( 2.0, 0.0 );

	x = new Complex64Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );
	y = new Complex64Array([
		0.0,
		0.0,
		2.0,  // 0
		0.0,  // 0
		3.0,  // 1
		0.0,  // 1
		4.0,  // 2
		0.0   // 2
	]);
	expected = new Complex64Array([
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

	caxpby( 3, alpha, x, 1, 0, beta, y, 1, 1 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;

	alpha = new Complex64( 5.0, 0.0 );
	beta = new Complex64( 2.0, 0.0 );

	x = new Complex64Array([
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
		0.0,  // 2
		0.0,
		0.0
	]);
	y = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		2.0,  // 0
		0.0,  // 0
		3.0,  // 1
		0.0,  // 1
		4.0,  // 2
		0.0,  // 2
		0.0,
		0.0
	]);
	expected = new Complex64Array([
		0.0,
		0.0,
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
		0.0,
		0.0,
		0.0
	]);

	caxpby( 3, alpha, x, 2, 1, beta, y, 1, 2 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently multiplies `x` by a constant and adds the result to `y` multiplied by a constant', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;
	var z;
	var w;
	var i;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 3.0, -1.0 );

	x = new Complex64Array( 100 );
	y = new Complex64Array( 100 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex64( i, 0.0 );
		w = new Complex64( x.length - i, 0.0 );
		x.set( z, i );
		y.set( w, i );
		expected.set( muladd( alpha, z, mul( beta, w ) ), i );
	}
	caxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( 240 );
	y = new Complex64Array( 240 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex64( i, 0.0 );
		w = new Complex64( x.length - i, 0.0 );
		x.set( z, i );
		y.set( w, i );
		expected.set( muladd( alpha, z, mul( beta, w ) ), i );
	}
	caxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});
