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
var scircshift = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scircshift, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( scircshift.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = scircshift( x.length, 2, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float32Array( [ 3.0, -4.0, 1.0 ] );

	scircshift( 0, 1, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	scircshift( -4, 1, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a circular shift (right shift, positive k)', function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float32Array( [ 4.0, 5.0, 1.0, 2.0, 3.0 ] );

	scircshift( x.length, 2, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float32Array( [ 5.0, 1.0, 2.0, 3.0, 4.0 ] );

	scircshift( x.length, 1, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a circular shift (left shift, negative k)', function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float32Array( [ 3.0, 4.0, 5.0, 1.0, 2.0 ] );

	scircshift( x.length, -2, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float32Array( [ 2.0, 3.0, 4.0, 5.0, 1.0 ] );

	scircshift( x.length, -1, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an arbitrary number of positions to shift', function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	scircshift( x.length, 0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	scircshift( x.length, 4, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	scircshift( x.length, -4, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	scircshift( x.length, 8, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float32Array( [ 4.0, 5.0, 1.0, 2.0, 3.0 ] );

	scircshift( x.length, 7, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float32Array( [ 3.0, 4.0, 5.0, 1.0, 2.0 ] );

	scircshift( x.length, -7, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		1.0,  // 0
		0.0,
		2.0,  // 1
		0.0,
		3.0,  // 2
		0.0,
		4.0   // 3
	]);
	expected = new Float32Array([
		4.0,  // 0
		0.0,
		1.0,  // 1
		0.0,
		2.0,  // 2
		0.0,
		3.0   // 3
	]);

	scircshift( 4, 1, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		1.0,  // 3
		0.0,
		2.0,  // 2
		0.0,
		3.0,  // 1
		0.0,
		4.0   // 0
	]);
	expected = new Float32Array([
		2.0,  // 3
		0.0,
		3.0,  // 2
		0.0,
		4.0,  // 1
		0.0,
		1.0   // 0
	]);

	scircshift( 4, 1, x, -2, x.length - 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		0.0,
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0, // 3
		5.0  // 4
	]);
	expected = new Float32Array([
		0.0,
		4.0, // 0
		5.0, // 1
		1.0, // 2
		2.0, // 3
		3.0  // 4
	]);

	scircshift( 5, 2, x, 1, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset with a stride', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		0.0,
		1.0, // 0
		0.0,
		2.0, // 1
		0.0,
		3.0, // 2
		0.0,
		4.0  // 3
	]);
	expected = new Float32Array([
		0.0,
		4.0, // 0
		0.0,
		1.0, // 1
		0.0,
		2.0, // 2
		0.0,
		3.0  // 3
	]);

	scircshift( 4, 1, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
