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
var sspr = require( './../lib/sspr.js' );


// FIXTURES //

var rl = require( './fixtures/row_major_l.json' );
var ru = require( './fixtures/row_major_u.json' );
var rxp = require( './fixtures/row_major_xp.json' );
var rxn = require( './fixtures/row_major_xn.json' );

var cl = require( './fixtures/column_major_l.json' );
var cu = require( './fixtures/column_major_u.json' );
var cxp = require( './fixtures/column_major_xp.json' );
var cxn = require( './fixtures/column_major_xn.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sspr, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( sspr.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rl;

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
			sspr( value, data.uplo, data.N, data.alpha, new Float32Array( data.x ), data.strideX, data.AP );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rl;

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
			sspr( data.order, value, data.N, data.alpha, new Float32Array( data.x ), data.strideX, data.AP );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rl;

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
			sspr( data.order, data.uplo, value, data.alpha, new Float32Array( data.x ), data.strideX, data.AP );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rl;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sspr( data.order, data.uplo, data.N, data.alpha, new Float32Array( data.x ), value, data.AP );
		};
	}
});

tape( 'the symmetric rank 1 operation `A = α*A*x*x^T + A` (row-major, lower)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = rl;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP_out );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the symmetric rank 1 operation `A = α*A*x*x^T + A` (column-major, lower)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = cl;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP_out );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the symmetric rank 1 operation `A = α*A*x*x^T + A` (row-major, upper)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = ru;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP_out );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the symmetric rank 1 operation `A = α*A*x*x^T + A` (column-major, upper)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = cu;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP_out );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the packed form of a symmetric matrix `A`', function test( t ) {
	var data;
	var out;
	var ap;
	var x;

	data = rl;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or `α` is zero, respectively, the function returns `AP` unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = ru;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP );

	out = sspr( data.order, data.uplo, 0, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( ap, expected, 'returns expected value' );

	out = sspr( data.order, data.uplo, data.N, 0.0, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( ap, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or `α` is zero, respectively, the function returns `AP` unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = cu;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP );

	out = sspr( data.order, data.uplo, 0, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( ap, expected, 'returns expected value' );

	out = sspr( data.order, data.uplo, data.N, 0.0, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( ap, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = rxp;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP_out );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = cxp;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP_out );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = rxn;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP_out );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var ap;
	var x;

	data = cxn;

	ap = new Float32Array( data.AP );
	x = new Float32Array( data.x );

	expected = new Float32Array( data.AP_out );

	out = sspr( data.order, data.uplo, data.N, data.alpha, x, data.strideX, ap );
	t.strictEqual( out, ap, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
