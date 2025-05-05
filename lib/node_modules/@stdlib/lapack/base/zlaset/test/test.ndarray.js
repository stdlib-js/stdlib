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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zlaset = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zlaset, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( zlaset.length, 9, 'returns expected value' );
	t.end();
});

tape( 'the function assigns values to matrix `A` (row-major)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var M;
	var N;
	var A;

	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	M = 2;
	N = 3;

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'all', 2, 3, alpha, beta, A, 3, 1, 1 );

	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1);

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		1.0, 2.0, 3.0, 4.0, 1.0, 2.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'all', 2, 3, alpha, beta, A, -3, -1, 6 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'all', 3, 2, alpha, beta, A, 2, 1, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (row-major, upper)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var M;
	var N;
	var A;

	M = 3;
	N = 2;

	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	A = new Complex128Array( ( M * N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'upper', 2, 3, alpha, beta, A, 3, 1, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 3.0, 4.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'upper', 2, 3, alpha, beta, A, 3, -1, 3 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0,
		0.0, 0.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'upper', 3, 2, alpha, beta, A, 2, 1, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (row-major, lower)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 2;

	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 0.0, 0.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'lower', 2, 3, alpha, beta, A, 3, 1, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		1.0, 2.0, 3.0, 4.0, 0.0, 0.0,
		3.0, 4.0, 0.0, 0.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'lower', 2, 3, alpha, beta, A, -3, 1, 4 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'lower', 3, 2, alpha, beta, A, 2, 1, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 2;

	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'all', 2, 3, alpha, beta, A, 1, 2, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'all', 2, 3, alpha, beta, A, 1, 2, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'all', 3, 2, alpha, beta, A, 1, 3, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, upper)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 2;

	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'upper', 2, 3, alpha, beta, A, 1, 2, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'upper', 2, 3, alpha, beta, A, 1, 2, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 0.0, 0.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'upper', 3, 2, alpha, beta, A, 1, 3, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, lower)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 2;

	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0,
		0.0, 0.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'lower', 2, 3, alpha, beta, A, 1, 2, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0,
		0.0, 0.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'lower', 2, 3, alpha, beta, A, 1, 2, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( ( M*N ) + 1 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		0.0, 0.0,
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'lower', 3, 2, alpha, beta, A, 1, 3, 1 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, lower, complex access patterns)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;

	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline, no-multi-spaces */

	A = new Complex128Array([
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999
	]);

	expected = new Complex128Array([
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999,
		999, 999,   3,   4, 999, 999,   1,   2, 999, 999,   1,   2,
		999, 999,   1,   2, 999, 999,   3,   4, 999, 999,   1,   2,
		999, 999,   1,   2, 999, 999,   1,   2, 999, 999,   3,   4,
		999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	out = zlaset( 'all', 3, 3, alpha, beta, A, 2, 6, 7 );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});
