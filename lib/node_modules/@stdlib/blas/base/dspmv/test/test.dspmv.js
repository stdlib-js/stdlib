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
var dspmv = require( './../lib/dspmv.js' );


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
	t.strictEqual( typeof dspmv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( dspmv.length, 10, 'returns expected value' );
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
			dspmv( value, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.AP ), new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY );
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
			dspmv( rxpyp.order, value, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.AP ), new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY );
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
			dspmv( rxpyp.order, rxpyp.uplo, value, rxpyp.alpha, new Float64Array( rxpyp.AP ), new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY );
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
			dspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.AP ), new Float64Array( rxpyp.x ), value, rxpyp.beta, new Float64Array( rxpyp.y ), rxpyp.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid tenth argument', function test( t ) {
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
			dspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, new Float64Array( rxpyp.AP ), new Float64Array( rxpyp.x ), rxpyp.strideX, rxpyp.beta, new Float64Array( rxpyp.y ), value );
		};
	}
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form (row-major, sx=1, sy=1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( rxpyp.AP );
	x = new Float64Array( rxpyp.x );
	y = new Float64Array( rxpyp.y );

	expected = new Float64Array( rxpyp.y_out );

	out = dspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, ap, x, rxpyp.strideX, rxpyp.beta, y, rxpyp.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form (column-major, sx=1, sy=1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( cxpyp.AP );
	x = new Float64Array( cxpyp.x );
	y = new Float64Array( cxpyp.y );

	expected = new Float64Array( cxpyp.y_out );

	out = dspmv( cxpyp.order, cxpyp.uplo, cxpyp.N, cxpyp.alpha, ap, x, cxpyp.strideX, cxpyp.beta, y, cxpyp.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form (row-major, sx=1, sy=2)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( rxoyt.AP );
	x = new Float64Array( rxoyt.x );
	y = new Float64Array( rxoyt.y );

	expected = new Float64Array( rxoyt.y_out );

	out = dspmv( rxoyt.order, rxoyt.uplo, rxoyt.N, rxoyt.alpha, ap, x, rxoyt.strideX, rxoyt.beta, y, rxoyt.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form (column-major, sx=1, sy=2)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( cxoyt.AP );
	x = new Float64Array( cxoyt.x );
	y = new Float64Array( cxoyt.y );

	expected = new Float64Array( cxoyt.y_out );

	out = dspmv( cxoyt.order, cxoyt.uplo, cxoyt.N, cxoyt.alpha, ap, x, cxoyt.strideX, cxoyt.beta, y, cxoyt.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form (row-major, sx=1, sy=-1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( rxpyn.AP );
	x = new Float64Array( rxpyn.x );
	y = new Float64Array( rxpyn.y );

	expected = new Float64Array( rxpyn.y_out );

	out = dspmv( rxpyn.order, rxpyn.uplo, rxpyn.N, rxpyn.alpha, ap, x, rxpyn.strideX, rxpyn.beta, y, rxpyn.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form (column-major, sx=1, sy=-1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( cxpyn.AP );
	x = new Float64Array( cxpyn.x );
	y = new Float64Array( cxpyn.y );

	expected = new Float64Array( cxpyn.y_out );

	out = dspmv( cxpyn.order, cxpyn.uplo, cxpyn.N, cxpyn.alpha, ap, x, cxpyn.strideX, cxpyn.beta, y, cxpyn.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form (row-major, sx=-1, sy=1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( rxnyp.AP );
	x = new Float64Array( rxnyp.x );
	y = new Float64Array( rxnyp.y );

	expected = new Float64Array( rxnyp.y_out );

	out = dspmv( rxnyp.order, rxnyp.uplo, rxnyp.N, rxnyp.alpha, ap, x, rxnyp.strideX, rxnyp.beta, y, rxnyp.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form (column-major, sx=-1, sy=1)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( cxnyp.AP );
	x = new Float64Array( cxnyp.x );
	y = new Float64Array( cxnyp.y );

	expected = new Float64Array( cxnyp.y_out );

	out = dspmv( cxnyp.order, cxnyp.uplo, cxnyp.N, cxnyp.alpha, ap, x, cxnyp.strideX, cxnyp.beta, y, cxnyp.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});

tape( 'the function returns a reference to the second input vector', function test( t ) {
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( rxpyp.AP );
	x = new Float64Array( rxpyp.x );
	y = new Float64Array( rxpyp.y );

	out = dspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, rxpyp.alpha, ap, x, rxpyp.strideX, rxpyp.beta, y, rxpyp.strideY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constants are zero and unity, respectively, the function returns the second input vector unchanged (row-major)', function test( t ) {
	var expected;
	var out;
	var ap;
	var x;
	var y;

	ap = new Float64Array( rxpyp.AP );
	x = new Float64Array( rxpyp.x );
	y = new Float64Array( rxpyp.y );

	expected = new Float64Array( rxpyp.y );

	out = dspmv( rxpyp.order, rxpyp.uplo, 0, rxpyp.alpha, ap, x, rxpyp.strideX, rxpyp.beta, y, rxpyp.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	out = dspmv( rxpyp.order, rxpyp.uplo, rxpyp.N, 0.0, ap, x, rxpyp.strideX, 1.0, y, rxpyp.strideY );
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

	ap = new Float64Array( cxpyp.AP );
	x = new Float64Array( cxpyp.x );
	y = new Float64Array( cxpyp.y );

	expected = new Float64Array( cxpyp.y );

	out = dspmv( cxpyp.order, cxpyp.uplo, 0, cxpyp.alpha, ap, x, cxpyp.strideX, cxpyp.beta, y, cxpyp.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	out = dspmv( cxpyp.order, cxpyp.uplo, cxpyp.N, 0.0, ap, x, cxpyp.strideX, 1.0, y, cxpyp.strideY );
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

	ap = ones( 6, 'float64' );
	x = ones( 3, 'float64' );
	y = ones( 3, 'float64' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );

	out = dspmv( 'row-major', 'upper', 3, 0.0, ap, x, 1, 5.0, y, 1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );

	out = dspmv( 'row-major', 'upper', 3, 0.0, ap, x, 1, 0.0, y, -1 );
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

	ap = ones( 6, 'float64' );
	x = ones( 3, 'float64' );
	y = ones( 3, 'float64' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );

	out = dspmv( 'row-major', 'lower', 3, 0.0, ap, x, 1, 5.0, y, -1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );

	out = dspmv( 'row-major', 'lower', 3, 0.0, ap, x, 1, 0.0, y, 1 );
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

	ap = ones( 6, 'float64' );
	x = ones( 3, 'float64' );
	y = ones( 3, 'float64' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );

	out = dspmv( 'column-major', 'upper', 3, 0.0, ap, x, 1, 5.0, y, 1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );

	out = dspmv( 'column-major', 'upper', 3, 0.0, ap, x, 1, 0.0, y, -1 );
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

	ap = ones( 6, 'float64' );
	x = ones( 3, 'float64' );
	y = ones( 3, 'float64' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );

	out = dspmv( 'column-major', 'lower', 3, 0.0, ap, x, 1, 5.0, y, -1 );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );

	out = dspmv( 'column-major', 'lower', 3, 0.0, ap, x, 1, 0.0, y, 1 );
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

	ap = new Float64Array( rxnyn.AP.slice( rxnyn.offsetAP ) );
	x = new Float64Array( rxnyn.x );
	y = new Float64Array( rxnyn.y );

	expected = new Float64Array( rxnyn.y_out );

	out = dspmv( rxnyn.order, rxnyn.uplo, rxnyn.N, rxnyn.alpha, ap, x, rxnyn.strideX, rxnyn.beta, y, rxnyn.strideY );
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

	ap = new Float64Array( cxnyn.AP.slice( cxnyn.offsetAP ) );
	x = new Float64Array( cxnyn.x );
	y = new Float64Array( cxnyn.y );

	expected = new Float64Array( cxnyn.y_out );

	out = dspmv( cxnyn.order, cxnyn.uplo, cxnyn.N, cxnyn.alpha, ap, x, cxnyn.strideX, cxnyn.beta, y, cxnyn.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	isApprox( t, y, expected, 2.0 );

	t.end();
});
