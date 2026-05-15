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
var dlarf1f = require( './../lib/ndarray.js' );


// FIXTURES //

var TAU_EQ_ZERO = require( './fixtures/tau_eq_zero.json' );
var LEFT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/left_lastv_eq_zero_row_major.json' );
var LEFT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/left_lastv_eq_zero_col_major.json' );
var LEFT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/left_lastv_gt_zero_row_major.json' );
var LEFT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/left_lastv_gt_zero_col_major.json' );
var RIGHT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/right_lastv_eq_zero_row_major.json' );
var RIGHT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/right_lastv_eq_zero_col_major.json' );
var RIGHT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/right_lastv_gt_zero_row_major.json' );
var RIGHT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/right_lastv_gt_zero_col_major.json' );

var MIXED_STRIDES_RIGHT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/mixed_strides/right_lastv_gt_zero_row_major.json' );
var NEGATIVE_STRIDES_RIGHT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/negative_strides/right_lastv_gt_zero_row_major.json' );
var LARGE_STRIDES_RIGHT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/large_strides/right_lastv_gt_zero_row_major.json' );
var OFFSETS_RIGHT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/offsets/right_lastv_gt_zero_row_major.json' );

var NEGATIVE_STRIDES_RIGHT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/negative_strides/right_lastv_gt_zero_col_major.json' );
var MIXED_STRIDES_RIGHT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/mixed_strides/right_lastv_gt_zero_col_major.json' );
var LARGE_STRIDES_RIGHT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/large_strides/right_lastv_gt_zero_col_major.json' );
var OFFSETS_RIGHT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/offsets/right_lastv_gt_zero_col_major.json' );

var MIXED_STRIDES_RIGHT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/mixed_strides/right_lastv_eq_zero_row_major.json' );
var NEGATIVE_STRIDES_RIGHT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/negative_strides/right_lastv_eq_zero_row_major.json' );
var LARGE_STRIDES_RIGHT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/large_strides/right_lastv_eq_zero_row_major.json' );
var OFFSETS_RIGHT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/offsets/right_lastv_eq_zero_row_major.json' );

var NEGATIVE_STRIDES_RIGHT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/negative_strides/right_lastv_eq_zero_col_major.json' );
var MIXED_STRIDES_RIGHT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/mixed_strides/right_lastv_eq_zero_col_major.json' );
var LARGE_STRIDES_RIGHT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/large_strides/right_lastv_eq_zero_col_major.json' );
var OFFSETS_RIGHT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/offsets/right_lastv_eq_zero_col_major.json' );

var NEGATIVE_STRIDES_LEFT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/negative_strides/left_lastv_gt_zero_row_major.json' );
var MIXED_STRIDES_LEFT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/mixed_strides/left_lastv_gt_zero_row_major.json' );
var LARGE_STRIDES_LEFT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/large_strides/left_lastv_gt_zero_row_major.json' );
var OFFSETS_LEFT_LASTV_GT_ZERO_ROW_MAJOR = require( './fixtures/offsets/left_lastv_gt_zero_row_major.json' );

var MIXED_STRIDES_LEFT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/mixed_strides/left_lastv_gt_zero_col_major.json' );
var LARGE_STRIDES_LEFT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/large_strides/left_lastv_gt_zero_col_major.json' );
var OFFSETS_LEFT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/offsets/left_lastv_gt_zero_col_major.json' );
var NEGATIVE_STRIDES_LEFT_LASTV_GT_ZERO_COL_MAJOR = require( './fixtures/negative_strides/left_lastv_gt_zero_col_major.json' );

var MIXED_STRIDES_LEFT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/mixed_strides/left_lastv_eq_zero_row_major.json' );
var LARGE_STRIDES_LEFT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/large_strides/left_lastv_eq_zero_row_major.json' );
var OFFSETS_LEFT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/offsets/left_lastv_eq_zero_row_major.json' );
var NEGATIVE_STRIDES_LEFT_LASTV_EQ_ZERO_ROW_MAJOR = require( './fixtures/negative_strides/left_lastv_eq_zero_row_major.json' );

var MIXED_STRIDES_LEFT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/mixed_strides/left_lastv_eq_zero_col_major.json' );
var LARGE_STRIDES_LEFT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/large_strides/left_lastv_eq_zero_col_major.json' );
var OFFSETS_LEFT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/offsets/left_lastv_eq_zero_col_major.json' );
var NEGATIVE_STRIDES_LEFT_LASTV_EQ_ZERO_COL_MAJOR = require( './fixtures/negative_strides/left_lastv_eq_zero_col_major.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlarf1f, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 14', function test( t ) {
	t.strictEqual( dlarf1f.length, 14, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a valid side', function test( t ) {
	var values;
	var work;
	var V;
	var C;
	var i;

	C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
	V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
	work = new Float64Array( 3 );

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
			dlarf1f( value, 3, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a valid stride', function test( t ) {
	var work;
	var V;
	var C;

	C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
	V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
	work = new Float64Array( 3 );

	t.throws( badValue( 0 ), RangeError, 'throws an error when provided ' + 0 );
	t.end();

	function badValue( value ) {
		return function badValue() {
			dlarf1f( 'left', 3, 3, V, value, 0, 1.0, C, 3, 1, 0, work, 1, 0 );
		};
	}
});

tape( 'the function returns the array unchanged if `tau` is zero', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = TAU_EQ_ZERO;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, row-major)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LEFT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, column-major)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LEFT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, row-major)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LEFT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, column-major)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LEFT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, row-major)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = RIGHT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, column-major)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = RIGHT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, row-major)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = RIGHT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, column-major)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = RIGHT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, row-major, mixed strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = MIXED_STRIDES_RIGHT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, row-major, negative strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = NEGATIVE_STRIDES_RIGHT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, row-major, large strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LARGE_STRIDES_RIGHT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, row-major, offsets)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = OFFSETS_RIGHT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, column-major, negative strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = NEGATIVE_STRIDES_RIGHT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, column-major, mixed strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = MIXED_STRIDES_RIGHT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, column-major, large strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LARGE_STRIDES_RIGHT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv > 0, column-major, offsets)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = OFFSETS_RIGHT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, row-major, mixed strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = MIXED_STRIDES_RIGHT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, row-major, negative strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = NEGATIVE_STRIDES_RIGHT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, row-major, large strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LARGE_STRIDES_RIGHT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, row-major, offsets)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = OFFSETS_RIGHT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, column-major, negative strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = NEGATIVE_STRIDES_RIGHT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, column-major, mixed strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = MIXED_STRIDES_RIGHT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, column-major, large strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LARGE_STRIDES_RIGHT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=right, lastv = 0, column-major, offsets)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = OFFSETS_RIGHT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, row-major, negative strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = NEGATIVE_STRIDES_LEFT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, row-major, mixed strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = MIXED_STRIDES_LEFT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, row-major, large strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LARGE_STRIDES_LEFT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, row-major, offsets)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = OFFSETS_LEFT_LASTV_GT_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, column-major, mixed strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = MIXED_STRIDES_LEFT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, column-major, large strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LARGE_STRIDES_LEFT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, column-major, offsets)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = OFFSETS_LEFT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv > 0, column-major, negative strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = NEGATIVE_STRIDES_LEFT_LASTV_GT_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, row-major, mixed strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = MIXED_STRIDES_LEFT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, row-major, large strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LARGE_STRIDES_LEFT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, row-major, offsets)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = OFFSETS_LEFT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, row-major, negative strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = NEGATIVE_STRIDES_LEFT_LASTV_EQ_ZERO_ROW_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, column-major, mixed strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = MIXED_STRIDES_LEFT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, column-major, large strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = LARGE_STRIDES_LEFT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, column-major, offsets)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = OFFSETS_LEFT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});

tape( 'the function applies an elementary reflector (side=left, lastv = 0, column-major, negative strides)', function test( t ) {
	var expectedC;
	var data;
	var work;
	var out;
	var V;
	var C;

	data = NEGATIVE_STRIDES_LEFT_LASTV_EQ_ZERO_COL_MAJOR;

	V = new Float64Array( data.V );
	C = new Float64Array( data.C );
	work = new Float64Array( data.work );

	out = dlarf1f( data.side, data.M, data.N, V, data.strideV, data.offsetV, data.tau, C, data.strideC1, data.strideC2, data.offsetC, work, data.strideWork, data.offsetWork );
	expectedC = new Float64Array( data.C_out );

	t.deepEqual( out, expectedC, 'returns expected value' );
	t.end();
});
