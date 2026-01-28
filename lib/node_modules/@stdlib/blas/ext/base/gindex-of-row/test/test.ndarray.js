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
var gindexOfRow = require( './../lib/ndarray.js' );


// FIXTURES //

var ROW_MAJOR_DATA = require( './fixtures/row_major.json' );
var ROW_MAJOR_NO_MATCH = require( './fixtures/row_major_no_match.json' );
var COLUMN_MAJOR_DATA = require( './fixtures/column_major.json' );
var COLUMN_MAJOR_NO_MATCH = require( './fixtures/column_major_no_match.json' );

var OFFSET_ROW_MAJOR_DATA = require( './fixtures/offsets/row_major.json' );
var OFFSET_ROW_MAJOR_NO_MATCH = require( './fixtures/offsets/row_major_no_match.json' );
var OFFSET_COLUMN_MAJOR_DATA = require( './fixtures/offsets/column_major.json' );
var OFFSET_COLUMN_MAJOR_NO_MATCH = require( './fixtures/offsets/column_major_no_match.json' );

var NEGATIVE_STRIDES_ROW_MAJOR_DATA = require( './fixtures/negative_strides/row_major.json' );
var NEGATIVE_STRIDES_ROW_MAJOR_NO_MATCH = require( './fixtures/negative_strides/row_major_no_match.json' );
var NEGATIVE_STRIDES_COLUMN_MAJOR_DATA = require( './fixtures/negative_strides/column_major.json' );
var NEGATIVE_STRIDES_COLUMN_MAJOR_NO_MATCH = require( './fixtures/negative_strides/column_major_no_match.json' );

var MIXED_STRIDES_ROW_MAJOR_DATA = require( './fixtures/mixed_strides/row_major.json' );
var MIXED_STRIDES_ROW_MAJOR_NO_MATCH = require( './fixtures/mixed_strides/row_major_no_match.json' );
var MIXED_STRIDES_COLUMN_MAJOR_DATA = require( './fixtures/mixed_strides/column_major.json' );
var MIXED_STRIDES_COLUMN_MAJOR_NO_MATCH = require( './fixtures/mixed_strides/column_major_no_match.json' );

var LARGE_STRIDES_ROW_MAJOR_DATA = require( './fixtures/large_strides/row_major.json' );
var LARGE_STRIDES_ROW_MAJOR_NO_MATCH = require( './fixtures/large_strides/row_major_no_match.json' );
var LARGE_STRIDES_COLUMN_MAJOR_DATA = require( './fixtures/large_strides/column_major.json' );
var LARGE_STRIDES_COLUMN_MAJOR_NO_MATCH = require( './fixtures/large_strides/column_major_no_match.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gindexOfRow, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( gindexOfRow.length, 9, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index when M is less than or equal to zero (row-major)', function test( t ) {
	var data;
	var out;

	data = ROW_MAJOR_DATA;
	out = gindexOfRow( data.order, 0, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index when N is less than or equal to zero (row-major)', function test( t ) {
	var data;
	var out;

	data = ROW_MAJOR_DATA;
	out = gindexOfRow( data.order, data.M, 0, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index when M is less than or equal to zero (column-major)', function test( t ) {
	var data;
	var out;

	data =COLUMN_MAJOR_DATA;
	out = gindexOfRow( data.order, 0, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index when N is less than or equal to zero (column-major)', function test( t ) {
	var data;
	var out;

	data =COLUMN_MAJOR_DATA;
	out = gindexOfRow( data.order, data.M, 0, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (row-major)', function test( t ) {
	var data;
	var out;

	data = ROW_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (column-major)', function test( t ) {
	var data;
	var out;

	data = COLUMN_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (row-major)', function test( t ) {
	var data;
	var out;

	data = ROW_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (column-major)', function test( t ) {
	var data;
	var out;

	data = COLUMN_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (row-major, offsets)', function test( t ) {
	var data;
	var out;

	data = OFFSET_ROW_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (column-major, offsets)', function test( t ) {
	var data;
	var out;

	data = OFFSET_COLUMN_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (row-major, offsets)', function test( t ) {
	var data;
	var out;

	data = OFFSET_ROW_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (column-major, offsets)', function test( t ) {
	var data;
	var out;

	data = OFFSET_COLUMN_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (row-major, mixed strides)', function test( t ) {
	var data;
	var out;

	data = MIXED_STRIDES_ROW_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (column-major, mixed strides)', function test( t ) {
	var data;
	var out;

	data = MIXED_STRIDES_COLUMN_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (row-major, mixed strides)', function test( t ) {
	var data;
	var out;

	data = MIXED_STRIDES_ROW_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (column-major, mixed strides)', function test( t ) {
	var data;
	var out;

	data = MIXED_STRIDES_COLUMN_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (row-major, negative strides)', function test( t ) {
	var data;
	var out;

	data = NEGATIVE_STRIDES_ROW_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (column-major, negative strides)', function test( t ) {
	var data;
	var out;

	data = NEGATIVE_STRIDES_COLUMN_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (row-major, negative strides)', function test( t ) {
	var data;
	var out;

	data = NEGATIVE_STRIDES_ROW_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (column-major, negative strides)', function test( t ) {
	var data;
	var out;

	data = NEGATIVE_STRIDES_COLUMN_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (row-major, large strides)', function test( t ) {
	var data;
	var out;

	data = LARGE_STRIDES_ROW_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (column-major, large strides)', function test( t ) {
	var data;
	var out;

	data = LARGE_STRIDES_COLUMN_MAJOR_DATA;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (row-major, large strides)', function test( t ) {
	var data;
	var out;

	data = LARGE_STRIDES_ROW_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (column-major, large strides)', function test( t ) {
	var data;
	var out;

	data = LARGE_STRIDES_COLUMN_MAJOR_NO_MATCH;
	out = gindexOfRow( data.M, data.N, data.A, data.strideA1, data.strideA2, data.offsetA, data.x, data.strideX, data.offsetX );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});
