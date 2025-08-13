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

/* eslint-disable max-len */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dger = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dger instanceof Error )
};


// FIXTURES //

var cm = require( './fixtures/column_major.json' );
var coa = require( './fixtures/column_major_oa.json' );
var cox = require( './fixtures/column_major_ox.json' );
var coy = require( './fixtures/column_major_oy.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );
var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyn = require( './fixtures/column_major_xpyn.json' );
var cxnyn = require( './fixtures/column_major_xnyn.json' );
var csa1sa2 = require( './fixtures/column_major_sa1_sa2.json' );
var csa1nsa2 = require( './fixtures/column_major_sa1n_sa2.json' );
var csa1sa2n = require( './fixtures/column_major_sa1_sa2n.json' );
var csa1nsa2n = require( './fixtures/column_major_sa1n_sa2n.json' );
var ccap = require( './fixtures/column_major_complex_access_pattern.json' );
var cx0 = require( './fixtures/column_major_x_zeros.json' );
var cy0 = require( './fixtures/column_major_y_zeros.json' );

var rm = require( './fixtures/row_major.json' );
var roa = require( './fixtures/row_major_oa.json' );
var rox = require( './fixtures/row_major_ox.json' );
var roy = require( './fixtures/row_major_oy.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );
var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyn = require( './fixtures/row_major_xpyn.json' );
var rxnyn = require( './fixtures/row_major_xnyn.json' );
var rsa1sa2 = require( './fixtures/row_major_sa1_sa2.json' );
var rsa1nsa2 = require( './fixtures/row_major_sa1n_sa2.json' );
var rsa1sa2n = require( './fixtures/row_major_sa1_sa2n.json' );
var rsa1nsa2n = require( './fixtures/row_major_sa1n_sa2n.json' );
var rcap = require( './fixtures/row_major_complex_access_pattern.json' );
var rx0 = require( './fixtures/row_major_x_zeros.json' );
var ry0 = require( './fixtures/row_major_y_zeros.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dger, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 13', opts, function test( t ) {
	t.strictEqual( dger.length, 13, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

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
			dger( value, data.N, data.alpha, new Float64Array( data.x ), data.strideX, data.offsetX, new Float64Array( data.y ), data.strideY, data.offsetY, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

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
			dger( data.M, value, data.alpha, new Float64Array( data.x ), data.strideX, data.offsetX, new Float64Array( data.y ), data.strideY, data.offsetY, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dger( data.M, data.N, data.alpha, new Float64Array( data.x ), value, data.offsetX, new Float64Array( data.y ), data.strideY, data.offsetY, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dger( data.M, data.N, data.alpha, new Float64Array( data.x ), data.strideX, data.offsetX, new Float64Array( data.y ), value, data.offsetY, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function the rank 1 operation `A = α*x*y^T + A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function the rank 1 operation `A = α*x*y^T + A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input matrix (row-major)', opts, function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input matrix (column-major)', opts, function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the input matrix unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dger( 0, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = dger( data.M, 0, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the input matrix unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dger( 0, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = dger( data.M, 0, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0.0`, the function returns the input matrix unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dger( data.M, data.N, 0.0, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0.0`, the function returns the input matrix unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dger( data.M, data.N, 0.0, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros, the function returns the input matrix unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rx0;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `x` contains only zeros, the function returns the input matrix unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cx0;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `y` contains only zeros, the function returns the input matrix unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ry0;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `y` contains only zeros, the function returns the input matrix unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cy0;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rsa1sa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = csa1sa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rsa1nsa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = csa1nsa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rsa1sa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = csa1sa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides for `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rsa1nsa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides for `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = csa1nsa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = roa;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = coa;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxpyp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxnyp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxnyp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative `y` stride (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative `y` stride (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxpyn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides for `x` and `y` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxnyn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides for `x` and `y` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxnyn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `x` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rox;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `x` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cox;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `y` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = roy;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `y` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = coy;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rcap;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ccap;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.M, data.N, data.alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
