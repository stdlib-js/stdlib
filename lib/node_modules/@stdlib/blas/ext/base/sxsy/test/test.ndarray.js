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
var sxsy = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sxsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( sxsy.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function subtracts elements of `y` from the corresponding elements of `x` and assigns the results to `y`', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	expected = new Float32Array([
		-1.0,  // 1.0 - 2.0
		-2.0,  // 2.0 - 4.0
		-3.0,  // 3.0 - 6.0
		-4.0,  // 4.0 - 8.0
		-5.0   // 5.0 - 10.0
	]);

	sxsy( x.length, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 5.0, 6.0 ] );
	expected = new Float32Array( [ -4.0, -4.0 ] );

	sxsy( x.length, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	out = sxsy( x.length, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	expected = new Float32Array( [ 4.0, 5.0, 6.0 ] );

	sxsy( 0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	sxsy( -4, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array( [ 2.0, 3.0, 4.0 ] );
	expected = new Float32Array([
		-1.0, // 1.0 - 2.0
		0.0,  // 3.0 - 3.0
		1.0   // 5.0 - 4.0
	]);

	sxsy( 3, x, 2, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array([
		2.0, // 0
		30.0,
		3.0, // 1
		10.0,
		4.0  // 2
	]);
	expected = new Float32Array([
		-1.0,  // 1.0 - 2.0
		30.0,
		-1.0,  // 2.0 - 3.0
		10.0,
		-1.0   // 3.0 - 4.0
	]);

	sxsy( 3, x, 1, 0, y, 2, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		4.0, // 2
		3.0, // 1
		2.0  // 0
	]);
	expected = new Float32Array([
		-3.0, // 1.0 - 4.0
		0.0,  // 3.0 - 3.0
		3.0   // 5.0 - 2.0
	]);

	sxsy( 3, x, -2, x.length-1, y, -1, y.length-1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		0.0,
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array( [ 2.0, 3.0, 4.0 ] );
	expected = new Float32Array([
		-1.0, // 1.0 - 2.0
		0.0,  // 3.0 - 3.0
		1.0   // 5.0 - 4.0
	]);

	sxsy( 3, x, 2, 1, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array([
		0.0,
		2.0, // 0
		3.0, // 1
		4.0  // 2
	]);
	expected = new Float32Array([
		0.0,
		-1.0,  // 1.0 - 2.0
		-1.0,  // 2.0 - 3.0
		-1.0   // 3.0 - 4.0
	]);

	sxsy( 3, x, 1, 0, y, 1, 1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		0.0,
		1.0, // 0
		0.0,
		2.0, // 1
		0.0,
		3.0  // 2
	]);
	y = new Float32Array([
		0.0,
		0.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		0.0
	]);
	expected = new Float32Array([
		0.0,
		0.0,
		-1.0,  // 1.0 - 2.0
		-1.0,  // 2.0 - 3.0
		-1.0,  // 3.0 - 4.0
		0.0
	]);

	sxsy( 3, x, 2, 1, y, 1, 2 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently subtracts elements of `y` from the corresponding elements of `x` and assigns the results to `y`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Float32Array( 100 );
	y = new Float32Array( 100 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = x[ i ] - y[ i ];
	}
	sxsy( x.length, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( 240 );
	y = new Float32Array( 240 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = x[ i ] - y[ i ];
	}
	sxsy( x.length, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});
