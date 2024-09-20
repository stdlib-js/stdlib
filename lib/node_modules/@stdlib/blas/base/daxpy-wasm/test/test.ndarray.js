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
var Float64Array = require( '@stdlib/array/float64' );
var daxpy = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof daxpy, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 8', function test( t ) {
	t.strictEqual( daxpy.ndarray.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method multiplies `x` by a constant and adds the result to `y`', function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;

	alpha = 2.0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	expected = new Float64Array( [ 3.0, 5.0, 7.0, 9.0, 11.0 ] );

	daxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, expected, 'returns expected value' );

	// Short datasets:
	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 1.0, 1.0 ] );

	expected = new Float64Array( [ 3.0, 5.0 ] );

	daxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method efficiently handles the case where `alpha` is `0`', function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	alpha = 0.0;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	daxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		1.0, // 0
		1.0, // 1
		1.0, // 2
		1.0,
		1.0
	]);
	N = 3;

	daxpy.ndarray( N, 2.0, x, 2, 0, y, 1, 0 );

	expected = new Float64Array( [ 3.0, 7.0, 11.0, 1.0, 1.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]);
	y = new Float64Array([
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	]);
	N = 3;

	daxpy.ndarray( N, 3.0, x, 1, 2, y, 1, 0 );

	expected = new Float64Array( [ 15.0, 19.0, 23.0, 9.0, 10.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		1.0, // 0
		1.0,
		1.0, // 1
		1.0,
		1.0  // 2
	]);
	N = 3;

	daxpy.ndarray( N, 2.0, x, 1, 0, y, 2, 0 );

	expected = new Float64Array( [ 3.0, 1.0, 5.0, 1.0, 7.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0,
		7.0,
		8.0, // 0
		9.0, // 1
		10.0 // 2
	]);
	N = 3;

	daxpy.ndarray( N, 3.0, x, 1, 0, y, 1, 2 );

	expected = new Float64Array( [ 6.0, 7.0, 11.0, 15.0, 19.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	out = daxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method returns the output array unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	daxpy.ndarray( -1, 3.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	daxpy.ndarray( 0, 3.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		6.0,
		7.0, // 2
		8.0, // 1
		9.0, // 0
		10.0
	]);
	N = 3;

	daxpy.ndarray( N, 3.0, x, -2, x.length-1, y, -1, y.length-2 );

	expected = new Float64Array( [ 6.0, 10.0, 17.0, 24.0, 10.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y = new Float64Array([
		7.0,
		8.0,
		9.0,
		10.0, // 2
		11.0, // 1
		12.0  // 0
	]);
	N = 3;

	daxpy.ndarray( N, 3.0, x, 2, 1, y, -1, y.length-1 );

	expected = new Float64Array( [ 7.0, 8.0, 9.0, 28.0, 23.0, 18.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});
