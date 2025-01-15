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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var zlacpy = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zlacpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 11', function test( t ) {
	t.strictEqual( zlacpy.length, 11, 'returns expected value' );
	t.end();
});

tape( 'the function copies all of a matrix `A` to another matrix `B` (row-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0] );

	out = zlacpy( 'all', 2, 3, A, 3, 1, 1, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 22.0, 23.0, 20.0, 21.0, 18.0, 19.0, 16.0, 17.0, 14.0, 15.0, 12.0, 13.0 ] );

	out = zlacpy( 'all', 2, 3, A, -3, -1, 6, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );

	out = zlacpy( 'all', 3, 2, A, 2, 1, 1, B, 2, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function copies part of a matrix `A` to another matrix `B` (row-major, upper)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 0.0, 0.0, 20.0, 21.0, 22.0, 23.0 ] );

	out = zlacpy( 'upper', 2, 3, A, 3, 1, 1, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 22.0, 23.0, 20.0, 21.0, 18.0, 19.0, 0.0, 0.0, 14.0, 15.0, 12.0, 13.0 ] );

	out = zlacpy( 'upper', 2, 3, A, -3, -1, 6, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 0.0, 0.0, 18.0, 19.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = zlacpy( 'upper', 3, 2, A, 2, 1, 1, B, 2, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok(isSameComplex128Array(out, expected), 'returns expected value');

	t.end();
});

tape( 'the function copies part of a matrix `A` to another matrix `B` (row-major, lower)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 0.0, 0.0, 0.0, 0.0, 18.0, 19.0, 20.0, 21.0, 0.0, 0.0 ] );

	out = zlacpy( 'lower', 2, 3, A, 3, 1, 1, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok(isSameComplex128Array(out, expected), 'returns expected value');

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 18.0, 19.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 0.0, 0.0 ] );

	out = zlacpy( 'lower', 2, 3, A, -3, 1, 4, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 0.0, 0.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );

	out = zlacpy( 'lower', 3, 2, A, 2, 1, 1, B, 2, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	t.end();
});
tape( 'the function copies all of a matrix `A` to another matrix `B` (column-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );

	out = zlacpy( 'all', 2, 3, A, 1, 2, 1, B, 1, 2, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 22.0, 23.0, 20.0, 21.0, 18.0, 19.0, 16.0, 17.0, 14.0, 15.0, 12.0, 13.0 ] );

	out = zlacpy( 'all', 2, 3, A, 1, 2, 1, B, -1, -2, 8 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );

	out = zlacpy( 'all', 3, 2, A, 1, 3, 1, B, 1, 3, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function copies part of a matrix `A` to another matrix `B` (column-major, upper)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 0.0, 0.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );

	out = zlacpy( 'upper', 2, 3, A, 1, 2, 1, B, 1, 2, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 18.0, 19.0, 16.0, 17.0, 22.0, 23.0, 20.0, 21.0 ] );

	out = zlacpy( 'upper', 2, 3, A, 1, 2, 1, B, -1, 2, 4 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 0.0, 0.0, 0.0, 0.0, 18.0, 19.0, 20.0, 21.0, 0.0, 0.0 ] );

	out = zlacpy( 'upper', 3, 2, A, 1, 3, 1, B, 1, 3, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function copies part of a matrix `A` to another matrix `B` (column-major, lower)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 0.0, 0.0, 18.0, 19.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = zlacpy( 'lower', 2, 3, A, 1, 2, 1, B, 1, 2, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 18.0, 19.0, 12.0, 13.0, 14.0, 15.0 ] );

	out = zlacpy( 'lower', 2, 3, A, 1, 2, 1, B, 1, -2, 7 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	A = new Complex128Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0 ] );
	B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 0.0, 0.0, 20.0, 21.0, 22.0, 23.0 ] );

	out = zlacpy( 'lower', 3, 2, A, 1, 3, 1, B, 1, 3, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function copies all of a matrix `A` to another matrix `B` (column-major, lower, complex access patterns)', function test( t ) {
	var out;
	var A;
	var B;

	/* eslint-disable array-element-newline, no-multi-spaces */

	A = new Complex128Array([
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999,   1,   2, 999, 999,   3,   4, 999, 999,   5,   6,
		999, 999,   7,   8, 999, 999,   9,  10, 999, 999,  11,  12,
		999, 999,  13,  14, 999, 999,  15,  16, 999, 999,  17,  18,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999
	]);
	B = new Complex128Array([
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	out = zlacpy( 'all', 3, 3, A, 2, 6, 7, B, 2, 6, 7 );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, A ), 'returns expected value' );

	t.end();
});
