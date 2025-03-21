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
var dgetrans = require( './../lib/dgetrans.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dgetrans, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( dgetrans.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var out;
	var A;
	var i;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Float64Array( 4 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dgetrans( value, 2, 2, A, 2, out, 2 );
		};
	}
});

tape( 'the function transposes a matrix (tall rectangular, row-major)', function test( t ) {
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

	actual = dgetrans( 'row-major', M, N, A, N, out, M );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (tall rectangular, column-major)', function test( t ) {
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

	actual = dgetrans( 'column-major', M, N, A, M, out, N );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (wide rectangular, row-major)', function test( t ) {
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

	actual = dgetrans( 'row-major', M, N, A, N, out, M );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (wide rectangular, column-major)', function test( t ) {
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

	actual = dgetrans( 'column-major', M, N, A, M, out, N );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (square, row-major)', function test( t ) {
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

	actual = dgetrans( 'row-major', M, N, A, N, out, M );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function transposes a matrix (square, column-major)', function test( t ) {
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

	actual = dgetrans( 'column-major', M, N, A, M, out, N );
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

	actual = dgetrans( 'column-major', M, N, A, M, out, N );
	t.strictEqual( actual, out, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `A` (row-major)', function test( t ) {
	var expected;
	var actual;
	var out;
	var A;
	var M;
	var N;

	M = 4;
	N = 2;

	A = [
		[ 1.0, 2.0, 999, 999 ],
		[ 3.0, 4.0, 999, 999 ],
		[ 5.0, 6.0, 999, 999 ],
		[ 7.0, 8.0, 999, 999 ]
	];
	A = new Float64Array( flatten2d( A, [ M, N*2 ], false ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0, 5.0, 7.0 ],
		[ 2.0, 4.0, 6.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], false ) );

	actual = dgetrans( 'row-major', M, N, A, N*2, out, M );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `A` (column-major)', function test( t ) {
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
		[ 7.0, 8.0 ],
		[ 999, 999 ],
		[ 999, 999 ],
		[ 999, 999 ],
		[ 999, 999 ]
	];
	A = new Float64Array( flatten2d( A, [ M*2, N ], true ) );
	out = new Float64Array( M*N );

	expected = [
		[ 1.0, 3.0, 5.0, 7.0 ],
		[ 2.0, 4.0, 6.0, 8.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M ], true ) );

	actual = dgetrans( 'column-major', M, N, A, M*2, out, N );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `out` (row-major)', function test( t ) {
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
	out = new Float64Array( M*N*2 );

	expected = [
		[ 1.0, 3.0, 5.0, 7.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 2.0, 4.0, 6.0, 8.0, 0.0, 0.0, 0.0, 0.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N, M*2 ], false ) );

	actual = dgetrans( 'row-major', M, N, A, N, out, M*2 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `out` (column-major)', function test( t ) {
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
	out = new Float64Array( M*N*2 );

	expected = [
		[ 1.0, 3.0, 5.0, 7.0 ],
		[ 2.0, 4.0, 6.0, 8.0 ],
		[ 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0, 0.0, 0.0, 0.0 ]
	];
	expected = new Float64Array( flatten2d( expected, [ N*2, M ], true ) );

	actual = dgetrans( 'column-major', M, N, A, M, out, N*2 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
