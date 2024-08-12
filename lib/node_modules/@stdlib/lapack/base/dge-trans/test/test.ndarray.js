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
var flatten2d = require( '@stdlib/array/base/flatten2d' );
var Float64Array = require( '@stdlib/array/float64' );
var dgetrans = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dgetrans, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( dgetrans.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function transposes a matrix (tall rectangular, row-major, row-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 2;

	A = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], false ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0, 5.0, 7.0 ],
		[ 2.0, 4.0, 6.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], false ) );

	actual = dgetrans( M, N, A, N, 1, 0, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (tall rectangular, row-major, column-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 2;

	A = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], false ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0, 5.0, 7.0 ],
		[ 2.0, 4.0, 6.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], true ) );

	actual = dgetrans( M, N, A, N, 1, 0, out, 1, N, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (tall rectangular, column-major, column-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 2;

	A = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], true ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0, 5.0, 7.0 ],
		[ 2.0, 4.0, 6.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], true ) );

	actual = dgetrans( M, N, A, 1, M, 0, out, 1, N, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (tall rectangular, column-major, row-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 2;

	A = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 8.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], true ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0, 5.0, 7.0 ],
		[ 2.0, 4.0, 6.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], false ) );

	actual = dgetrans( M, N, A, 1, M, 0, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (wide rectangular, row-major, row-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 4;

	A = [
		[ 1.0, 2.0, 3.0, 4.0 ],
		[ 5.0, 6.0, 7.0, 8.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], false ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 5.0 ],
		[ 2.0, 6.0 ],
		[ 3.0, 7.0 ],
		[ 4.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], false ) );

	actual = dgetrans( M, N, A, N, 1, 0, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (wide rectangular, row-major, column-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 4;

	A = [
		[ 1.0, 2.0, 3.0, 4.0 ],
		[ 5.0, 6.0, 7.0, 8.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], false ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 5.0 ],
		[ 2.0, 6.0 ],
		[ 3.0, 7.0 ],
		[ 4.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], true ) );

	actual = dgetrans( M, N, A, N, 1, 0, out, 1, N, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (wide rectangular, column-major, column-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 4;

	A = [
		[ 1.0, 2.0, 3.0, 4.0 ],
		[ 5.0, 6.0, 7.0, 8.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], true ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 5.0 ],
		[ 2.0, 6.0 ],
		[ 3.0, 7.0 ],
		[ 4.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], true ) );

	actual = dgetrans( M, N, A, 1, M, 0, out, 1, N, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (wide rectangular, column-major, row-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 4;

	A = [
		[ 1.0, 2.0, 3.0, 4.0 ],
		[ 5.0, 6.0, 7.0, 8.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], true ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 5.0 ],
		[ 2.0, 6.0 ],
		[ 3.0, 7.0 ],
		[ 4.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], false ) );

	actual = dgetrans( M, N, A, 1, M, 0, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (square, row-major, row-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 2;

	A = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], false ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0 ],
		[ 2.0, 4.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], false ) );

	actual = dgetrans( M, N, A, N, 1, 0, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (square, row-major, column-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 2;

	A = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], false ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0 ],
		[ 2.0, 4.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], true ) );

	actual = dgetrans( M, N, A, N, 1, 0, out, 1, N, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (square, column-major, column-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 2;

	A = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], true ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0 ],
		[ 2.0, 4.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], true ) );

	actual = dgetrans( M, N, A, 1, M, 0, out, 1, N, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (square, column-major, row-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 2;

	A = [
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N ], true ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0 ],
		[ 2.0, 4.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], false ) );

	actual = dgetrans( M, N, A, 1, M, 0, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output matrix', function test( t ) {
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 2;
	N = 2;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Float64Array( M*N );

	actual = dgetrans( M, N, A, N, 1, 0, out, N, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A`', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	/* eslint-disable array-element-newline, no-multi-spaces, no-mixed-spaces-and-tabs */

	A = new Float64Array([
		  1, 999,   2, 999,   3, 999,
		999, 999, 999, 999, 999, 999,
		  4, 999,   5, 999,   6, 999,
		999, 999, 999, 999, 999, 999,
		  7, 999,   8, 999,   9, 999,
		999, 999, 999, 999, 999, 999,
		 10, 999,  11, 999,  12, 999,
		999, 999, 999, 999, 999, 999
	]);

	/* eslint-enable array-element-newline, no-multi-spaces, no-mixed-spaces-and-tabs */

	out = new Float64Array( M*N );

	expected = new Float64Array( [ 1.0, 4.0, 7.0, 10.0, 2.0, 5.0, 8.0, 11.0, 3.0, 6.0, 9.0, 12.0 ] ); // eslint-disable-line max-len

	actual = dgetrans( M, N, A, 12, 2, 0, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `out`', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ); // eslint-disable-line max-len

	out = new Float64Array( 48 );

	/* eslint-disable array-element-newline, no-multi-spaces */

	expected = new Float64Array([
		1, 0, 4, 0, 7, 0, 10, 0,
		0, 0, 0, 0, 0, 0,  0, 0,
		2, 0, 5, 0, 8, 0, 11, 0,
		0, 0, 0, 0, 0, 0,  0, 0,
		3, 0, 6, 0, 9, 0, 12, 0,
		0, 0, 0, 0, 0, 0,  0, 0
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	actual = dgetrans( M, N, A, N, 1, 0, out, 16, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset for `A`', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	/* eslint-disable array-element-newline, no-multi-spaces */

	A = new Float64Array([
		999, 999, 999, 999, 999, 999, 999,
		999,   1, 999,   2, 999,   3, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,   4, 999,   5, 999,   6, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,   7, 999,   8, 999,   9, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,  10, 999,  11, 999,  12, 999,
		999, 999, 999, 999, 999, 999, 999
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	out = new Float64Array( M*N );

	expected = new Float64Array( [ 1.0, 4.0, 7.0, 10.0, 2.0, 5.0, 8.0, 11.0, 3.0, 6.0, 9.0, 12.0 ] ); // eslint-disable-line max-len

	actual = dgetrans( M, N, A, 14, 2, 8, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset for `out`', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ); // eslint-disable-line max-len

	out = new Float64Array( 63 );

	/* eslint-disable array-element-newline, no-multi-spaces */

	expected = new Float64Array([
		0, 0, 0, 0, 0, 0, 0,  0, 0,
		0, 1, 0, 4, 0, 7, 0, 10, 0,
		0, 0, 0, 0, 0, 0, 0,  0, 0,
		0, 2, 0, 5, 0, 8, 0, 11, 0,
		0, 0, 0, 0, 0, 0, 0,  0, 0,
		0, 3, 0, 6, 0, 9, 0, 12, 0,
		0, 0, 0, 0, 0, 0, 0,  0, 0
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	actual = dgetrans( M, N, A, N, 1, 0, out, 18, 2, 10 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying negative strides for `A`', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	/* eslint-disable array-element-newline, no-multi-spaces */

	A = new Float64Array([
		999, 999, 999, 999, 999, 999, 999,
		999,   1, 999,   2, 999,   3, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,   4, 999,   5, 999,   6, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,   7, 999,   8, 999,   9, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,  10, 999,  11, 999,  12, 999,
		999, 999, 999, 999, 999, 999, 999
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	out = new Float64Array( M*N );

	expected = new Float64Array( [ 12.0, 9.0, 6.0, 3.0, 11.0, 8.0, 5.0, 2.0, 10.0, 7.0, 4.0, 1.0 ] ); // eslint-disable-line max-len

	actual = dgetrans( M, N, A, -14, -2, 54, out, M, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying negative strides for `out`', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ); // eslint-disable-line max-len

	out = new Float64Array( 63 );

	/* eslint-disable array-element-newline, no-multi-spaces */

	expected = new Float64Array([
		0,  0, 0, 0, 0, 0, 0, 0, 0,
		0, 12, 0, 9, 0, 6, 0, 3, 0,
		0,  0, 0, 0, 0, 0, 0, 0, 0,
		0, 11, 0, 8, 0, 5, 0, 2, 0,
		0,  0, 0, 0, 0, 0, 0, 0, 0,
		0, 10, 0, 7, 0, 4, 0, 1, 0,
		0,  0, 0, 0, 0, 0, 0, 0, 0
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	actual = dgetrans( M, N, A, N, 1, 0, out, -18, -2, 52 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 3;

	/* eslint-disable array-element-newline, no-multi-spaces */

	A = new Float64Array([
		999, 999, 999, 999, 999, 999, 999,
		999,   1, 999,   2, 999,   3, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,   4, 999,   5, 999,   6, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,   7, 999,   8, 999,   9, 999,
		999, 999, 999, 999, 999, 999, 999,
		999,  10, 999,  11, 999,  12, 999,
		999, 999, 999, 999, 999, 999, 999
	]);

	out = new Float64Array( 63 );

	expected = new Float64Array([
		0,  0, 0, 0, 0, 0, 0, 0, 0,
		0, 12, 0, 9, 0, 6, 0, 3, 0,
		0,  0, 0, 0, 0, 0, 0, 0, 0,
		0, 11, 0, 8, 0, 5, 0, 2, 0,
		0,  0, 0, 0, 0, 0, 0, 0, 0,
		0, 10, 0, 7, 0, 4, 0, 1, 0,
		0,  0, 0, 0, 0, 0, 0, 0, 0
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	actual = dgetrans( M, N, A, 14, 2, 8, out, -18, -2, 52 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
