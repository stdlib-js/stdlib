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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var minDataType = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minDataType, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the minimum array data type of the closest "kind" necessary for storing a provided scalar value', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		NaN,
		0,
		0.0,
		-0.0,
		1,
		-1,
		300, // >2**8
		-300,
		65537, // >2**16
		-65537,
		4294967297, // >2**32
		-4294967297,
		3.14,
		-3.14,
		1.0e40, // >10**38
		-1.0e40,
		-1.0e-46, // <10**-45
		1.0e-46,
		PINF,
		NINF,
		'beep',
		{},
		true,
		false,
		[]
	];
	expected = [
		'float32',
		'uint8',
		'uint8',
		'float32',
		'uint8',
		'int8',
		'uint16',
		'int16',
		'uint32',
		'int32',
		'float64',
		'float64',
		'float32',
		'float32',
		'float64',
		'float64',
		'float64',
		'float64',
		'float32',
		'float32',
		'generic',
		'generic',
		'generic',
		'generic',
		'generic'
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = minDataType( values[i] );
		t.strictEqual( actual, expected[ i ], 'returns expected value when provided '+values[i] );
	}
	t.end();
});
