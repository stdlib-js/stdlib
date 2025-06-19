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
var dscal = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dscal, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 5', function test( t ) {
	t.strictEqual( dscal.ndarray.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method multiplies `x` by a constant `alpha`', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = 2.0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	expected = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );

	dscal.ndarray( x.length, alpha, x, 1, 0 );

	t.deepEqual( x, expected, 'returns expected value' );

	// Short datasets:
	x = new Float64Array( [ 1.0, 2.0 ] );

	expected = new Float64Array( [ 2.0, 4.0 ] );

	dscal.ndarray( x.length, alpha, x, 1, 0 );

	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	N = 3;

	dscal.ndarray( N, 2.0, x, 2, 0 );

	expected = new Float64Array( [ 2.0, 2.0, 6.0, 4.0, 10.0 ] );

	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var N;

	x = new Float64Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]);
	N = 3;

	dscal.ndarray( N, 3.0, x, 1, 2 );

	expected = new Float64Array( [ 1.0, 2.0, 9.0, 12.0, 15.0 ] );

	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	out = dscal.ndarray( x.length, 3.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	dscal.ndarray( -1, 3.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	dscal.ndarray( 0, 3.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports specifying a negative stride', function test( t ) {
	var expected;
	var x;
	var N;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	N = 3;

	dscal.ndarray( N, 3.0, x, -2, x.length-1 );

	expected = new Float64Array( [ 3.0, 2.0, 9.0, 4.0, 15.0 ] );

	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var N;

	x = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	N = 3;

	dscal.ndarray( N, 3.0, x, -2, 5 );

	expected = new Float64Array( [ 1.0, 6.0, 3.0, 12.0, 5.0, 18.0 ] );

	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
