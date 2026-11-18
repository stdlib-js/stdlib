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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var caddf = require( '@stdlib/complex/float32/base/add' );
var cwxpy = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cwxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( cwxpy.length, 10, 'has expected arity' );
	t.end();
});

tape( 'the function adds elements of `x` to the corresponding elements of `y` and assigns the results to elements in `w`', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (3.0+4.0i) + (4.0+5.0i)
		7.0,
		9.0,
		// (5.0+6.0i) + (6.0+7.0i)
		11.0,
		13.0
	]);

	cwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Complex64Array( [ 5.0, 6.0, 7.0, 8.0 ] );
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (5.0+6.0i)
		6.0,
		8.0,
		// (3.0+4.0i) + (7.0+8.0i)
		10.0,
		12.0
	]);

	cwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;
	var w;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	out = cwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Complex64Array( [ 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex64Array( [ 8.0, 9.0, 10.0, 11.0 ] );
	expected = new Complex64Array( [ 8.0, 9.0, 10.0, 11.0 ] );

	cwxpy( 0, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	cwxpy( -4, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		5.0,  // 1
		6.0,  // 1
		0.0,
		0.0,
		9.0,  // 2
		10.0  // 2
	]);
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (5.0+6.0i) + (4.0+5.0i)
		9.0,
		11.0,
		// (9.0+10.0i) + (6.0+7.0i)
		15.0,
		17.0
	]);

	cwxpy( 3, x, 2, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array([
		2.0,  // 0
		3.0,  // 0
		4.0,
		5.0,
		6.0,  // 1
		7.0,  // 1
		8.0,
		9.0,
		10.0, // 2
		11.0  // 2
	]);
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (3.0+4.0i) + (6.0+7.0i)
		9.0,
		11.0,
		// (5.0+6.0i) + (10.0+11.0i)
		15.0,
		17.0
	]);

	cwxpy( 3, x, 1, 0, y, 2, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex64Array([
		0.0, // 0
		0.0, // 0
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0  // 2
	]);
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		0.0,
		0.0,
		// (3.0+4.0i) + (4.0+5.0i)
		7.0,
		9.0,
		0.0,
		0.0,
		// (5.0+6.0i) + (6.0+7.0i)
		11.0,
		13.0
	]);

	cwxpy( 3, x, 1, 0, y, 1, 0, w, 2, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array([
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
	y = new Complex64Array([
		4.0,  // 2
		5.0,  // 2
		3.0,  // 1
		4.0,  // 1
		2.0,  // 0
		3.0   // 0
	]);
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (4.0+5.0i)
		5.0,
		7.0,
		// (3.0+4.0i) + (3.0+4.0i)
		6.0,
		8.0,
		// (5.0+6.0i) + (2.0+3.0i)
		7.0,
		9.0
	]);

	cwxpy( 3, x, -2, 4, y, -1, 2, w, -1, 2 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array([
		0.0,
		0.0,
		1.0, // 0
		2.0, // 0
		3.0, // 1
		4.0, // 1
		5.0, // 2
		6.0  // 2
	]);
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (3.0+4.0i) + (4.0+5.0i)
		7.0,
		9.0,
		// (5.0+6.0i) + (6.0+7.0i)
		11.0,
		13.0
	]);

	cwxpy( 3, x, 1, 1, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array([
		0.0,
		0.0,
		2.0, // 0
		3.0, // 0
		4.0, // 1
		5.0, // 1
		6.0, // 2
		7.0  // 2
	]);
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (3.0+4.0i) + (4.0+5.0i)
		7.0,
		9.0,
		// (5.0+6.0i) + (6.0+7.0i)
		11.0,
		13.0
	]);

	cwxpy( 3, x, 1, 0, y, 1, 1, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);
	expected = new Complex64Array([
		0.0,
		0.0,
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (3.0+4.0i) + (4.0+5.0i)
		7.0,
		9.0,
		// (5.0+6.0i) + (6.0+7.0i)
		11.0,
		13.0
	]);

	cwxpy( 3, x, 1, 0, y, 1, 0, w, 1, 1 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if all strides are equal to `1`, the function efficiently adds elements of `x` to the corresponding elements of `y` and assigns the results to elements in `w`', function test( t ) {
	var expected;
	var xv;
	var yv;
	var x;
	var y;
	var w;
	var i;

	x = new Complex64Array( 100 );
	y = new Complex64Array( 100 );
	w = new Complex64Array( 100 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		xv = new Complex64( i, 0.0 );
		yv = new Complex64( x.length - i, 0.0 );
		x.set( xv, i );
		y.set( yv, i );
		expected.set( caddf( xv, yv ), i );
	}
	cwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	x = new Complex64Array( 240 );
	y = new Complex64Array( 240 );
	w = new Complex64Array( 240 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		xv = new Complex64( i, 0.0 );
		yv = new Complex64( x.length - i, 0.0 );
		x.set( xv, i );
		y.set( yv, i );
		expected.set( caddf( xv, yv ), i );
	}
	cwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	t.end();
});
