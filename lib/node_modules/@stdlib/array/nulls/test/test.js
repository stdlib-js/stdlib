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

'use strict';

// MODULES //

var tape = require( 'tape' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var nulls = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nulls, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a value other than a nonnegative integer for the first argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3,
		3.14,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nulls( value );
		};
	}
});

tape( 'the function throws an error if provided a value other than a nonnegative integer for the first argument (dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3,
		3.14,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nulls( value, 'generic' );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'ones',
		'Int32',
		'Uint32',
		'Int16',
		'Uint16',
		'Int8',
		'Uint8',
		'Uint8c',
		'uint8_clamped',
		'Float64',
		'Float32',
		'FLOAT64',
		'FLOAT32',
		'GENERIC'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nulls( 10, value );
		};
	}
});

tape( 'the function returns a filled array (default)', function test( t ) {
	var expected;
	var arr;

	arr = nulls( 5 );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	expected = [ null, null, null, null, null ];
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic)', function test( t ) {
	var expected;
	var arr;

	arr = nulls( 5, 'generic' );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, 5, 'returns expected value' );

	expected = [ null, null, null, null, null ];
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});
