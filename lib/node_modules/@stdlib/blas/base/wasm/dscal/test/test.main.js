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

tape( 'the `main` method has an arity of 4', function test( t ) {
	t.strictEqual( dscal.main.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the `main` method multiplies `x` by a constant `alpha`', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = 2.0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	expected = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );

	dscal.main( x.length, alpha, x, 1 );

	t.deepEqual( x, expected, 'returns expected value' );

	// Short datasets:
	x = new Float64Array( [ 1.0, 2.0 ] );

	expected = new Float64Array( [ 2.0, 4.0 ] );

	dscal.main( x.length, alpha, x, 1 );

	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports an `x` stride', function test( t ) {
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

	dscal.main( N, 2.0, x, 2 );

	expected = new Float64Array( [ 2.0, 2.0, 6.0, 4.0, 10.0 ] );

	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method returns a reference to the output array', function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	out = dscal.main( x.length, 3.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	dscal.main( -1, 3.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	dscal.main( 0, 3.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports specifying a negative stride', function test( t ) {
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

	dscal.main( N, 3.0, x, -2 );

	expected = new Float64Array( [ 3.0, 2.0, 9.0, 4.0, 15.0 ] );

	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	N = 3;

	dscal.main( N, 3.0, x, 2 );

	expected = new Float64Array( [ 3.0, 2.0, 9.0, 4.0, 15.0, 6.0 ] );

	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	// Initial array:
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);

	// Create offset view:
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	dscal.main( 3, 3.0, x1, -2 );
	expected = new Float64Array( [ 1.0, 6.0, 3.0, 12.0, 5.0, 18.0 ] );

	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
