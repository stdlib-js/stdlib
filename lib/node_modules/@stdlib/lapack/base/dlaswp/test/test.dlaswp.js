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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Int32Array = require( '@stdlib/array/int32' );
var Float64Array = require( '@stdlib/array/float64' );
var oneTo = require( '@stdlib/array/one-to' );
var flatten = require( '@stdlib/array/base/flatten' );
var reverse = require( '@stdlib/array/base/reverse' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var dlaswp = require( './../lib/dlaswp.js' );


// FIXTURES //

var COL_MAJOR = require( './fixtures/column_major_no_offsets.json' );
var COL_MAJOR_IPIV_STRIDE_POS = require( './fixtures/column_major_ipiv_stride_positive.json' );
var COL_MAJOR_IPIV_STRIDE_NEG = require( './fixtures/column_major_ipiv_stride_negative.json' );
var COL_MAJOR_LDA = require( './fixtures/column_major_lda.json' );
var COL_MAJOR_REV_PIVOTS = require( './fixtures/column_major_reverse_pivots.json' );
var COL_MAJOR_K1 = require( './fixtures/column_major_k1.json' );

var ROW_MAJOR = require( './fixtures/row_major_no_offsets.json' );
var ROW_MAJOR_IPIV_STRIDE_POS = require( './fixtures/row_major_ipiv_stride_positive.json' );
var ROW_MAJOR_IPIV_STRIDE_NEG = require( './fixtures/row_major_ipiv_stride_negative.json' );
var ROW_MAJOR_LDA = require( './fixtures/row_major_lda.json' );
var ROW_MAJOR_REV_PIVOTS = require( './fixtures/row_major_reverse_pivots.json' );
var ROW_MAJOR_K1 = require( './fixtures/row_major_k1.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlaswp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( dlaswp.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a valid order', function test( t ) {
	var values;
	var data;
	var i;

	data = COL_MAJOR;

	values = [
		'foo',
		'bar',
		'beep',
		'boop',
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dlaswp( value, data.N, data.A, data.LDA, data.k1, data.k2, data.IPIV, data.strideIPIV );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a valid `LDA` value (row-major)', function test( t ) {
	var values;
	var data;
	var i;

	data = ROW_MAJOR;

	values = [
		0,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dlaswp( data.order, data.N, data.A, value, data.k1, data.k2, data.IPIV, data.strideIPIV );
		};
	}
});

tape( 'the function performs a series of row interchanges (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a series of row interchanges (column-major, k1 > 0)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_K1;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports applying pivots in reverse order (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_REV_PIVOTS;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `LDA` parameter for operating on sub-matrices (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_LDA;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a positive increment between successive values of `IPIV` (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_IPIV_STRIDE_POS;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative increment between successive values of `IPIV` (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_IPIV_STRIDE_NEG;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an increment between successive values of `IPIV` equal to `0`, the function returns the input matrix unchanged (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, 0 );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function efficiently handles large datasets (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var buf;
	var mat;
	var out;
	var ord;
	var sh;
	var st;
	var A;
	var o;

	ord = 'column-major';
	sh = [ 5, 100 ];
	st = shape2strides( sh, ord );
	o = 0;

	// Define a linear buffer:
	buf = oneTo( numel( sh ), 'generic' );

	// Convert to a nested array:
	mat = ndarray2array( buf, sh, st, o, ord );

	// Define an input matrix in linear storage:
	A = new Float64Array( buf );

	// Create an array of pivot indices:
	IPIV = new Int32Array( [ 9999, 9999, 9999, 1, 0 ] );

	// Define the expected output array:
	expected = reverse( mat.slice() );
	expected = new Float64Array( flatten( expected, sh, true ) );

	// Interchange rows:
	out = dlaswp( ord, sh[1], A, sh[0], 3, 4, IPIV, 1 );

	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a series of row interchanges (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a series of row interchanges (row-major, k1 > 0)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_K1;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports applying pivots in reverse order (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_REV_PIVOTS;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `LDA` parameter for operating on sub-matrices (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_LDA;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a positive increment between successive values of `IPIV` (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_IPIV_STRIDE_POS;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative increment between successive values of `IPIV` (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_IPIV_STRIDE_NEG;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A_out );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, data.strideIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an increment between successive values of `IPIV` equal to `0`, the function returns the input matrix unchanged (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR;

	A = new Float64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Float64Array( data.A );

	out = dlaswp( data.order, data.N, A, data.LDA, data.k1, data.k2, IPIV, 0 );
	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function efficiently handles large datasets (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var buf;
	var mat;
	var out;
	var ord;
	var sh;
	var st;
	var A;
	var o;

	ord = 'row-major';
	sh = [ 5, 100 ];
	st = shape2strides( sh, ord );
	o = 0;

	// Define a linear buffer:
	buf = oneTo( numel( sh ), 'generic' );

	// Convert to a nested array:
	mat = ndarray2array( buf, sh, st, o, ord );

	// Define an input matrix in linear storage:
	A = new Float64Array( buf );

	// Create an array of pivot indices:
	IPIV = new Int32Array( [ 9999, 9999, 9999, 1, 0 ] );

	// Define the expected output array:
	expected = reverse( mat.slice() );
	expected = new Float64Array( flatten( expected, sh, false ) );

	// Interchange rows:
	out = dlaswp( ord, sh[1], A, sh[1], 3, 4, IPIV, 1 );

	t.strictEqual( out, A, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
