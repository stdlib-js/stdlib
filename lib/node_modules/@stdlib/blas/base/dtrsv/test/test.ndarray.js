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
var Float64Array = require( '@stdlib/array/float64' );
var dtrsv = require( './../lib/ndarray.js' );


// FIXTURES //

var rlntnu = require( './fixtures/row_major_l_nt_nu.json' );
var rltnu = require( './fixtures/row_major_l_t_nu.json' );
var rlntu = require( './fixtures/row_major_l_nt_u.json' );
var rltu = require( './fixtures/row_major_l_t_u.json' );
var runtnu = require( './fixtures/row_major_u_nt_nu.json' );
var runtu = require( './fixtures/row_major_u_nt_u.json' );
var rutnu = require( './fixtures/row_major_u_t_nu.json' );
var rutu = require( './fixtures/row_major_u_t_u.json' );
var rxt = require( './fixtures/row_major_xt.json' );
var rxn = require( './fixtures/row_major_xn.json' );
var roa = require( './fixtures/row_major_oa.json' );
var rsa1sa2 = require( './fixtures/row_major_sa1_sa2.json' );
var rsa1nsa2 = require( './fixtures/row_major_sa1n_sa2.json' );
var rsa1sa2n = require( './fixtures/row_major_sa1_sa2n.json' );
var rsa1nsa2n = require( './fixtures/row_major_sa1n_sa2n.json' );
var rcap = require( './fixtures/row_major_complex_access_pattern.json' );

var clntnu = require( './fixtures/column_major_l_nt_nu.json' );
var cltnu = require( './fixtures/column_major_l_t_nu.json' );
var clntu = require( './fixtures/column_major_l_nt_u.json' );
var cltu = require( './fixtures/column_major_l_t_u.json' );
var cuntnu = require( './fixtures/column_major_u_nt_nu.json' );
var cuntu = require( './fixtures/column_major_u_nt_u.json' );
var cutnu = require( './fixtures/column_major_u_t_nu.json' );
var cutu = require( './fixtures/column_major_u_t_u.json' );
var cxt = require( './fixtures/column_major_xt.json' );
var cxn = require( './fixtures/column_major_xn.json' );
var coa = require( './fixtures/column_major_oa.json' );
var csa1sa2 = require( './fixtures/column_major_sa1_sa2.json' );
var csa1nsa2 = require( './fixtures/column_major_sa1n_sa2.json' );
var csa1sa2n = require( './fixtures/column_major_sa1_sa2n.json' );
var csa1nsa2n = require( './fixtures/column_major_sa1_sa2n.json' );
var ccap = require( './fixtures/column_major_complex_access_pattern.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtrsv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 11', function test( t ) {
	t.strictEqual( dtrsv.length, 11, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rutu;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtrsv( value, data.trans, data.diag, data.N, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float64Array( data.x ), data.strideX, data.offsetX );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rutu;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtrsv( data.uplo, value, data.diag, data.N, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float64Array( data.x ), data.strideX, data.offsetX );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rutu;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtrsv( data.uplo, data.trans, value, data.N, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float64Array( data.x ), data.strideX, data.offsetX );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rutu;

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
			dtrsv( data.uplo, data.trans, data.diag, value, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float64Array( data.x ), data.strideX, data.offsetX );
		};
	}
});

tape( 'the function throws an error if provided an invalid tenth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rutu;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtrsv( data.uplo, data.trans, data.diag, data.N, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float64Array( data.x ), value, data.offsetX );
		};
	}
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (row-major, lower, no transpose, non-unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rlntnu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (column-major, lower, no transpose, non-unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = clntnu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (row-major, lower, transpose, non-unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rltnu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (column-major, lower, transpose, non-unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cltnu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (row-major, lower, no transpose, unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rlntu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (column-major, lower, no transpose, unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = clntu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (row-major, lower, transpose, unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rltu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (column-major, lower, transpose, unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cltu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (row-major, upper, no transpose, non-unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = runtnu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (column-major, upper, no transpose, non-unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cuntnu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (row-major, upper, no transpose, unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = runtu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (column-major, upper, no transpose, unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cuntu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (row-major, upper, transpose, non-unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rutnu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (column-major, upper, transpose, non-unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cutnu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (row-major, upper, transpose, unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rutu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function solves one of the systems of equations `A*x = b` or `A^T*x = b` (column-major, upper, transpose, unit)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cutu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rxt;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cxt;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input vector', function test( t ) {
	var data;
	var out;
	var a;
	var x;

	data = rutu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero, the function returns the input vector unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rutu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x );

	out = dtrsv( data.uplo, data.trans, data.diag, 0, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero, the function returns the input vector unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cutu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x );

	out = dtrsv( data.uplo, data.trans, data.diag, 0, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1sa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1sa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1nsa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1nsa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1sa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1sa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides for `A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1nsa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides for `A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1nsa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `A` offset (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = roa;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `A` offset (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = coa;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rxn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cxn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rcap;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = ccap;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.x_out );

	out = dtrsv( data.uplo, data.trans, data.diag, data.N, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
