/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var saxpy = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof saxpy, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `main` method has an arity of 6', function test( t ) {
	t.strictEqual( saxpy.main.length, 6, 'returns expected value' );
	t.end();
});

tape( 'the `main` method multiplies `x` by a constant and adds the result to `y`', function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;

	alpha = 2.0;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	expected = new Float32Array( [ 3.0, 5.0, 7.0, 9.0, 11.0 ] );

	saxpy.main( x.length, alpha, x, 1, y, 1 );

	t.deepEqual( y, expected, 'returns expected value' );

	// Short datasets:
	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 1.0, 1.0 ] );

	expected = new Float32Array( [ 3.0, 5.0 ] );

	saxpy.main( x.length, alpha, x, 1, y, 1 );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the `main` method efficiently handles the case where `alpha` is `0`', function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	alpha = 0.0;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	saxpy.main( x.length, alpha, x, 1, y, 1 );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		1.0, // 0
		1.0, // 1
		1.0, // 2
		1.0,
		1.0
	]);
	N = 3;

	saxpy.main( N, 2.0, x, 2, y, 1 );

	expected = new Float32Array( [ 3.0, 7.0, 11.0, 1.0, 1.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		1.0, // 0
		1.0,
		1.0, // 1
		1.0,
		1.0  // 2
	]);
	N = 3;

	saxpy.main( N, 2.0, x, 1, y, 2 );

	expected = new Float32Array( [ 3.0, 1.0, 5.0, 1.0, 7.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	out = saxpy.main( x.length, 3.0, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method returns the output array unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	expected = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	saxpy.main( -1, 3.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	saxpy.main( 0, 3.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);
	N = 3;

	saxpy.main( N, 3.0, x, -2, y, -1 );

	expected = new Float32Array( [ 9.0, 16.0, 23.0, 9.0, 10.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float32Array([
		7.0,  // 2
		8.0,  // 1
		9.0,  // 0
		10.0,
		11.0,
		12.0
	]);
	N = 3;

	saxpy.main( N, 3.0, x, 2, y, -1 );

	expected = new Float32Array( [ 22.0, 17.0, 12.0, 10.0, 11.0, 12.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;

	// Initial arrays...
	x0 = new Float32Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y0 = new Float32Array([
		7.0,
		8.0,
		9.0,
		10.0, // 0
		11.0, // 1
		12.0  // 2
	]);

	// Create offset views...
	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	saxpy.main( 3, 3.0, x1, -2, y1, 1 );
	expected = new Float32Array([
		7.0,
		8.0,
		9.0,
		28.0,
		23.0,
		18.0
	]);

	t.deepEqual( y0, expected, 'returns expected value' );
	t.end();
});
