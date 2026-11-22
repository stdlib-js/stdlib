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
var Float32Array = require( '@stdlib/array/float32' );
var swapx = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof swapx, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( swapx.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function adds a scalar constant to each element in a strided array `x` and assigns the results to elements in a strided array `w`', function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float32Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	w = new Float32Array( x.length );
	expected = new Float32Array([
		9.0,  //  4.0 + 5.0
		7.0,  //  2.0 + 5.0
		2.0,  // -3.0 + 5.0
		10.0, //  5.0 + 5.0
		4.0,  // -1.0 + 5.0
		7.0,  //  2.0 + 5.0
		0.0,  // -5.0 + 5.0
		11.0  //  6.0 + 5.0
	]);

	swapx( x.length, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	w = new Float32Array( x.length );
	expected = new Float32Array( [ 6.0, 7.0 ] );

	swapx( x.length, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	w = new Float32Array( x.length );
	out = swapx( x.length, 3.0, x, 1, 0, w, 1, 0 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	w = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	expected = new Float32Array( [ 4.0, 5.0, 6.0 ] );

	swapx( 0, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	swapx( -4, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'if `alpha` equals `0`, the function assigns `x` to `w`', function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float32Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );
	w = new Float32Array( x.length );
	expected = new Float32Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] ); // w = x

	swapx( x.length, 0.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	w = new Float32Array( 3 );
	expected = new Float32Array([
		7.0,  //  2.0 + 5.0
		0.0,  // -5.0 + 5.0
		11.0  //  6.0 + 5.0
	]);

	swapx( 3, 5.0, x, 2, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	w = new Float32Array([
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	]);
	expected = new Float32Array([
		6.0, // 1.0 + 5.0
		30.0,
		7.0, // 2.0 + 5.0
		10.0,
		8.0  // 3.0 + 5.0
	]);

	swapx( 3, 5.0, x, 1, 0, w, 2, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float32Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	w = new Float32Array([
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	expected = new Float32Array([
		7.0,  //  2.0 + 5.0
		0.0,  // -5.0 + 5.0
		11.0  //  6.0 + 5.0
	]);

	swapx( 3, 5.0, x, -2, x.length-1, w, -1, w.length-1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0
	]);
	w = new Float32Array( 5 );
	expected = new Float32Array([
		7.0, // 2.0 + 5.0
		8.0, // 3.0 + 5.0
		9.0, // 4.0 + 5.0
		0.0,
		0.0
	]);

	swapx( 3, 5.0, x, 1, 1, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` offset', function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	w = new Float32Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	expected = new Float32Array([
		0.0,
		0.0,
		6.0, // 1.0 + 5.0
		7.0, // 2.0 + 5.0
		8.0  // 3.0 + 5.0
	]);

	swapx( 3, 5.0, x, 1, 0, w, 1, 2 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently adds a constant to each element of a strided array', function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;
	var i;

	alpha = 3.0;
	x = new Float32Array( 100 );
	w = new Float32Array( 100 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] + alpha;
	}
	swapx( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float32Array( 240 );
	w = new Float32Array( 240 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] + alpha;
	}
	swapx( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});
