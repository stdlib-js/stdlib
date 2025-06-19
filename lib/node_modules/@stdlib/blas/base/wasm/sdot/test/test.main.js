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
var sdot = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sdot, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `main` method has an arity of 5', function test( t ) {
	t.strictEqual( sdot.main.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the `main` method computes the dot product of `x` and `y`', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	dot = sdot.main( x.length, x, 1, y, 1 );
	t.strictEqual( dot, -17.0, 'returns expected value' );

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float32Array( [ 1.0, -2.0, 3.0 ] );

	dot = sdot.main( x.length, x, 1, y, 1 );
	t.strictEqual( dot, 14.0, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports an `x` stride', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float32Array([
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	]);

	dot = sdot.main( 3, x, 2, y, 1 );
	t.strictEqual( dot, -12.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports a `y` stride', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	]);
	y = new Float32Array([
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	]);

	dot = sdot.main( 3, x, 1, y, 2 );
	t.strictEqual( dot, 45.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method returns `0.0`', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float32Array( [ 1.0, -2.0, 3.0 ] );

	dot = sdot.main( 0, x, 1, y, 1 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	dot = sdot.main( -4, x, 1, y, 1 );
	t.strictEqual( dot, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports negative strides', function test( t ) {
	var dot;
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
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);

	dot = sdot.main( 3, x, -2, y, -1 );
	t.strictEqual( dot, 67.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports complex access patterns', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);

	dot = sdot.main( 3, x, 2, y, -1 );
	t.strictEqual( dot, 59.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports view offsets', function test( t ) {
	var dot;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y0 = new Float32Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 );

	dot = sdot.main( 3, x1, 2, y1, 1 );
	t.strictEqual( dot, 124.0, 'returns expected value' );
	t.end();
});
