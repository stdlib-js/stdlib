/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var Uint8Array = require( '@stdlib/array/uint8' );
var sindexOfRow = require( './../lib/sindex_of_row.js' );


// FIXTURES //

var ROW_MAJOR_DATA = require( './fixtures/row_major.json' );
var ROW_MAJOR_NO_MATCH = require( './fixtures/row_major_no_match.json' );
var COLUMN_MAJOR_DATA = require( './fixtures/column_major.json' );
var COLUMN_MAJOR_NO_MATCH = require( './fixtures/column_major_no_match.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sindexOfRow, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( sindexOfRow.length, 9, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a valid order', function test( t ) {
	var values;
	var data;
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sindexOfRow( value, data.M, data.N, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a valid `LDA` value (row-major)', function test( t ) {
	var values;
	var data;
	var i;

	data = ROW_MAJOR_DATA;

	values = [
		0,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sindexOfRow( data.order, data.M, data.N, new Float32Array( data.A ), value, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a valid `LDA` value (column-major)', function test( t ) {
	var values;
	var data;
	var i;

	data = COLUMN_MAJOR_DATA;

	values = [
		0,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sindexOfRow( data.order, data.M, data.N, new Float32Array( data.A ), value, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );
		};
	}
});

tape( 'the function returns an invalid index when M is less than or equal to zero', function test( t ) {
	var data;
	var out;

	data = ROW_MAJOR_DATA;
	out = sindexOfRow( data.order, 0, data.N, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );

	t.strictEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index when N is less than or equal to zero', function test( t ) {
	var data;
	var out;

	data = ROW_MAJOR_DATA;
	out = sindexOfRow( data.order, data.M, 0, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );

	t.strictEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (row-major)', function test( t ) {
	var data;
	var out;

	data = ROW_MAJOR_DATA;
	out = sindexOfRow( data.order, data.M, data.N, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the index of the first row matching a search vector (column-major)', function test( t ) {
	var data;
	var out;

	data = COLUMN_MAJOR_DATA;
	out = sindexOfRow( data.order, data.M, data.N, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );

	t.strictEqual( out, data.expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (row-major)', function test( t ) {
	var data;
	var out;

	data = ROW_MAJOR_NO_MATCH;
	out = sindexOfRow( data.order, data.M, data.N, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );

	t.strictEqual( out, -1, 'returns expected value' );
	t.end();
});

tape( 'the function returns an invalid index if unable to find a search vector (column-major)', function test( t ) {
	var data;
	var out;

	data = COLUMN_MAJOR_NO_MATCH;
	out = sindexOfRow( data.order, data.M, data.N, new Float32Array( data.A ), data.LDA, new Float32Array( data.x ), data.strideX, new Uint8Array( data.M ), 1 );

	t.strictEqual( out, -1, 'returns expected value' );
	t.end();
});
