/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var Complex64Array = require( '@stdlib/array/complex64' );
var scasum = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scasum, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `main` method has an arity of 3', function test( t ) {
	t.strictEqual( scasum.main.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the `main` method computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector', function test( t ) {
	var x;
	var y;

	x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	y = scasum.main( x.length, x, 1 );

	t.strictEqual( y, 19.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports an `x` stride', function test( t ) {
	var x;
	var y;
	var N;

	x = new Complex64Array([
		-2.0, // 0
		1.0,  // 0
		3.0,
		-5.0,
		4.0,  // 1
		0.0,  // 1
		-1.0,
		-3.0
	]);
	N = 2;

	y = scasum.main( N, x, 2 );

	t.strictEqual( y, 7.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method returns `0.0`', function test( t ) {
	var x;
	var y;

	x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

	y = scasum.main( -1, x, 1 );
	t.deepEqual( y, 0.0, 'returns expected value' );

	y = scasum.main( 0, x, 1 );
	t.deepEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports negative strides', function test( t ) {
	var x;
	var y;
	var N;

	x = new Complex64Array([
		-2.0, // 1
		1.0,  // 1
		3.0,
		-5.0,
		4.0,  // 0
		0.0,  // 0
		-1.0,
		-3.0,
		7.0,
		8.0
	]);
	N = 2;

	y = scasum.main( N, x, -2 );

	t.strictEqual( y, 7.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports complex access patterns', function test( t ) {
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 0
		2.0, // 0
		3.0,
		4.0,
		5.0, // 1
		6.0  // 1
	]);
	N = 2;

	y = scasum.main( N, x, 2 );

	t.strictEqual( y, 14.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports view offsets', function test( t ) {
	var x0;
	var x1;
	var y;
	var N;

	// Initial array...
	x0 = new Complex64Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		5.0,
		-6.0,
		7.0,  // 1
		-8.0  // 1
	]);

	// Create an offset view...
	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	N = 2;
	y = scasum.main( N, x1, 2 );

	t.strictEqual( y, 22.0, 'returns expected value' );
	t.end();
});
