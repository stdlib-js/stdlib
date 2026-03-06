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
var ones = require( '@stdlib/array/ones' );
var ssymv = require( './../lib/ssymv.js' );


// FIXTURES //

var ru = require( './fixtures/row_major_upper.json' );
var rl = require( './fixtures/row_major_lower.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );
var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyn = require( './fixtures/row_major_xpyn.json' );
var rxnyn = require( './fixtures/row_major_xnyn.json' );

var cu = require( './fixtures/column_major_upper.json' );
var cl = require( './fixtures/column_major_lower.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );
var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyn = require( './fixtures/column_major_xpyn.json' );
var cxnyn = require( './fixtures/column_major_xnyn.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ssymv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 11', function test( t ) {
	t.strictEqual( ssymv.length, 11, 'returns expected value' );
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
			ssymv( value, data.uplo, data.N, data.alpha, new Float32Array( data.a ), data.lda, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
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
			ssymv( data.order, value, data.N, data.alpha, new Float32Array( data.a ), data.lda, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
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
			ssymv( data.order, data.uplo, value, data.alpha, new Float32Array( data.a ), data.lda, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument', function test( t ) {
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
			ssymv( data.order, data.uplo, data.N, data.alpha, new Float32Array( data.a ), value, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
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
			ssymv( data.order, data.uplo, data.N, data.alpha, new Float32Array( data.a ), data.lda, new Float32Array( data.x ), value, data.beta, new Float32Array( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid eleventh argument', function test( t ) {
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
			ssymv( data.order, data.uplo, data.N, data.alpha, new Float32Array( data.a ), data.lda, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), value );
		};
	}
});

tape( 'the function performs the matrix-vector operation `y = α*A*x + β*y` (row-major, upper)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ru;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = α*A*x + β*y` (column-major, upper)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cu;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = α*A*x + β*y` (row-major, lower)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rl;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = α*A*x + β*y` (column-major, lower)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cl;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyp;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxpyp;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxnyp;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxnyp;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `y` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyn;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `y` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxpyn;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input vector', function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyp;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constants are zero and unity, respectively, the function returns the second input vector unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rl;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y );

	out = ssymv( data.order, data.uplo, 0, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ssymv( data.order, data.uplo, data.N, 0.0, a, data.lda, x, data.strideX, 1.0, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constants are zero and unity, respectively, the function returns the second input vector unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cl;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y );

	out = ssymv( data.order, data.uplo, 0, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ssymv( data.order, data.uplo, data.N, 0.0, a, data.lda, x, data.strideX, 1.0, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (row-major, upper)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = ones( 9, 'float32' );
	x = ones( 3, 'float32' );
	y = ones( 3, 'float32' );

	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	out = ssymv( 'row-major', 'upper', 3, 0.0, a, 3, x, 1, 5.0, y, 1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = ssymv( 'row-major', 'upper', 3, 0.0, a, 3, x, 1, 0.0, y, -1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (row-major, lower)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = ones( 9, 'float32' );
	x = ones( 3, 'float32' );
	y = ones( 3, 'float32' );

	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	out = ssymv( 'row-major', 'lower', 3, 0.0, a, 3, x, 1, 5.0, y, -1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = ssymv( 'row-major', 'lower', 3, 0.0, a, 3, x, 1, 0.0, y, 1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (column-major, upper)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = ones( 9, 'float32' );
	x = ones( 3, 'float32' );
	y = ones( 3, 'float32' );

	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	out = ssymv( 'column-major', 'upper', 3, 0.0, a, 3, x, 1, 5.0, y, 1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = ssymv( 'column-major', 'upper', 3, 0.0, a, 3, x, 1, 0.0, y, -1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (column-major, lower)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = ones( 9, 'float32' );
	x = ones( 3, 'float32' );
	y = ones( 3, 'float32' );

	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	out = ssymv( 'column-major', 'lower', 3, 0.0, a, 3, x, 1, 5.0, y, -1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = ssymv( 'column-major', 'lower', 3, 0.0, a, 3, x, 1, 0.0, y, 1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxnyn;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxnyn;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = ssymv( data.order, data.uplo, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
