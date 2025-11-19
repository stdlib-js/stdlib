
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
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var cnt = require( './fixtures/column_major_nt.json' );
var ct = require( './fixtures/column_major_t.json' );
var cxnyn = require( './fixtures/column_major_xnyn.json' );
var cxpyn = require( './fixtures/column_major_xpyn.json' );
var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );
var cx = require( './fixtures/column_major_x_zeros.json' );
var cxb = require( './fixtures/column_major_x_zeros_beta_one.json' );
var ca = require( './fixtures/column_major_alpha_zero.json' );

var rnt = require( './fixtures/row_major_nt.json' );
var rt = require( './fixtures/row_major_t.json' );
var rxnyn = require( './fixtures/row_major_xnyn.json' );
var rxpyn = require( './fixtures/row_major_xpyn.json' );
var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );
var rx = require( './fixtures/row_major_x_zeros.json' );
var rxb = require( './fixtures/row_major_x_zeros_beta_one.json' );
var ra = require( './fixtures/row_major_alpha_zero.json' );


// VARIABLES //

var sgemv = tryRequire( resolve( __dirname, './../lib/sgemv.native.js' ) );
var opts = {
	'skip': ( sgemv instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sgemv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 12', opts, function test( t ) {
	t.strictEqual( sgemv.length, 12, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rnt;

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
			sgemv( value, data.trans, data.M, data.N, data.alpha, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rnt;

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
			sgemv( data.order, value, data.M, data.N, data.alpha, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rnt;

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
			sgemv( data.order, data.trans, value, data.N, data.alpha, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rnt;

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
			sgemv( data.order, data.trans, data.M, value, data.alpha, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid seventh argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rnt;

	values = [
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
			sgemv( data.order, data.trans, data.M, data.N, data.alpha, new Float32Array( data.A ), value, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid ninth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rnt;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sgemv( data.order, data.trans, data.M, data.N, data.alpha, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), value, data.beta, new Float32Array( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid twelfth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rnt;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sgemv( data.order, data.trans, data.M, data.N, data.alpha, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, data.beta, new Float32Array( data.y ), value );
		};
	}
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (row-major, no-transpose)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rnt;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (column-major, no-transpose)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cnt;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (row-major, transpose)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (column-major, transpose)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input vector (row-major)', opts, function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input vector (column-major)', opts, function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the second input vector unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y );

	out = sgemv( data.order, data.trans, 0, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = sgemv( data.order, data.trans, data.M, 0, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the second input vector unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y );

	out = sgemv( data.order, data.trans, 0, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = sgemv( data.order, data.trans, data.M, 0, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `1`, the function returns the second input vector unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y );

	out = sgemv( data.order, data.trans, data.M, data.N, 0.0, a, data.lda, x, data.strideX, 1.0, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `1`, the function returns the second input vector unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y );

	out = sgemv( data.order, data.trans, data.M, data.N, 0.0, a, data.lda, x, data.strideX, 1.0, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is `1`, the function returns the second input vector unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxb;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is `1`, the function returns the second input vector unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxb;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0`, the function scales the second input vector by `β` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ra;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0`, the function scales the second input vector by `β` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ca;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is not `1`, the function scales the second input vector by `β` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rx;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is not `1`, the function scales the second input vector by `β` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cx;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
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

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
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

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
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

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
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

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
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

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
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

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
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

	data = rxnyn;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
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

	data = cxnyn;

	a = new Float32Array( data.A );
	x = new Float32Array( data.x );
	y = new Float32Array( data.y );

	expected = new Float32Array( data.y_out );

	out = sgemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
