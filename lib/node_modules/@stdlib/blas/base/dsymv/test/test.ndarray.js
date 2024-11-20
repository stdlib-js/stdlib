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
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var ones = require( '@stdlib/array/ones' );
var dsymv = require( './../lib/ndarray.js' );


// FIXTURES //

var rxoyt = require( './fixtures/row_major_xoyt.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );
var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyn = require( './fixtures/row_major_xpyn.json' );
var rxnyn = require( './fixtures/row_major_xnyn.json' );

var cxoyt = require( './fixtures/column_major_xoyt.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );
var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyn = require( './fixtures/column_major_xpyn.json' );
var cxnyn = require( './fixtures/column_major_xnyn.json' );


// FUNCTIONS //

/**
* Tests for element-wise approximate equality.
*
* @private
* @param {Object} t - test object
* @param {Collection} actual - actual values
* @param {Collection} expected - expected values
* @param {number} rtol - relative tolerance
*/
function isApprox( t, actual, expected, rtol ) {
	var delta;
	var tol;
	var i;

	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		if ( actual[ i ] === expected[ i ] ) {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		} else {
			delta = abs( actual[ i ] - expected[ i ] );
			tol = rtol * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. actual: '+actual[ i ]+'. expected: '+expected[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsymv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 13', function test( t ) {
	t.strictEqual( dsymv.length, 13, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var i;

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
			dsymv( value, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.a ), rxpyp.lda, new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var i;

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
			dsymv( rxpyp.order, value, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.a ), rxpyp.lda, new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
	var values;
	var i;

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
			dsymv( rxpyp.order, rxpyp.uplo, value, rxpyp.alpha, new Float64Array( rxpyp.a ), rxpyp.lda, new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument', function test( t ) {
	var values;
	var i;

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
			dsymv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.a ), value, new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument', function test( t ) {
	var values;
	var i;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsymv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.a ), rxpyp.lda, new Float64Array( rxpyp.x ), value, rxpyp.offsetX, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
		};
	}
});

tape( 'the function throws an error if provided an invalid twelfth argument', function test( t ) {
	var values;
	var i;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsymv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.a ), rxpyp.lda, new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float64Array( rxpyp.y ), value, rxpyp.offsetY );
		};
	}
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix (row-major, sx=1, sy=1)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( rxpyp.A );
	x = new Float64Array( rxpyp.x );
	y = new Float64Array( rxpyp.y );

	expected = new Float64Array( rxpyp.y_out );

	out = dsymv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, a, rxpyp.lda, x, rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, y, rxpyp.strideY, rxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix (column-major, sx=1, sy=1)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( cxpyp.A );
	x = new Float64Array( cxpyp.x );
	y = new Float64Array( cxpyp.y );

	expected = new Float64Array( cxpyp.y_out );

	out = dsymv( cxpyp.order, cxpyp.uplo, cxpyp.N, cxpyp.alpha, a, cxpyp.lda, x, cxpyp.strideX, cxpyp.offsetX, cxpyp.beta, y, cxpyp.strideY, cxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix (row-major, sx=1, sy=2)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( rxoyt.A );
	x = new Float64Array( rxoyt.x );
	y = new Float64Array( rxoyt.y );

	expected = new Float64Array( rxoyt.y_out );

	out = dsymv( rxoyt.order, rxoyt.uplo, rxoyt.N, rxoyt.alpha, a, rxoyt.lda, x, rxoyt.strideX, rxoyt.offsetX, rxoyt.beta, y, rxoyt.strideY, rxoyt.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix (column-major, sx=1, sy=2)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( cxoyt.A );
	x = new Float64Array( cxoyt.x );
	y = new Float64Array( cxoyt.y );

	expected = new Float64Array( cxoyt.y_out );

	out = dsymv( cxoyt.order, cxoyt.uplo, cxoyt.N, cxoyt.alpha, a, cxoyt.lda, x, cxoyt.strideX, cxoyt.offsetX, cxoyt.beta, y, cxoyt.strideY, cxoyt.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix (row-major, sx=1, sy=-1)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( rxpyn.A );
	x = new Float64Array( rxpyn.x );
	y = new Float64Array( rxpyn.y );

	expected = new Float64Array( rxpyn.y_out );

	out = dsymv( rxpyn.order, rxpyn.uplo, rxpyn.N, rxpyn.alpha, a, rxpyn.lda, x, rxpyn.strideX, rxpyn.offsetX, rxpyn.beta, y, rxpyn.strideY, rxpyn.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix (column-major, sx=1, sy=-1)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( cxpyn.A );
	x = new Float64Array( cxpyn.x );
	y = new Float64Array( cxpyn.y );

	expected = new Float64Array( cxpyn.y_out );

	out = dsymv( cxpyn.order, cxpyn.uplo, cxpyn.N, cxpyn.alpha, a, cxpyn.lda, x, cxpyn.strideX, cxpyn.offsetX, cxpyn.beta, y, cxpyn.strideY, cxpyn.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix (row-major, sx=-1, sy=1)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( rxnyp.A );
	x = new Float64Array( rxnyp.x );
	y = new Float64Array( rxnyp.y );

	expected = new Float64Array( rxnyp.y_out );

	out = dsymv( rxnyp.order, rxnyp.uplo, rxnyp.N, rxnyp.alpha, a, rxnyp.lda, x, rxnyp.strideX, rxnyp.offsetX, rxnyp.beta, y, rxnyp.strideY, rxnyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix (column-major, sx=-1, sy=1)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( cxnyp.A );
	x = new Float64Array( cxnyp.x );
	y = new Float64Array( cxnyp.y );

	expected = new Float64Array( cxnyp.y_out );

	out = dsymv( cxnyp.order, cxnyp.uplo, cxnyp.N, cxnyp.alpha, a, cxnyp.lda, x, cxnyp.strideX, cxnyp.offsetX, cxnyp.beta, y, cxnyp.strideY, cxnyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function returns a reference to the second input vector', function test( t ) {
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( rxpyp.A );
	x = new Float64Array( rxpyp.x );
	y = new Float64Array( rxpyp.y );

	out = dsymv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, a, rxpyp.lda, x, rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, y, rxpyp.strideY, rxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constants are zero and unity, respectively, the function returns the second input vector unchanged (row-major)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( rxpyp.A );
	x = new Float64Array( rxpyp.x );
	y = new Float64Array( rxpyp.y );

	expected = new Float64Array( rxpyp.y );

	out = dsymv( rxpyp.order, rxpyp.uplo, 0, rxpyp.alpha, a, rxpyp.lda, x, rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, y, rxpyp.strideY, rxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	out = dsymv( rxpyp.order, rxpyp.uplo, rxpyp.N, 0.0, a, rxpyp.lda, x, rxpyp.strideX, rxpyp.offsetX, 1.0, y, rxpyp.strideY, rxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constants are zero and unity, respectively, the function returns the second input vector unchanged (column-major)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( cxpyp.A );
	x = new Float64Array( cxpyp.x );
	y = new Float64Array( cxpyp.y );

	expected = new Float64Array( cxpyp.y );

	out = dsymv( cxpyp.order, cxpyp.uplo, 0, cxpyp.alpha, a, cxpyp.lda, x, cxpyp.strideX, cxpyp.offsetX, cxpyp.beta, y, cxpyp.strideY, cxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	out = dsymv( cxpyp.order, cxpyp.uplo, cxpyp.N, 0.0, a, cxpyp.lda, x, cxpyp.strideX, cxpyp.offsetX, 1.0, y, cxpyp.strideY, cxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (row-major, upper)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = ones( 9, 'float64' );
	x = ones( 3, 'float64' );
	y = ones( 3, 'float64' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );

	out = dsymv( 'row-major', 'upper', 3, 0.0, a, 3, x, 1, 0, 5.0, y, 1, 0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );

	out = dsymv( 'row-major', 'upper', 3, 0.0, a, 3, x, 1, 0, 0.0, y, -1, 2 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (row-major, lower)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = ones( 9, 'float64' );
	x = ones( 3, 'float64' );
	y = ones( 3, 'float64' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );

	out = dsymv( 'row-major', 'lower', 3, 0.0, a, 3, x, 1, 0, 5.0, y, -1, 2 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );

	out = dsymv( 'row-major', 'lower', 3, 0.0, a, 3, x, 1, 0, 0.0, y, 1, 0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (column-major, upper)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = ones( 9, 'float64' );
	x = ones( 3, 'float64' );
	y = ones( 3, 'float64' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );

	out = dsymv( 'column-major', 'upper', 3, 0.0, a, 3, x, 1, 0, 5.0, y, 1, 0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );

	out = dsymv( 'column-major', 'upper', 3, 0.0, a, 3, x, 1, 0, 0.0, y, -1, 2 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (column-major, lower)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = ones( 9, 'float64' );
	x = ones( 3, 'float64' );
	y = ones( 3, 'float64' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );

	out = dsymv( 'column-major', 'lower', 3, 0.0, a, 3, x, 1, 0, 5.0, y, -1, 2 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );

	out = dsymv( 'column-major', 'lower', 3, 0.0, a, 3, x, 1, 0, 0.0, y, 1, 0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( rxnyn.A );
	x = new Float64Array( rxnyn.x );
	y = new Float64Array( rxnyn.y );

	expected = new Float64Array( rxnyn.y_out );

	out = dsymv( rxnyn.order, rxnyn.uplo, rxnyn.N, rxnyn.alpha, a, rxnyn.lda, x, rxnyn.strideX, rxnyn.offsetX, rxnyn.beta, y, rxnyn.strideY, rxnyn.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function supports complex access patterns (column-major)', function test( t ) {
	var expected;
	var out;
	var a;
	var x;
	var y;

	a = new Float64Array( cxnyn.A );
	x = new Float64Array( cxnyn.x );
	y = new Float64Array( cxnyn.y );

	expected = new Float64Array( cxnyn.y_out );

	out = dsymv( cxnyn.order, cxnyn.uplo, cxnyn.N, cxnyn.alpha, a, cxnyn.lda, x, cxnyn.strideX, cxnyn.offsetX, cxnyn.beta, y, cxnyn.strideY, cxnyn.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});
