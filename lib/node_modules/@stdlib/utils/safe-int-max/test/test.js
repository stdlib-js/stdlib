/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var FLOAT16 = require( '@stdlib/constants/float16/max-safe-integer' );
var FLOAT32 = require( '@stdlib/constants/float32/max-safe-integer' );
var FLOAT64 = require( '@stdlib/constants/float64/max-safe-integer' );
var safeintmax = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof safeintmax, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an unknown numeric real type, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'double',
		'single',
		'half',
		'short',
		'long',
		'float',
		'integer',
		'int',
		'complex',
		'complex128',
		'complex64',
		'byte',
		'word',
		'int32',
		'uint32',
		'int16',
		'uint16',
		'int8',
		'uint8',
		'uint8c',
		5,
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
			safeintmax( value );
		};
	}
});

tape( 'the function returns the maximum safe integer for a specified numeric real type', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'float64',
		'float32',
		'float16'
	];

	expected = [
		FLOAT64,
		FLOAT32,
		FLOAT16
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( safeintmax( values[i] ), expected[ i ], 'returns expected value for '+values[i] );
	}
	t.end();
});
