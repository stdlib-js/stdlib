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
var iladlr = require( './../lib/ndarray.js' );


// FIXTURES //

var ROW_MAJOR_DATA = require( './fixtures/row_major.json' );
var ROW_MAJOR_ZEROS = require( './fixtures/row_major_zeros.json' );
var COLUMN_MAJOR_DATA = require( './fixtures/column_major.json' );
var COLUMN_MAJOR_ZEROS = require( './fixtures/column_major_zeros.json' );

var OFFSET_ROW_MAJOR_DATA = require( './fixtures/offsets/row_major.json' );
var OFFSET_ROW_MAJOR_ZEROS = require( './fixtures/offsets/row_major_zeros.json' );
var OFFSET_COLUMN_MAJOR_DATA = require( './fixtures/offsets/column_major.json' );
var OFFSET_COLUMN_MAJOR_ZEROS = require( './fixtures/offsets/column_major_zeros.json' );

var NEGATIVE_STRIDES_ROW_MAJOR_DATA = require( './fixtures/negative_strides/row_major.json' );
var NEGATIVE_STRIDES_ROW_MAJOR_ZEROS = require( './fixtures/negative_strides/row_major_zeros.json' );
var NEGATIVE_STRIDES_COLUMN_MAJOR_DATA = require( './fixtures/negative_strides/column_major.json' );
var NEGATIVE_STRIDES_COLUMN_MAJOR_ZEROS = require( './fixtures/negative_strides/column_major_zeros.json' );

var MIXED_STRIDES_ROW_MAJOR_DATA = require( './fixtures/mixed_strides/row_major.json' );
var MIXED_STRIDES_ROW_MAJOR_ZEROS = require( './fixtures/mixed_strides/row_major_zeros.json' );
var MIXED_STRIDES_COLUMN_MAJOR_DATA = require( './fixtures/mixed_strides/column_major.json' );
var MIXED_STRIDES_COLUMN_MAJOR_ZEROS = require( './fixtures/mixed_strides/column_major_zeros.json' );

var LARGE_STRIDES_ROW_MAJOR_DATA = require( './fixtures/large_strides/row_major.json' );
var LARGE_STRIDES_ROW_MAJOR_ZEROS = require( './fixtures/large_strides/row_major_zeros.json' );
var LARGE_STRIDES_COLUMN_MAJOR_DATA = require( './fixtures/large_strides/column_major.json' );
var LARGE_STRIDES_COLUMN_MAJOR_ZEROS = require( './fixtures/large_strides/column_major_zeros.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iladlr, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( iladlr.length, 6, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (row-major)', function test( t ) {
	var data;
	var out;
	var A;

	data = ROW_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (column-major)', function test( t ) {
	var data;
	var out;
	var A;

	data = COLUMN_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (row-major)', function test( t ) {
	var data;
	var out;
	var A;

	data = ROW_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (column-major)', function test( t ) {
	var data;
	var out;
	var A;

	data = COLUMN_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (row-major) (offsets)', function test( t ) {
	var data;
	var out;
	var A;

	data = OFFSET_ROW_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (column-major) (offsets)', function test( t ) {
	var data;
	var out;
	var A;

	data = OFFSET_COLUMN_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (row-major) (offsets)', function test( t ) {
	var data;
	var out;
	var A;

	data = OFFSET_ROW_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (column-major) (offsets)', function test( t ) {
	var data;
	var out;
	var A;

	data = OFFSET_COLUMN_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (row-major) (mixed strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = MIXED_STRIDES_ROW_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (column-major) (mixed strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = MIXED_STRIDES_COLUMN_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (row-major) (mixed strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = MIXED_STRIDES_ROW_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (column-major) (mixed strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = MIXED_STRIDES_COLUMN_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (row-major) (negative strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = NEGATIVE_STRIDES_ROW_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (column-major) (negative strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = NEGATIVE_STRIDES_COLUMN_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (row-major) (negative strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = NEGATIVE_STRIDES_ROW_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (column-major) (negative strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = NEGATIVE_STRIDES_COLUMN_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (row-major) (large strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = LARGE_STRIDES_ROW_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (column-major) (large strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = LARGE_STRIDES_COLUMN_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (row-major) (large strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = LARGE_STRIDES_ROW_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (column-major) (large strides)', function test( t ) {
	var data;
	var out;
	var A;

	data = LARGE_STRIDES_COLUMN_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlr( data.M, data.N, A, data.strideA1, data.strideA2, data.offsetA );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});
