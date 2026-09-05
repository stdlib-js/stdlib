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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var cadd = require( '@stdlib/complex/float64/base/add' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var zwxpy = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( zwxpy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zwxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', opts, function test( t ) {
	t.strictEqual( zwxpy.length, 10, 'has expected arity' );
	t.end();
});

tape( 'the function adds elements of `x` to the corresponding elements of `y` and assigns the results to elements in `w`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array([
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

	zwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Complex128Array( [ 5.0, 6.0, 7.0, 8.0 ] );
	w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array([
		// (1.0+2.0i) + (5.0+6.0i)
		6.0,
		8.0,
		// (3.0+4.0i) + (7.0+8.0i)
		10.0,
		12.0
	]);

	zwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	out = zwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Complex128Array( [ 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex128Array( [ 8.0, 9.0, 10.0, 11.0 ] );
	expected = new Complex128Array( [ 8.0, 9.0, 10.0, 11.0 ] );

	zwxpy( 0, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );

	zwxpy( -4, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array([
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
	y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array([
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

	zwxpy( 3, x, 2, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex128Array([
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
	w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array([
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

	zwxpy( 3, x, 1, 0, y, 2, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex128Array([
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
	expected = new Complex128Array([
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

	zwxpy( 3, x, 1, 0, y, 1, 0, w, 2, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array([
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
	y = new Complex128Array([
		4.0,  // 2
		5.0,  // 2
		3.0,  // 1
		4.0,  // 1
		2.0,  // 0
		3.0   // 0
	]);
	w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array([
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

	zwxpy( 3, x, -2, 4, y, -1, 2, w, -1, 2 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array([
		0.0,
		0.0,
		1.0, // 0
		2.0, // 0
		3.0, // 1
		4.0, // 1
		5.0, // 2
		6.0  // 2
	]);
	y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array([
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

	zwxpy( 3, x, 1, 1, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex128Array([
		0.0,
		0.0,
		2.0, // 0
		3.0, // 0
		4.0, // 1
		5.0, // 1
		6.0, // 2
		7.0  // 2
	]);
	w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array([
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

	zwxpy( 3, x, 1, 0, y, 1, 1, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	w = new Complex128Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);
	expected = new Complex128Array([
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

	zwxpy( 3, x, 1, 0, y, 1, 0, w, 1, 1 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if all strides are equal to `1`, the function efficiently adds elements of `x` to the corresponding elements of `y` and assigns the results to elements in `w`', opts, function test( t ) {
	var expected;
	var xv;
	var yv;
	var x;
	var y;
	var w;
	var i;

	x = new Complex128Array( 100 );
	y = new Complex128Array( 100 );
	w = new Complex128Array( 100 );
	expected = new Complex128Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		xv = new Complex128( i, 0.0 );
		yv = new Complex128( x.length - i, 0.0 );
		x.set( xv, i );
		y.set( yv, i );
		expected.set( cadd( xv, yv ), i );
	}
	zwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );

	x = new Complex128Array( 240 );
	y = new Complex128Array( 240 );
	w = new Complex128Array( 240 );
	expected = new Complex128Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		xv = new Complex128( i, 0.0 );
		yv = new Complex128( x.length - i, 0.0 );
		x.set( xv, i );
		y.set( yv, i );
		expected.set( cadd( xv, yv ), i );
	}
	zwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex128Array( w, expected ), true, 'returns expected value' );

	t.end();
});
