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
var Float64Array = require( '@stdlib/array/float64' );
var dcircshift = require( './../lib/dcircshift.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcircshift, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( dcircshift.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = dcircshift( x.length, 2, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float64Array( [ 3.0, -4.0, 1.0 ] );

	dcircshift( 0, 1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	dcircshift( -4, 1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a circular shift (right shift, positive k)', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 4.0, 5.0, 1.0, 2.0, 3.0 ] );

	dcircshift( x.length, 2, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 5.0, 1.0, 2.0, 3.0, 4.0 ] );

	dcircshift( x.length, 1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a circular shift (left shift, negative k)', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 3.0, 4.0, 5.0, 1.0, 2.0 ] );

	dcircshift( x.length, -2, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 2.0, 3.0, 4.0, 5.0, 1.0 ] );

	dcircshift( x.length, -1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an arbitrary number of positions to shift', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dcircshift( x.length, 0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	dcircshift( x.length, 4, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	dcircshift( x.length, -4, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	dcircshift( x.length, 8, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 4.0, 5.0, 1.0, 2.0, 3.0 ] );

	dcircshift( x.length, 7, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 3.0, 4.0, 5.0, 1.0, 2.0 ] );

	dcircshift( x.length, -7, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0,  // 0
		0.0,
		2.0,  // 1
		0.0,
		3.0,  // 2
		0.0,
		4.0   // 3
	]);
	expected = new Float64Array([
		4.0,  // 0
		0.0,
		1.0,  // 1
		0.0,
		2.0,  // 2
		0.0,
		3.0   // 3
	]);

	dcircshift( 4, 1, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0,  // 3
		0.0,
		2.0,  // 2
		0.0,
		3.0,  // 1
		0.0,
		4.0   // 0
	]);
	expected = new Float64Array([
		2.0,  // 3
		0.0,
		3.0,  // 2
		0.0,
		4.0,  // 1
		0.0,
		1.0   // 0
	]);

	dcircshift( 4, 1, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		0.0,
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0, // 3
		5.0  // 4
	]);
	expected = new Float64Array([
		0.0,
		4.0, // 0
		5.0, // 1
		1.0, // 2
		2.0, // 3
		3.0  // 4
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	dcircshift( 5, 2, x1, 1 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
