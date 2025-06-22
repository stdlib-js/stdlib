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
var zlaset = require( './../lib/zlaset.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zlaset, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( zlaset.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var alpha;
	var beta;
	var A;
	var i;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	A = new Complex128Array( 4 );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zlaset( value, 'all', 2, 2, alpha, beta, A, 2 );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument (row-major)', function test( t ) {
	var values;
	var alpha;
	var beta;
	var A;
	var i;

	values = [
		0,
		1
	];

	A = new Complex128Array( 4 );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zlaset( 'row-major', 'all', 2, 2, alpha, beta, A, value );
		};
	}
});

tape( 'the function assigns values to matrix `A` (row-major, wide)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 4;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'row-major', 'all', M, N, alpha, beta, A, N );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (row-major, tall)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0, 1.0, 2.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'row-major', 'all', M, N, alpha, beta, A, N );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (row-major, upper, wide)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 4;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		0.0, 0.0, 0.0, 0.0, 3.0, 4.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'row-major', 'upper', M, N, alpha, beta, A, N );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (row-major, upper, tall)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0, 1.0, 2.0,
		0.0, 0.0, 0.0, 0.0, 3.0, 4.0,
		0.0, 0.0, 0.0, 0.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'row-major', 'upper', M, N, alpha, beta, A, N );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (row-major, lower, wide)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 4;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 0.0, 0.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'row-major', 'lower', M, N, alpha, beta, A, N );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (row-major, lower, tall)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 0.0, 0.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0, 0.0, 0.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'row-major', 'lower', M, N, alpha, beta, A, N );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, wide)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 4;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0, 1.0, 2.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'column-major', 'all', M, N, alpha, beta, A, M );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, tall)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0, 1.0, 2.0,
		1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'column-major', 'all', M, N, alpha, beta, A, M );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, upper, wide)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 4;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 0.0, 0.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0, 0.0, 0.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0,
		1.0, 2.0, 1.0, 2.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'column-major', 'upper', M, N, alpha, beta, A, M );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, upper, tall)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
		1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 0.0, 0.0,
		1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'column-major', 'upper', M, N, alpha, beta, A, M );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, lower, wide)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 3;
	N = 4;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0, 1.0, 2.0,
		0.0, 0.0, 0.0, 0.0, 3.0, 4.0,
		0.0, 0.0, 0.0, 0.0, 0.0, 0.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'column-major', 'lower', M, N, alpha, beta, A, M );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function assigns values to matrix `A` (column-major, lower, tall)', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Complex128Array( M*N );
	alpha = new Complex128( 1.0, 2.0 );
	beta = new Complex128( 3.0, 4.0 );

	/* eslint-disable array-element-newline */
	expected = new Complex128Array([
		3.0, 4.0, 1.0, 2.0, 1.0, 2.0, 1.0, 2.0,
		0.0, 0.0, 3.0, 4.0, 1.0, 2.0, 1.0, 2.0,
		0.0, 0.0, 0.0, 0.0, 3.0, 4.0, 1.0, 2.0
	]);

	/* eslint-enable array-element-newline */

	out = zlaset( 'column-major', 'lower', M, N, alpha, beta, A, M );
	t.strictEqual( out, A, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});
