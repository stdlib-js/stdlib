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
var objectKeys = require( '@stdlib/utils/keys' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var toBinaryString = require( '@stdlib/number/float64/base/to-binary-string' );
var fromBinaryString = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/julia/bits_1e-200_1e-308.json' );
var medium = require( './fixtures/julia/bits_-1e3_1e3.json' );
var large = require( './fixtures/julia/bits_1e200_1e308.json' );
var subnormal = require( './fixtures/julia/bits_1e-310_5e-324.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fromBinaryString, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a string with a length other than `32`, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'1010101',
		'',
		'101',
		'111111111',
		'1111111111111111111111111111111',
		'111111111111111111111111111111111',
		'11111111111111111111111111111111111111111111111111111111111111111',
		'111111111111111111111111111111111111111111111111111111111111111'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fromBinaryString( value );
		};
	}
});

tape( 'if provided all zeros, the function returns `+0`', function test( t ) {
	t.strictEqual( fromBinaryString( toBinaryString( 0.0 ) ), 0.0, 'returns +0' );
	t.end();
});

tape( 'if provided a sign bit of 1 and all zeros, the function returns `-0`', function test( t ) {
	var v = fromBinaryString( toBinaryString( -0.0 ) );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );
	t.end();
});

tape( 'if provided a bit sequence where all exponent bits are 1s and everything else is 0, the function returns positive infinity', function test( t ) {
	t.strictEqual( fromBinaryString( toBinaryString( PINF ) ), PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided a bit sequence where the sign bit is 1, all exponent bits are 1s, and everything else is 0, the function returns negative infinity', function test( t ) {
	t.strictEqual( fromBinaryString( toBinaryString( NINF ) ), NINF, 'returns -infinity' );
	t.end();
});

tape( 'if provided a bit sequence where the sign bit may be either 1 or 0, all exponent bits are 1s, and the fraction is not all 0s, the function returns `NaN`', function test( t ) {
	var v = fromBinaryString( toBinaryString( NaN ) );
	t.strictEqual( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function creates double-precision floating-point numbers from literal bit representations for small values', function test( t ) {
	var keys;
	var key;
	var val;
	var x;
	var i;

	keys = objectKeys( small );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		x = fromBinaryString( key );
		val = parseFloat( small[ key ] );
		t.strictEqual( x, val, 'returns a double equal to ' + val + ' from ' + key );
	}
	t.end();
});

tape( 'the function creates double-precision floating-point numbers from literal bit representations for medium values', function test( t ) {
	var keys;
	var key;
	var val;
	var x;
	var i;

	keys = objectKeys( medium );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		x = fromBinaryString( key );
		val = parseFloat( medium[ key ] );
		t.strictEqual( x, val, 'returns a double equal to ' + val + ' from ' + key );
	}
	t.end();
});

tape( 'the function creates double-precision floating-point numbers from literal bit representations for large values', function test( t ) {
	var keys;
	var key;
	var val;
	var x;
	var i;

	keys = objectKeys( large );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		x = fromBinaryString( key );
		val = parseFloat( large[ key ] );
		t.strictEqual( x, val, 'returns a double equal to ' + val + ' from ' + key );
	}
	t.end();
});

tape( 'the function creates double-precision floating-point numbers from literal bit representations for subnormal values', function test( t ) {
	var keys;
	var key;
	var val;
	var x;
	var i;

	keys = objectKeys( subnormal );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		x = fromBinaryString( key );
		val = parseFloat( subnormal[ key ] );
		t.strictEqual( x, val, 'returns a double equal to ' + val + ' from ' + key );
	}
	t.end();
});
