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
var MAX_UINT8 = require( '@stdlib/constants/uint8/max' );
var bits = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bits, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a literal 8-bit unsigned integer representation for 0', function test( t ) {
	var expected;

	expected = '00000000';

	t.equal( bits(0), expected, 'returns bit literal for 0' );
	t.end();
});

tape( 'the function returns a literal 8-bit unsigned integer representation for MAX_UINT8', function test( t ) {
	var expected;

	expected = '11111111';

	t.equal( bits(MAX_UINT8), expected, 'returns bit literal for MAX_UINT8' );
	t.end();
});

tape( 'the function returns literal bit representations for unsigned 8-bit integers', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = data.x;
	expected = data.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = bits( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function will accept floating-point values, but will interpret the values as unsigned 8-bit integers', function test( t ) {
	var values;
	var str;
	var i;

	values = [
		1.0e308,
		3.14,
		1.0/3.0,
		1.0/10.0,
		-0.0,
		-1.0e-308,
		-1.0e308,
		1.0/0.0,
		1.0/-0.0,
		NaN
	];

	for ( i = 0; i < values.length; i++ ) {
		str = bits( values[i] );
		t.equal( typeof str, 'string', 'returns a string' );
		t.equal( str.length, 8, 'returns a string of length 8' );
	}
	t.end();
});
