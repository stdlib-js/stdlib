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
var ggemv = require( './../lib/main.js' );


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


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ggemv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 12', function test( t ) {
	t.strictEqual( ggemv.length, 12, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
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
			ggemv( value, data.trans, data.M, data.N, data.alpha, data.A, data.LDA, data.x, data.strideX, data.beta, data.y, data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (accessors)', function test( t ) {
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
			ggemv( value, data.trans, data.M, data.N, data.alpha, toAccessorArray( data.A ), data.LDA, toAccessorArray( data.x ), data.strideX, data.beta, toAccessorArray( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
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
			ggemv( data.order, value, data.M, data.N, data.alpha, data.A, data.LDA, data.x, data.strideX, data.beta, data.y, data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument (accessors)', function test( t ) {
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
			ggemv( data.order, value, data.M, data.N, data.alpha, toAccessorArray( data.A ), data.LDA, toAccessorArray( data.x ), data.strideX, data.beta, toAccessorArray( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
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
			ggemv( data.order, data.trans, value, data.N, data.alpha, data.A, data.LDA, data.x, data.strideX, data.beta, data.y, data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument (accessors)', function test( t ) {
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
			ggemv( data.order, data.trans, value, data.N, data.alpha, toAccessorArray( data.A ), data.LDA, toAccessorArray( data.x ), data.strideX, data.beta, toAccessorArray( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument', function test( t ) {
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
			ggemv( data.order, data.trans, data.M, value, data.alpha, data.A, data.LDA, data.x, data.strideX, data.beta, data.y, data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument (accessors)', function test( t ) {
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
			ggemv( data.order, data.trans, data.M, value, data.alpha, toAccessorArray( data.A ), data.LDA, toAccessorArray( data.x ), data.strideX, data.beta, toAccessorArray( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid seventh argument', function test( t ) {
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
			ggemv( data.order, data.trans, data.M, data.N, data.alpha, data.A, value, data.x, data.strideX, data.beta, data.y, data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid seventh argument (accessors)', function test( t ) {
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
			ggemv( data.order, data.trans, data.M, data.N, data.alpha, toAccessorArray( data.A ), value, toAccessorArray( data.x ), data.strideX, data.beta, toAccessorArray( data.y ), data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid ninth argument', function test( t ) {
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
			ggemv( data.order, data.trans, data.M, data.N, data.alpha, data.A, data.LDA, data.x, value, data.beta, data.y, data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid ninth argument (accessors)', function test( t ) {
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
			ggemv( data.order, data.trans, data.M, data.N, data.alpha, toAccessorArray( data.A ), data.LDA, toAccessorArray( data.x ), value, data.beta, data.y, data.strideY );
		};
	}
});

tape( 'the function throws an error if provided an invalid twelfth argument', function test( t ) {
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
			ggemv( data.order, data.trans, data.M, data.N, data.alpha, data.A, data.LDA, data.x, data.strideX, data.beta, data.y, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid twelfth argument (accessors)', function test( t ) {
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
			ggemv( data.order, data.trans, data.M, data.N, data.alpha, toAccessorArray( data.A ), data.LDA, toAccessorArray( data.x ), data.strideX, data.beta, toAccessorArray( data.y ), value );
		};
	}
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (row-major, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rnt;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (row-major, no-transpose) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rnt;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (column-major, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cnt;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (column-major, no-transpose) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cnt;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (row-major, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (row-major, transpose) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (column-major, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` (column-major, transpose) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input vector (row-major)', function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input vector (row-major) (accessors)', function test( t ) {
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input vector (column-major)', function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input vector (column-major) (accessors)', function test( t ) {
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the second input vector unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y;

	out = ggemv( data.order, data.trans, 0, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ggemv( data.order, data.trans, data.M, 0, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the second input vector unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y;

	out = ggemv( data.order, data.trans, 0, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	out = ggemv( data.order, data.trans, data.M, 0, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the second input vector unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y;

	out = ggemv( data.order, data.trans, 0, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ggemv( data.order, data.trans, data.M, 0, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the second input vector unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y;

	out = ggemv( data.order, data.trans, 0, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	out = ggemv( data.order, data.trans, data.M, 0, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `1`, the function returns the second input vector unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y;

	out = ggemv( data.order, data.trans, data.M, data.N, 0.0, a, data.lda, x, data.strideX, 1.0, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `1`, the function returns the second input vector unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rt;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y;

	out = ggemv( data.order, data.trans, data.M, data.N, 0.0, a, data.lda, x, data.strideX, 1.0, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `1`, the function returns the second input vector unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y;

	out = ggemv( data.order, data.trans, data.M, data.N, 0.0, a, data.lda, x, data.strideX, 1.0, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `1`, the function returns the second input vector unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ct;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y;

	out = ggemv( data.order, data.trans, data.M, data.N, 0.0, a, data.lda, x, data.strideX, 1.0, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is `1`, the function returns the second input vector unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxb;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is `1`, the function returns the second input vector unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxb;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is `1`, the function returns the second input vector unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxb;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is `1`, the function returns the second input vector unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxb;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0`, the function scales the second input vector by `β` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ra;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0`, the function scales the second input vector by `β` (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ra;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0`, the function scales the second input vector by `β` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ca;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0`, the function scales the second input vector by `β` (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ca;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is not `1`, the function scales the second input vector by `β` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rx;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is not `1`, the function scales the second input vector by `β` (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rx;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is not `1`, the function scales the second input vector by `β` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cx;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros and `β` is not `1`, the function scales the second input vector by `β` (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cx;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyp;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxpyp;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxnyp;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxnyp;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `y` stride (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyn;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `y` stride (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxpyn;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxnyn;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (column-major) (accessors)', function test( t ) {
	var expected;
	var ybuf;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxnyn;

	a = toAccessorArray( copy( data.A ) );
	x = toAccessorArray( copy( data.x ) );
	ybuf = copy( data.y );
	y = toAccessorArray( ybuf );

	expected = data.y_out;

	out = ggemv( data.order, data.trans, data.M, data.N, data.alpha, a, data.lda, x, data.strideX, data.beta, y, data.strideY );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});
