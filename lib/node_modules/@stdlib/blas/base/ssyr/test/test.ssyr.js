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
var Float32Array = require( '@stdlib/array/float32' );
var ssyr = require( './../lib/ssyr.js' );


// FIXTURES //

var ru = require( './fixtures/row_major_u.json' );
var rl = require( './fixtures/row_major_l.json' );
var rxp = require( './fixtures/row_major_xp.json' );
var rxn = require( './fixtures/row_major_xn.json' );

var cu = require( './fixtures/column_major_u.json' );
var cl = require( './fixtures/column_major_l.json' );
var cxp = require( './fixtures/column_major_xp.json' );
var cxn = require( './fixtures/column_major_xn.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ssyr, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( ssyr.length, 8, 'returns expected value' );
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
			ssyr( value, data.uplo, data.N, data.alpha, new Float32Array( data.x ), data.strideX, new Float32Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
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
			ssyr( data.order, value, data.N, data.alpha, new Float32Array( data.x ), data.strideX, new Float32Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
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
			ssyr( data.order, data.uplo, value, data.alpha, new Float32Array( data.x ), data.strideX, new Float32Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument', function test( t ) {
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
			ssyr( data.order, data.uplo, data.N, data.alpha, new Float32Array( data.x ), value, new Float32Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		2,
		1,
		0,
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
			ssyr( data.order, data.uplo, data.N, data.alpha, new Float32Array( data.x ), data.strideX, new Float32Array( data.A ), value );
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

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A_out );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (column-major, upper)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cu;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A_out );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (row-major, lower)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rl;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A_out );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (column-major, lower)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cl;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A_out );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input matrix `A`', function test( t ) {
	var data;
	var out;
	var a;
	var x;

	data = ru;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
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

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A );

	out = ssyr( data.order, data.uplo, 0, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	out = ssyr( data.order, data.uplo, data.N, 0.0, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constant is zero, the function returns the input matrix `A` unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cl;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A );

	out = ssyr( data.order, data.uplo, 0, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	out = ssyr( data.order, data.uplo, data.N, 0.0, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rxp;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A_out );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cxp;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A_out );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rxn;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A_out );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cxn;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.A_out );

	out = ssyr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
