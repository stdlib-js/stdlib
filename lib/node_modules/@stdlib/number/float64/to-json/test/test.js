/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var toJSON = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toJSON, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided a ' + (typeof values[i]) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			toJSON( value );
		};
	}
});

tape( 'the function returns a JSON object', function test( t ) {
	var expected;
	var json;

	json = toJSON( NaN );

	t.strictEqual( isPlainObject( json ), true, 'returns expected value' );

	expected = {
		'type': 'float64',
		'value': 'NaN'
	};
	t.deepEqual( json, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a JSON object', function test( t ) {
	var expected;
	var json;

	json = toJSON( PINF );

	t.strictEqual( isPlainObject( json ), true, 'returns expected value' );

	expected = {
		'type': 'float64',
		'value': '+Infinity'
	};
	t.deepEqual( json, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a JSON object', function test( t ) {
	var expected;
	var json;

	json = toJSON( NINF );

	t.strictEqual( isPlainObject( json ), true, 'returns expected value' );

	expected = {
		'type': 'float64',
		'value': '-Infinity'
	};
	t.deepEqual( json, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a number', function test( t ) {
	var expected;
	var json;

	json = toJSON( 3.14 );

	t.strictEqual( typeof json, 'number', 'returns expected value' );

	expected = 3.14;
	t.strictEqual( json, expected, 'returns expected value' );

	t.end();
});
