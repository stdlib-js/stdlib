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
var Float64Array = require( '@stdlib/array/float64' );
var dlaset = require( './../lib/dlaset.js' );


// FIXTURES //

var ALL_ROW_MAJOR = require( './fixtures/all_row_major.json' );
var ALL_COL_MAJOR = require( './fixtures/all_col_major.json' );
var LOWER_ROW_MAJOR = require( './fixtures/lower_row_major.json' );
var LOWER_COL_MAJOR = require( './fixtures/lower_col_major.json' );
var UPPER_ROW_MAJOR = require( './fixtures/upper_row_major.json' );
var UPPER_COL_MAJOR = require( './fixtures/upper_col_major.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlaset, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( dlaset.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var A;
	var i;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dlaset( value, 'all', 2, 2, 2.0, 3.0, A, 2 );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument (row-major)', function test( t ) {
	var values;
	var A;
	var i;

	values = [
		0,
		1
	];

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dlaset( 'row-major', 'all', 2, 2, 2.0, 3.0, A, value );
		};
	}
});

tape( 'the function returns expected value when setting all values (row-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = ALL_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.order, data.uplo, data.M, data.N, data.alpha, data.beta, A, data.LDA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting all values (column-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = ALL_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.order, data.uplo, data.M, data.N, data.alpha, data.beta, A, data.LDA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (row-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LOWER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.order, data.uplo, data.M, data.N, data.alpha, data.beta, A, data.LDA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting lower triangular values (column-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = LOWER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.order, data.uplo, data.M, data.N, data.alpha, data.beta, A, data.LDA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (row-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = UPPER_ROW_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.order, data.uplo, data.M, data.N, data.alpha, data.beta, A, data.LDA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});

tape( 'the function returns expected value when setting upper triangular values (column-major)', function test( t ) {
	var expectedOut;
	var actualOut;
	var data;
	var A;

	data = UPPER_COL_MAJOR;

	A = new Float64Array( data.A );
	actualOut = dlaset( data.order, data.uplo, data.M, data.N, data.alpha, data.beta, A, data.LDA );
	expectedOut = new Float64Array( data.A_out );

	t.deepEqual( actualOut, expectedOut, 'returns expected value' );
	t.end();
});
