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

/* eslint-disable max-len, id-length */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var dlaset = require( './../lib/ndarray.js' );


// FIXTURES //

var ALL_ROW_MAJOR = require( './fixtures/all_row_major.json' );
var ALL_COL_MAJOR = require( './fixtures/all_col_major.json' );
var LOWER_ROW_MAJOR = require( './fixtures/lower_row_major.json' );
var LOWER_COL_MAJOR = require( './fixtures/lower_col_major.json' );
var UPPER_ROW_MAJOR = require( './fixtures/upper_row_major.json' );
var UPPER_COL_MAJOR = require( './fixtures/upper_col_major.json' );

var OFFSET_ALL_ROW_MAJOR = require( './fixtures/offsets/all_row_major.json' );
var OFFSET_ALL_COL_MAJOR = require( './fixtures/offsets/all_col_major.json' );
var OFFSET_LOWER_ROW_MAJOR = require( './fixtures/offsets/lower_row_major.json' );
var OFFSET_LOWER_COL_MAJOR = require( './fixtures/offsets/lower_col_major.json' );
var OFFSET_UPPER_ROW_MAJOR = require( './fixtures/offsets/upper_row_major.json' );
var OFFSET_UPPER_COL_MAJOR = require( './fixtures/offsets/upper_col_major.json' );

var MIXED_STRIDES_ALL_ROW_MAJOR = require( './fixtures/mixed_strides/all_row_major.json' );
var MIXED_STRIDES_ALL_COL_MAJOR = require( './fixtures/mixed_strides/all_col_major.json' );
var MIXED_STRIDES_LOWER_ROW_MAJOR = require( './fixtures/mixed_strides/lower_row_major.json' );
var MIXED_STRIDES_LOWER_COL_MAJOR = require( './fixtures/mixed_strides/lower_col_major.json' );
var MIXED_STRIDES_UPPER_ROW_MAJOR = require( './fixtures/mixed_strides/upper_row_major.json' );
var MIXED_STRIDES_UPPER_COL_MAJOR = require( './fixtures/mixed_strides/upper_col_major.json' );

var NEGATIVE_STRIDES_ALL_ROW_MAJOR = require( './fixtures/negative_strides/all_row_major.json' );
var NEGATIVE_STRIDES_ALL_COL_MAJOR = require( './fixtures/negative_strides/all_col_major.json' );
var NEGATIVE_STRIDES_LOWER_ROW_MAJOR = require( './fixtures/negative_strides/lower_row_major.json' );
var NEGATIVE_STRIDES_LOWER_COL_MAJOR = require( './fixtures/negative_strides/lower_col_major.json' );
var NEGATIVE_STRIDES_UPPER_ROW_MAJOR = require( './fixtures/negative_strides/upper_row_major.json' );
var NEGATIVE_STRIDES_UPPER_COL_MAJOR = require( './fixtures/negative_strides/upper_col_major.json' );

var LARGE_STRIDES_ALL_ROW_MAJOR = require( './fixtures/large_strides/all_row_major.json' );
var LARGE_STRIDES_ALL_COL_MAJOR = require( './fixtures/large_strides/all_col_major.json' );
var LARGE_STRIDES_LOWER_ROW_MAJOR = require( './fixtures/large_strides/lower_row_major.json' );
var LARGE_STRIDES_LOWER_COL_MAJOR = require( './fixtures/large_strides/lower_col_major.json' );
var LARGE_STRIDES_UPPER_ROW_MAJOR = require( './fixtures/large_strides/upper_row_major.json' );
var LARGE_STRIDES_UPPER_COL_MAJOR = require( './fixtures/large_strides/upper_col_major.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlaset, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( dlaset.length, 9, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (row-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = ALL_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (column-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = ALL_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (row-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LOWER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (column-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LOWER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (row-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = UPPER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (column-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = UPPER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (row-major) (offsets)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = OFFSET_ALL_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (column-major) (offsets)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = OFFSET_ALL_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (row-major) (offsets)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = OFFSET_LOWER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (column-major) (offsets)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = OFFSET_LOWER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (row-major) (offsets)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = OFFSET_UPPER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (column-major) (offsets)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = OFFSET_UPPER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (row-major) (mixed strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = MIXED_STRIDES_ALL_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (column-major) (mixed strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = MIXED_STRIDES_ALL_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (row-major) (mixed strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = MIXED_STRIDES_LOWER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (column-major) (mixed strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = MIXED_STRIDES_LOWER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (row-major) (mixed strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = MIXED_STRIDES_UPPER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (column-major) (mixed strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = MIXED_STRIDES_UPPER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (row-major) (negative strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = NEGATIVE_STRIDES_ALL_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (column-major) (negative strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = NEGATIVE_STRIDES_ALL_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (row-major) (negative strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = NEGATIVE_STRIDES_LOWER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (column-major) (negative strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = NEGATIVE_STRIDES_LOWER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (row-major) (negative strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = NEGATIVE_STRIDES_UPPER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (column-major) (negative strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = NEGATIVE_STRIDES_UPPER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (row-major) (large strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LARGE_STRIDES_ALL_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (column-major) (large strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LARGE_STRIDES_ALL_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (row-major) (large strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LARGE_STRIDES_LOWER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (column-major) (large strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LARGE_STRIDES_LOWER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (row-major) (large strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LARGE_STRIDES_UPPER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (column-major) (large strides)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LARGE_STRIDES_UPPER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.uplo, data.M, data.N, data.alpha, data.beta, A, data.strideA1, data.strideA2, data.offsetA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});
