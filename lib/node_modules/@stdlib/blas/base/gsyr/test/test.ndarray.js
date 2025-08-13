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

var tape = require( 'tape' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var copy = require( '@stdlib/array/base/copy' );
var gsyr = require( './../lib/ndarray.js' );


// FIXTURES //

var ru = require( './fixtures/row_major_u.json' );
var rl = require( './fixtures/row_major_l.json' );
var rxp = require( './fixtures/row_major_xp.json' );
var rxn = require( './fixtures/row_major_xn.json' );
var roa = require( './fixtures/row_major_oa.json' );
var rox = require( './fixtures/row_major_ox.json' );
var rsa1sa2 = require( './fixtures/row_major_sa1_sa2.json' );
var rsa1nsa2 = require( './fixtures/row_major_sa1n_sa2.json' );
var rsa1sa2n = require( './fixtures/row_major_sa1_sa2n.json' );
var rsa1nsa2n = require( './fixtures/row_major_sa1n_sa2n.json' );
var rcap = require( './fixtures/row_major_complex_access_pattern.json' );

var cu = require( './fixtures/column_major_u.json' );
var cl = require( './fixtures/column_major_l.json' );
var cxp = require( './fixtures/column_major_xp.json' );
var cxn = require( './fixtures/column_major_xn.json' );
var coa = require( './fixtures/column_major_oa.json' );
var cox = require( './fixtures/column_major_ox.json' );
var csa1sa2 = require( './fixtures/column_major_sa1_sa2.json' );
var csa1nsa2 = require( './fixtures/column_major_sa1n_sa2.json' );
var csa1sa2n = require( './fixtures/column_major_sa1_sa2n.json' );
var csa1nsa2n = require( './fixtures/column_major_sa1n_sa2n.json' );
var ccap = require( './fixtures/column_major_complex_access_pattern.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gsyr, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( gsyr.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

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
			gsyr( value, data.N, data.alpha, data.x, data.strideX, data.offsetX, data.A, data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

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
			gsyr( value, data.N, data.alpha, toAccessorArray( data.x ), data.strideX, data.offsetX, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

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
			gsyr( data.uplo, value, data.alpha, data.x, data.strideX, data.offsetX, data.A, data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

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
			gsyr( data.uplo, value, data.alpha, toAccessorArray( data.x ), data.strideX, data.offsetX, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gsyr( data.uplo, data.N, data.alpha, data.x, value, data.offsetX, data.A, data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gsyr( data.uplo, data.N, data.alpha, toAccessorArray( data.x ), value, data.offsetX, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gsyr( data.uplo, data.N, data.alpha, data.x, data.strideX, data.offsetX, data.A, value, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gsyr( data.uplo, data.N, data.alpha, toAccessorArray( data.x ), data.strideX, data.offsetX, toAccessorArray( data.A ), value, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid ninth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gsyr( data.uplo, data.N, data.alpha, data.x, data.strideX, data.offsetX, data.A, data.strideA1, value, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid ninth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gsyr( data.uplo, data.N, data.alpha, toAccessorArray( data.x ), data.strideX, data.offsetX, toAccessorArray( data.A ), data.strideA1, value, data.offsetA );
		};
	}
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (row-major, upper)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = ru;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (row-major, upper) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = ru;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (column-major, upper)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cu;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (column-major, upper) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = cu;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (row-major, lower)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rl;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (row-major, lower) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rl;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (column-major, lower)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cl;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (column-major, lower) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = cl;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input matrix `A`', function test( t ) {
	var data;
	var out;
	var a;
	var x;

	data = ru;

	a = copy( data.A );
	x = copy( data.x );

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input matrix `A` (accessors)', function test( t ) {
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = ru;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constant is zero, the function returns the input matrix `A` unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rl;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A;

	out = gsyr( data.uplo, 0, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	out = gsyr( data.uplo, data.N, 0.0, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constant is zero, the function returns the input matrix `A` unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rl;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A;

	out = gsyr( data.uplo, 0, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	out = gsyr( data.uplo, data.N, 0.0, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constant is zero, the function returns the input matrix `A` unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cl;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A;

	out = gsyr( data.uplo, 0, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	out = gsyr( data.uplo, data.N, 0.0, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constant is zero, the function returns the input matrix `A` unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = cl;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A;

	out = gsyr( data.uplo, 0, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	out = gsyr( data.uplo, data.N, 0.0, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1sa2;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rsa1sa2;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1sa2;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = csa1sa2;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1nsa2;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rsa1nsa2;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1nsa2;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = csa1nsa2;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1sa2n;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rsa1sa2n;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1sa2n;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = csa1sa2n;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides for both dimensions of `A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1nsa2n;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides for both dimensions of `A` (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rsa1nsa2n;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides for both dimensions of `A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1nsa2n;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides for both dimensions of `A` (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = csa1nsa2n;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `A` offset (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = roa;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `A` offset (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = roa;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `A` offset (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = coa;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `A` offset (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = coa;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rxp;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a `x` stride (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rxp;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cxp;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a `x` stride (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = cxp;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rxn;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rxn;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cxn;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = cxn;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a `x` offset (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rox;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a `x` offset (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rox;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a `x` offset (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cox;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a `x` offset (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = cox;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rcap;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = rcap;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = ccap;

	a = copy( data.A );
	x = copy( data.x );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (column-major) (accessors)', function test( t ) {
	var expected;
	var abuf;
	var data;
	var out;
	var a;
	var x;

	data = ccap;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );

	expected = data.A_out;

	out = gsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});
