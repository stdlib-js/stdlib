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

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var iladlc = require( './../lib/iladlc.js' );


// FIXTURES //

var ROW_MAJOR_DATA = require( './fixtures/row_major.json' );
var ROW_MAJOR_ZEROS = require( './fixtures/row_major_zeros.json' );
var COLUMN_MAJOR_DATA = require( './fixtures/column_major.json' );
var COLUMN_MAJOR_ZEROS = require( './fixtures/column_major_zeros.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iladlc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( iladlc.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a valid order', function test( t ) {
	var values;
	var data;
	var A;
	var i;

	data = ROW_MAJOR_DATA;

	values = [
		'foo',
		'bar',
		'beep',
		'boop',
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	A = new Float64Array( data.A );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iladlc( value, data.M, data.N, A, data.LDA );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a valid `LDA` value (row-major)', function test( t ) {
	var values;
	var data;
	var A;
	var i;

	data = ROW_MAJOR_DATA;

	values = [
		0,
		1
	];

	A = new Float64Array( data.A );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iladlc( data.order, data.M, data.N, A, value );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a valid `LDA` value (column-major)', function test( t ) {
	var values;
	var data;
	var A;
	var i;

	data = COLUMN_MAJOR_DATA;

	values = [
		0,
		1
	];

	A = new Float64Array( data.A );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iladlc( data.order, data.M, data.N, A, value );
		};
	}
});

tape( 'the function returns an invalid index (-1) when M is less than or equal to zero', function test( t ) {
	var data;
	var out;
	var A;

	data = ROW_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlc( data.order, 0, data.N, A, data.LDA );

	t.deepEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when N is less than or equal to zero', function test( t ) {
	var data;
	var out;
	var A;

	data = ROW_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlc( data.order, data.M, 0, A, data.LDA );

	t.deepEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (row-major)', function test( t ) {
	var data;
	var out;
	var A;

	data = ROW_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlc( data.order, data.M, data.N, A, data.LDA );

	t.deepEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the expected zero-based index of the last non-zero column of a matrix (column-major)', function test( t ) {
	var data;
	var out;
	var A;

	data = COLUMN_MAJOR_DATA;

	A = new Float64Array( data.A );
	out = iladlc( data.order, data.M, data.N, A, data.LDA );

	t.deepEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (row-major)', function test( t ) {
	var data;
	var out;
	var A;

	data = ROW_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlc( data.order, data.M, data.N, A, data.LDA );

	t.deepEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index (-1) when all elements in a matrix are zero (column-major)', function test( t ) {
	var data;
	var out;
	var A;

	data = COLUMN_MAJOR_ZEROS;

	A = new Float64Array( data.A );
	out = iladlc( data.order, data.M, data.N, A, data.LDA );

	t.deepEqual( out, data.expected, 'returns expected value' );
	t.end();
});
