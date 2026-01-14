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
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var ones = require( '@stdlib/array/ones' );
var sspmv = require( './../lib/ndarray.js' );


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
	t.strictEqual( typeof sspmv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 12', function test( t ) {
	t.strictEqual( sspmv.length, 12, 'returns expected value' );
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
			sspmv( value, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float32Array( rxpyp.AP ), new Float32Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float32Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
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
			sspmv( rxpyp.order, value, rxpyp.N, rxpyp.alpha, new Float32Array( rxpyp.AP ), new Float32Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float32Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
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
			sspmv( rxpyp.order, rxpyp.uplo, value, rxpyp.alpha, new Float32Array( rxpyp.AP ), new Float32Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float32Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
		};
	}
});

tape( 'the function throws an error if provided an invalid seventh argument', function test( t ) {
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
			sspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float32Array( rxpyp.AP ), new Float32Array( rxpyp.x ), value, rxpyp.offsetX, rxpyp.beta, new Float32Array( rxpyp.y ), rxpyp.strideY, rxpyp.offsetY );
		};
	}
});

tape( 'the function throws an error if provided an invalid eleventh argument', function test( t ) {
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
			sspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float32Array( rxpyp.AP ), new Float32Array( rxpyp.x ), rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, new Float32Array( rxpyp.y ), value, rxpyp.offsetY );
		};
	}
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `n` element vectors, and `A` is an `n` by `n` symmetric matrix supplied in packed form (row-major, sx=1, sy=1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( rxpyp.AP );
	x = new Float32Array( rxpyp.x );
	y = new Float32Array( rxpyp.y );

	expected = new Float32Array( rxpyp.y_out );

	out = sspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, ap, x, rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, y, rxpyp.strideY, rxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `n` element vectors, and `A` is an `n` by `n` symmetric matrix supplied in packed form (column-major, sx=1, sy=1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( cxpyp.AP );
	x = new Float32Array( cxpyp.x );
	y = new Float32Array( cxpyp.y );

	expected = new Float32Array( cxpyp.y_out );

	out = sspmv( cxpyp.order, cxpyp.uplo, cxpyp.N, cxpyp.alpha, ap, x, cxpyp.strideX, cxpyp.offsetX, cxpyp.beta, y, cxpyp.strideY, cxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `n` element vectors, and `A` is an `n` by `n` symmetric matrix supplied in packed form (row-major, sx=1, sy=2)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( rxoyt.AP );
	x = new Float32Array( rxoyt.x );
	y = new Float32Array( rxoyt.y );

	expected = new Float32Array( rxoyt.y_out );

	out = sspmv( rxoyt.order, rxoyt.uplo, rxoyt.N, rxoyt.alpha, ap, x, rxoyt.strideX, rxoyt.offsetX, rxoyt.beta, y, rxoyt.strideY, rxoyt.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `n` element vectors, and `A` is an `n` by `n` symmetric matrix supplied in packed form (column-major, sx=1, sy=2)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( cxoyt.AP );
	x = new Float32Array( cxoyt.x );
	y = new Float32Array( cxoyt.y );

	expected = new Float32Array( cxoyt.y_out );

	out = sspmv( cxoyt.order, cxoyt.uplo, cxoyt.N, cxoyt.alpha, ap, x, cxoyt.strideX, cxoyt.offsetX, cxoyt.beta, y, cxoyt.strideY, cxoyt.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `n` element vectors, and `A` is an `n` by `n` symmetric matrix supplied in packed form (row-major, sx=1, sy=-1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( rxpyn.AP );
	x = new Float32Array( rxpyn.x );
	y = new Float32Array( rxpyn.y );

	expected = new Float32Array( rxpyn.y_out );

	out = sspmv( rxpyn.order, rxpyn.uplo, rxpyn.N, rxpyn.alpha, ap, x, rxpyn.strideX, rxpyn.offsetX, rxpyn.beta, y, rxpyn.strideY, rxpyn.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `n` element vectors, and `A` is an `n` by `n` symmetric matrix supplied in packed form (column-major, sx=1, sy=-1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( cxpyn.AP );
	x = new Float32Array( cxpyn.x );
	y = new Float32Array( cxpyn.y );

	expected = new Float32Array( cxpyn.y_out );

	out = sspmv( cxpyn.order, cxpyn.uplo, cxpyn.N, cxpyn.alpha, ap, x, cxpyn.strideX, cxpyn.offsetX, cxpyn.beta, y, cxpyn.strideY, cxpyn.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `n` element vectors, and `A` is an `n` by `n` symmetric matrix supplied in packed form (row-major, sx=-1, sy=1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( rxnyp.AP );
	x = new Float32Array( rxnyp.x );
	y = new Float32Array( rxnyp.y );

	expected = new Float32Array( rxnyp.y_out );

	out = sspmv( rxnyp.order, rxnyp.uplo, rxnyp.N, rxnyp.alpha, ap, x, rxnyp.strideX, rxnyp.offsetX, rxnyp.beta, y, rxnyp.strideY, rxnyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `n` element vectors, and `A` is an `n` by `n` symmetric matrix supplied in packed form (column-major, sx=-1, sy=1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( cxnyp.AP );
	x = new Float32Array( cxnyp.x );
	y = new Float32Array( cxnyp.y );

	expected = new Float32Array( cxnyp.y_out );

	out = sspmv( cxnyp.order, cxnyp.uplo, cxnyp.N, cxnyp.alpha, ap, x, cxnyp.strideX, cxnyp.offsetX, cxnyp.beta, y, cxnyp.strideY, cxnyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function returns a reference to the second input vector', function test( t ) {
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( rxpyp.AP );
	x = new Float32Array( rxpyp.x );
	y = new Float32Array( rxpyp.y );

	out = sspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, ap, x, rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, y, rxpyp.strideY, rxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constants are zero and unity, respectively, the function returns the second input vector unchanged (row-major)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( rxpyp.AP );
	x = new Float32Array( rxpyp.x );
	y = new Float32Array( rxpyp.y );

	expected = new Float32Array( rxpyp.y );

	out = sspmv( rxpyp.order, rxpyp.uplo, 0, rxpyp.alpha, ap, x, rxpyp.strideX, rxpyp.offsetX, rxpyp.beta, y, rxpyp.strideY, rxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	out = sspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, 0.0, ap, x, rxpyp.strideX, rxpyp.offsetX, 1.0, y, rxpyp.strideY, rxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constants are zero and unity, respectively, the function returns the second input vector unchanged (column-major)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( cxpyp.AP );
	x = new Float32Array( cxpyp.x );
	y = new Float32Array( cxpyp.y );

	expected = new Float32Array( cxpyp.y );

	out = sspmv( cxpyp.order, cxpyp.uplo, 0, cxpyp.alpha, ap, x, cxpyp.strideX, cxpyp.offsetX, cxpyp.beta, y, cxpyp.strideY, cxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	out = sspmv( cxpyp.order, cxpyp.uplo, cxpyp.N, 0.0, ap, x, cxpyp.strideX, cxpyp.offsetX, 1.0, y, cxpyp.strideY, cxpyp.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (row-major, upper)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = ones( 6, 'float32' );
	x = ones( 3, 'float32' );
	y = ones( 3, 'float32' );

	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	out = sspmv( 'row-major', 'upper', 3, 0.0, ap, x, 1, 0, 5.0, y, 1, 0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = sspmv( 'row-major', 'upper', 3, 0.0, ap, x, 1, 0, 0.0, y, -1, 2 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (row-major, lower)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = ones( 6, 'float32' );
	x = ones( 3, 'float32' );
	y = ones( 3, 'float32' );

	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	out = sspmv( 'row-major', 'lower', 3, 0.0, ap, x, 1, 0, 5.0, y, -1, 2 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = sspmv( 'row-major', 'lower', 3, 0.0, ap, x, 1, 0, 0.0, y, 1, 0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (column-major, upper)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = ones( 6, 'float32' );
	x = ones( 3, 'float32' );
	y = ones( 3, 'float32' );

	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	out = sspmv( 'column-major', 'upper', 3, 0.0, ap, x, 1, 0, 5.0, y, 1, 0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = sspmv( 'column-major', 'upper', 3, 0.0, ap, x, 1, 0, 0.0, y, -1, 2 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `α` is zero, the function scales the second input vector (column-major, lower)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = ones( 6, 'float32' );
	x = ones( 3, 'float32' );
	y = ones( 3, 'float32' );

	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	out = sspmv( 'column-major', 'lower', 3, 0.0, ap, x, 1, 0, 5.0, y, -1, 2 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = sspmv( 'column-major', 'lower', 3, 0.0, ap, x, 1, 0, 0.0, y, 1, 0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( rxnyn.AP );
	x = new Float32Array( rxnyn.x );
	y = new Float32Array( rxnyn.y );

	expected = new Float32Array( rxnyn.y_out );

	out = sspmv( rxnyn.order, rxnyn.uplo, rxnyn.N, rxnyn.alpha, ap, x, rxnyn.strideX, rxnyn.offsetX, rxnyn.beta, y, rxnyn.strideY, rxnyn.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function supports complex access patterns (column-major)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float32Array( cxnyn.AP );
	x = new Float32Array( cxnyn.x );
	y = new Float32Array( cxnyn.y );

	expected = new Float32Array( cxnyn.y_out );

	out = sspmv( cxnyn.order, cxnyn.uplo, cxnyn.N, cxnyn.alpha, ap, x, cxnyn.strideX, cxnyn.offsetX, cxnyn.beta, y, cxnyn.strideY, cxnyn.offsetY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});
