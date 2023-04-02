/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isUnsignedIntegerDataType = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isUnsignedIntegerDataType, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a supported ndarray unsigned integer data type', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = isUnsignedIntegerDataType( values[ i ] );
		t.strictEqual( bool, true, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a supported ndarray unsigned integer data type', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		'binary',
		'complex64',
		'complex128',
		'float32',
		'float64',
		'generic',
		'int16',
		'int32',
		'int8',

		'float',
		'int',
		'bin',
		'',
		'beep',
		'boop',
		'foo',
		'bar',
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
		bool = isUnsignedIntegerDataType( values[ i ] );
		t.strictEqual( bool, false, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
