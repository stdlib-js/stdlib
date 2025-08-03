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
var dcopy = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcopy, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 7', function test( t ) {
	t.strictEqual( dcopy.ndarray.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method copies values from `x` into `y`', function test( t ) {
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	dcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, x, 'returns expected value' );

	// Short datasets:
	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 1.0, 1.0 ] );

	dcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, x, 'returns expected value' );

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

	dcopy.ndarray( N, x, 2, 0, y, 1, 0 );

	expected = new Float64Array( [ 1.0, 3.0, 5.0, 1.0, 1.0 ] );

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

	dcopy.ndarray( N, x, 1, 2, y, 1, 0 );

	expected = new Float64Array( [ 3.0, 4.0, 5.0, 9.0, 10.0 ] );

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

	dcopy.ndarray( N, x, 1, 0, y, 2, 0 );

	expected = new Float64Array( [ 1.0, 1.0, 2.0, 1.0, 3.0 ] );

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

	dcopy.ndarray( N, x, 1, 0, y, 1, 2 );

	expected = new Float64Array( [ 6.0, 7.0, 1.0, 2.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	out = dcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );

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

	dcopy.ndarray( -1, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	dcopy.ndarray( 0, x, 1, 0, y, 1, 0 );
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

	dcopy.ndarray( N, x, -2, x.length-1, y, -1, y.length-2 );

	expected = new Float64Array( [ 6.0, 1.0, 3.0, 5.0, 10.0 ] );

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

	dcopy.ndarray( N, x, 2, 1, y, -1, y.length-1 );

	expected = new Float64Array( [ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});
