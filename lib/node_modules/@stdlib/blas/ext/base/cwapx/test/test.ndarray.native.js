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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var add = require( '@stdlib/complex/float32/base/add' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cwapx = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( cwapx instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cwapx, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( cwapx.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function adds a scalar constant to each element in a strided array `x` and assigns the results to elements in a strided array `w`', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	w = new Complex64Array( x.length );
	expected = new Complex64Array([
		// (4.0+2.0i) + (5.0+3.0i)
		9.0,
		5.0,
		// (-3.0+5.0i) + (5.0+3.0i)
		2.0,
		8.0,
		// (-1.0+2.0i) + (5.0+3.0i)
		4.0,
		5.0,
		// (-5.0+6.0i) + (5.0+3.0i)
		0.0,
		9.0
	]);

	cwapx( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Complex64Array( x.length );
	expected = new Complex64Array([
		// (1.0+2.0i) + (5.0+3.0i)
		6.0,
		5.0,
		// (3.0+4.0i) + (5.0+3.0i)
		8.0,
		7.0
	]);

	cwapx( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var alpha;
	var out;
	var x;
	var w;

	alpha = new Complex64( 3.0, 2.0 );
	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] ); // eslint-disable-line max-len
	w = new Complex64Array( x.length );
	out = cwapx( x.length, alpha, x, 1, 0, w, 1, 0 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 5.0, 3.0 );
	x = new Complex64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );
	w = new Complex64Array( [ 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	expected = new Complex64Array( [ 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );

	cwapx( 0, alpha, x, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	cwapx( -4, alpha, x, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if `alpha` equals `0`, the function assigns `x` to `w`', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 0.0, 0.0 );
	x = new Complex64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );
	w = new Complex64Array( x.length );
	expected = new Complex64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] ); // w = x

	cwapx( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		3.0,
		4.0,
		5.0,  // 1
		6.0,  // 1
		7.0,
		8.0,
		9.0,  // 2
		10.0  // 2
	]);
	w = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	expected = new Complex64Array([
		// (1.0+2.0i) + (5.0+3.0i)
		6.0,
		5.0,
		// (5.0+6.0i) + (5.0+3.0i)
		10.0,
		9.0,
		// (9.0+10.0i) + (5.0+3.0i)
		14.0,
		13.0
	]);

	cwapx( 3, alpha, x, 2, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	w = new Complex64Array([
		0.0,  // 0
		0.0,  // 0
		0.0,
		0.0,
		0.0,  // 1
		0.0,  // 1
		0.0,
		0.0,
		0.0,  // 2
		0.0   // 2
	]);
	expected = new Complex64Array([
		// (1.0+2.0i) + (5.0+3.0i)
		6.0,
		5.0,
		0.0,
		0.0,
		// (3.0+4.0i) + (5.0+3.0i)
		8.0,
		7.0,
		0.0,
		0.0,
		// (5.0+6.0i) + (5.0+3.0i)
		10.0,
		9.0
	]);

	cwapx( 3, alpha, x, 1, 0, w, 2, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array([
		2.0,  // 2
		3.0,  // 2
		4.0,
		5.0,
		-5.0, // 1
		-6.0, // 1
		7.0,
		8.0,
		6.0,  // 0
		9.0   // 0
	]);
	w = new Complex64Array([
		0.0,  // 2
		0.0,  // 2
		0.0,  // 1
		0.0,  // 1
		0.0,  // 0
		0.0   // 0
	]);
	expected = new Complex64Array([
		// (2.0+3.0i) + (5.0+3.0i)
		7.0,
		6.0,
		// (-5.0-6.0i) + (5.0+3.0i)
		0.0,
		-3.0,
		// (6.0+9.0i) + (5.0+3.0i)
		11.0,
		12.0
	]);

	cwapx( 3, alpha, x, -2, x.length-1, w, -1, w.length-1 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array([
		0.0,
		0.0,
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
	w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (5.0+3.0i)
		6.0,
		5.0,
		// (3.0+4.0i) + (5.0+3.0i)
		8.0,
		7.0,
		// (5.0+6.0i) + (5.0+3.0i)
		10.0,
		9.0
	]);

	cwapx( 3, alpha, x, 2, 1, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` offset', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Complex64Array([
		0.0,
		0.0,
		0.0,  // 0
		0.0,  // 0
		0.0,  // 1
		0.0,  // 1
		0.0,  // 2
		0.0   // 2
	]);
	expected = new Complex64Array([
		0.0,
		0.0,
		// (1.0+2.0i) + (5.0+3.0i)
		6.0,
		5.0,
		// (3.0+4.0i) + (5.0+3.0i)
		8.0,
		7.0,
		// (5.0+6.0i) + (5.0+3.0i)
		10.0,
		9.0
	]);

	cwapx( 3, alpha, x, 1, 0, w, 1, 1 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array([
		0.0,
		0.0,
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		5.0,  // 2
		6.0,  // 2
		0.0,
		0.0
	]);
	w = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,  // 0
		0.0,  // 0
		0.0,  // 1
		0.0,  // 1
		0.0,  // 2
		0.0,  // 2
		0.0,
		0.0
	]);
	expected = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		// (1.0+2.0i) + (5.0+3.0i)
		6.0,
		5.0,
		// (3.0+4.0i) + (5.0+3.0i)
		8.0,
		7.0,
		// (5.0+6.0i) + (5.0+3.0i)
		10.0,
		9.0,
		0.0,
		0.0
	]);

	cwapx( 3, alpha, x, 2, 1, w, 1, 2 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently adds a constant to each element of a strided array', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;
	var z;
	var i;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array( 100 );
	w = new Complex64Array( 100 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex64( i, i + 1 );
		x.set( z, i );
		expected.set( add( z, alpha ), i );
	}
	cwapx( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	x = new Complex64Array( 240 );
	w = new Complex64Array( 240 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex64( i, i + 1 );
		x.set( z, i );
		expected.set( add( z, alpha ), i );
	}
	cwapx( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.strictEqual( isSameComplex64Array( w, expected ), true, 'returns expected value' );

	t.end();
});
