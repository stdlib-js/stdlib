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
var gger = require( './../lib/main.js' );


// FIXTURES //

var cm = require( './fixtures/column_major.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );
var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyn = require( './fixtures/column_major_xpyn.json' );
var cxnyn = require( './fixtures/column_major_xnyn.json' );
var cx0 = require( './fixtures/column_major_x_zeros.json' );
var cy0 = require( './fixtures/column_major_y_zeros.json' );

var rm = require( './fixtures/row_major.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );
var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyn = require( './fixtures/row_major_xpyn.json' );
var rxnyn = require( './fixtures/row_major_xnyn.json' );
var rx0 = require( './fixtures/row_major_x_zeros.json' );
var ry0 = require( './fixtures/row_major_y_zeros.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gger, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( gger.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

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
			gger( value, data.M, data.N, data.alpha, data.x, data.strideX, data.y, data.strideY, data.A, data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

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
			gger( value, data.M, data.N, data.alpha, toAccessorArray( data.x ), data.strideX, toAccessorArray( data.y ), data.strideY, toAccessorArray( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
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
			gger( data.order, value, data.N, data.alpha, data.x, data.strideX, data.y, data.strideY, data.A, data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument (accessors)', function test( t ) {
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
			gger( data.order, value, data.N, data.alpha, toAccessorArray( data.x ), data.strideX, toAccessorArray( data.y ), data.strideY, toAccessorArray( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
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
			gger( data.order, data.M, value, data.alpha, data.x, data.strideX, data.y, data.strideY, data.A, data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument (accessors)', function test( t ) {
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
			gger( data.order, data.M, value, data.alpha, toAccessorArray( data.x ), data.strideX, toAccessorArray( data.y ), data.strideY, toAccessorArray( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument', function test( t ) {
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
			gger( data.order, data.M, data.N, data.alpha, data.x, value, data.y, data.strideY, data.A, data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument (accessors)', function test( t ) {
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
			gger( data.order, data.M, data.N, data.alpha, toAccessorArray( data.x ), value, toAccessorArray( data.y ), data.strideY, toAccessorArray( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument', function test( t ) {
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
			gger( data.order, data.M, data.N, data.alpha, data.x, data.strideX, data.y, value, data.A, data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument (accessors)', function test( t ) {
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
			gger( data.order, data.M, data.N, data.alpha, toAccessorArray( data.x ), data.strideX, toAccessorArray( data.y ), value, toAccessorArray( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid tenth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		-3,
		-2,
		-1,
		0,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gger( data.order, data.M, data.N, data.alpha, data.x, data.strideX, data.y, data.strideY, data.A, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid tenth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		-3,
		-2,
		-1,
		0,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gger( data.order, data.M, data.N, data.alpha, toAccessorArray( data.x ), data.strideX, toAccessorArray( data.y ), data.strideY, toAccessorArray( data.A ), value );
		};
	}
});

tape( 'the function the rank 1 operation `A = α*x*y^T + A` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function the rank 1 operation `A = α*x*y^T + A` (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function the rank 1 operation `A = α*x*y^T + A` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function the rank 1 operation `A = α*x*y^T + A` (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input matrix (row-major)', function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input matrix (row-major) (accessors)', function test( t ) {
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input matrix (column-major)', function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input matrix (column-major) (accessors)', function test( t ) {
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the input matrix unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A;

	out = gger( data.order, 0, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = gger( data.order, data.M, 0, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the input matrix unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A;

	out = gger( data.order, 0, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	out = gger( data.order, data.M, 0, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the input matrix unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A;

	out = gger( data.order, 0, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = gger( data.order, data.M, 0, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the input matrix unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A;

	out = gger( data.order, 0, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	out = gger( data.order, data.M, 0, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0.0`, the function returns the input matrix unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A;

	out = gger( data.order, data.M, data.N, 0.0, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0.0`, the function returns the input matrix unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A;

	out = gger( data.order, data.M, data.N, 0.0, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0.0`, the function returns the input matrix unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A;

	out = gger( data.order, data.M, data.N, 0.0, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0.0`, the function returns the input matrix unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A;

	out = gger( data.order, data.M, data.N, 0.0, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros, the function returns the input matrix unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rx0;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `x` contains only zeros, the function returns the input matrix unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rx0;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
	t.end();
});

tape( 'if `x` contains only zeros, the function returns the input matrix unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cx0;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `x` contains only zeros, the function returns the input matrix unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cx0;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
	t.end();
});

tape( 'if `y` contains only zeros, the function returns the input matrix unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ry0;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `y` contains only zeros, the function returns the input matrix unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = ry0;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
	t.end();
});

tape( 'if `y` contains only zeros, the function returns the input matrix unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cy0;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `y` contains only zeros, the function returns the input matrix unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cy0;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
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

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rxpyp;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
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

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cxpyp;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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
	var y;

	data = rxnyp;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rxnyp;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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
	var y;

	data = cxnyp;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cxnyp;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
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

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative `y` stride (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rxpyn;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
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

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative `y` stride (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cxpyn;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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
	var y;

	data = rxnyn;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = rxnyn;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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
	var y;

	data = cxnyn;

	a = copy( data.A );
	x = copy( data.x );
	y = copy( data.y );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var abuf;
	var out;
	var a;
	var x;
	var y;

	data = cxnyn;

	abuf = copy( data.A );
	a = toAccessorArray( abuf );
	x = toAccessorArray( copy( data.x ) );
	y = toAccessorArray( copy( data.y ) );

	expected = data.A_out;

	out = gger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( abuf, expected, 'returns expected value' );
	t.end();
});
