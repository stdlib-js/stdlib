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
var MAX_UINT32 = require( '@stdlib/constants/uint32/max' );
var toBinaryString = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/julia/small.json' );
var medium = require( './fixtures/julia/medium.json' );
var large = require( './fixtures/julia/large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toBinaryString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a literal 32-bit unsigned integer representation for 0', function test( t ) {
	var expected;

	expected = '00000000000000000000000000000000';

	t.strictEqual( toBinaryString(0), expected, 'returns bit literal for 0' );
	t.end();
});

tape( 'the function returns a literal 32-bit unsigned integer representation for MAX_UINT32', function test( t ) {
	var expected;

	expected = '11111111111111111111111111111111';

	t.strictEqual( toBinaryString(MAX_UINT32), expected, 'returns bit literal for MAX_UINT32' );
	t.end();
});

tape( 'the function returns literal bit representations for unsigned 32-bit integers (small)', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = small.x;
	expected = small.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = toBinaryString( x[ i ] );
		t.strictEqual( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function returns literal bit representations for unsigned 32-bit integers (medium)', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = medium.x;
	expected = medium.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = toBinaryString( x[ i ] );
		t.strictEqual( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function returns literal bit representations for unsigned 32-bit integers (large)', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = large.x;
	expected = large.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = toBinaryString( x[ i ] );
		t.strictEqual( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function will accept floating-point values, but will interpret the values as unsigned 32-bit integers', function test( t ) {
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
		str = toBinaryString( values[i] );
		t.strictEqual( typeof str, 'string', 'returns expected value' );
		t.strictEqual( str.length, 32, 'returns a string of length 32' );
	}
	t.end();
});
