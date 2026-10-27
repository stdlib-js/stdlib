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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dvander = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dvander instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dvander, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', opts, function test( t ) {
	t.strictEqual( dvander.length, 10, 'has expected arity' );
	t.end();
});

tape( 'the function throws an error if provided an invalid second argument', opts, function test( t ) {
	var values;
	var i;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dvander( -1, value, 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, new Float64Array( 9 ), 3, 1, 0 ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', opts, function test( t ) {
	var values;
	var i;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dvander( -1, 3, value, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, new Float64Array( 9 ), 3, 1, 0 ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function generates a Vandermonde matrix (row-major, decreasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 9 );

	dvander( -1, 3, 3, x, 1, 0, out, 3, 1, 0 );

	expected = new Float64Array([
		1.0,
		1.0,
		1.0,
		4.0,
		2.0,
		1.0,
		9.0,
		3.0,
		1.0
	]);

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (row-major, increasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 9 );

	dvander( 1, 3, 3, x, 1, 0, out, 3, 1, 0 );

	expected = new Float64Array([
		1.0,
		1.0,
		1.0,
		1.0,
		2.0,
		4.0,
		1.0,
		3.0,
		9.0
	]);

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (column-major, decreasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 9 );

	dvander( -1, 3, 3, x, 1, 0, out, 1, 3, 0 );

	expected = new Float64Array([
		1.0,
		4.0,
		9.0,
		1.0,
		2.0,
		3.0,
		1.0,
		1.0,
		1.0
	]);

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (column-major, increasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 9 );

	dvander( 1, 3, 3, x, 1, 0, out, 1, 3, 0 );

	expected = new Float64Array([
		1.0,
		1.0,
		1.0,
		1.0,
		2.0,
		3.0,
		1.0,
		4.0,
		9.0
	]);

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output matrix', opts, function test( t ) {
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, 2.0 ] );
	out = new Float64Array( 4 );

	v = dvander( -1, 2, 2, x, 1, 0, out, 2, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.end();
});

tape( 'if provided an `M` equal to `0`, the function returns the output matrix unchanged', opts, function test( t ) {
	var out;
	var x;

	x = new Float64Array( [] );
	out = new Float64Array( [] );

	dvander( -1, 0, 3, x, 1, 0, out, 3, 1, 0 );

	t.deepEqual( out, new Float64Array( [] ), 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` equal to `0`, the function returns the output matrix unchanged', opts, function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0 ] );
	out = new Float64Array( [] );

	dvander( -1, 2, 0, x, 1, 0, out, 0, 1, 0 );

	t.deepEqual( out, new Float64Array( [] ), 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for `x` (row-major)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	// Pick every other element: x[0]=1.0, x[2]=3.0
	x = new Float64Array( [ 1.0, 999.0, 3.0, 999.0 ] );
	out = new Float64Array( 6 );

	dvander( -1, 2, 3, x, 2, 0, out, 3, 1, 0 );

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 9.0, 3.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (row-major)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 3.0, 999.0, 1.0 ] );
	out = new Float64Array( 6 );

	dvander( -1, 2, 3, x, -2, 2, out, 3, 1, 0 );

	// x[2]=1.0 (first), x[0]=3.0 (second)
	expected = new Float64Array( [ 1.0, 1.0, 1.0, 9.0, 3.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for `x` (column-major)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	// Pick every other element: x[0]=1.0, x[2]=3.0
	x = new Float64Array( [ 1.0, 999.0, 3.0, 999.0 ] );
	out = new Float64Array( 6 );

	dvander( -1, 2, 3, x, 2, 0, out, 1, 2, 0 );

	expected = new Float64Array( [ 1.0, 9.0, 1.0, 3.0, 1.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (column-major)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 3.0, 999.0, 1.0 ] );
	out = new Float64Array( 6 );

	dvander( -1, 2, 3, x, -2, 2, out, 1, 2, 0 );

	// x[2]=1.0 (first), x[0]=3.0 (second)
	expected = new Float64Array( [ 1.0, 9.0, 1.0, 3.0, 1.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 999.0, 2.0, 3.0 ] );
	out = new Float64Array( 6 );

	dvander( -1, 2, 3, x, 1, 1, out, 3, 1, 0 );

	expected = new Float64Array( [ 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output offset', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 2.0, 3.0 ] );
	out = new Float64Array( 8 );

	dvander( -1, 2, 3, x, 1, 0, out, 3, 1, 2 );

	// Starting at offset 2:
	expected = new Float64Array( [ 0.0, 0.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports output stride with padding (row-major)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0 ] );
	out = new Float64Array( 10 );

	// 2x3 row-major with strideOut1=5 (padding of 2 per row)
	dvander( -1, 2, 3, x, 1, 0, out, 5, 1, 0 );

	expected = new Float64Array([
		1.0,
		1.0,
		1.0,
		0.0,
		0.0,
		4.0,
		2.0,
		1.0,
		0.0,
		0.0
	]);

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports output stride with padding (column-major)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0 ] );
	out = new Float64Array( 12 );

	// 2x3 column-major with strideOut2=4 (padding of 2 per column)
	dvander( -1, 2, 3, x, 1, 0, out, 1, 4, 0 );

	expected = new Float64Array([
		1.0,
		4.0,
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		1.0,
		1.0,
		0.0,
		0.0
	]);

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (M > N, row-major, decreasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 6 );

	dvander( -1, 3, 2, x, 1, 0, out, 2, 1, 0 );

	// 3x2 matrix, decreasing:
	expected = new Float64Array( [ 1.0, 1.0, 2.0, 1.0, 3.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (M < N, row-major, increasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 2.0, 3.0 ] );
	out = new Float64Array( 8 );

	dvander( 1, 2, 4, x, 1, 0, out, 4, 1, 0 );

	// 2x4 matrix, increasing:
	expected = new Float64Array( [ 1.0, 2.0, 4.0, 8.0, 1.0, 3.0, 9.0, 27.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (M > N, column-major, decreasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 6 );

	// 3x2 column-major: strideOut1=1, strideOut2=3
	dvander( -1, 3, 2, x, 1, 0, out, 1, 3, 0 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 1.0, 1.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (M < N, column-major, increasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 2.0, 3.0 ] );
	out = new Float64Array( 8 );

	// 2x4 column-major: strideOut1=1, strideOut2=2
	dvander( 1, 2, 4, x, 1, 0, out, 1, 2, 0 );

	expected = new Float64Array( [ 1.0, 1.0, 2.0, 3.0, 4.0, 9.0, 8.0, 27.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array([
		0.0,
		2.0, // 0
		0.0,
		3.0  // 1
	]);
	out = new Float64Array( 6 );

	dvander( 1, 2, 3, x, 2, 1, out, 3, -1, 2 );

	expected = new Float64Array( [ 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function handles zero values in the input array (row-major, increasing)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 0.0, 2.0 ] );
	out = new Float64Array( 6 );

	dvander( 1, 2, 3, x, 1, 0, out, 3, 1, 0 );

	expected = new Float64Array( [ 1.0, 0.0, 0.0, 1.0, 2.0, 4.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function handles a single column (N=1)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 5.0, 10.0, 15.0 ] );
	out = new Float64Array( 3 );

	dvander( 1, 3, 1, x, 1, 0, out, 1, 1, 0 );

	// Single column: all x^0 = 1
	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function handles a single row (M=1)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 3.0 ] );
	out = new Float64Array( 4 );

	dvander( 1, 1, 4, x, 1, 0, out, 4, 1, 0 );

	// Single row: [ 3^0, 3^1, 3^2, 3^3 ] = [ 1, 3, 9, 27 ]
	expected = new Float64Array( [ 1.0, 3.0, 9.0, 27.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports column-major with output offset and stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0 ] );
	out = new Float64Array( 8 );

	// Column-major 2x2 starting at offset 2, with strideOut2=3 (padding of 1)
	dvander( 1, 2, 2, x, 1, 0, out, 1, 3, 2 );

	expected = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 2.0, 0.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
