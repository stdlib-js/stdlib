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
var toBinaryStringUint32 = require( '@stdlib/number/uint32/base/to-binary-string' );
var pow = require( '@stdlib/math/base/special/pow' );
var rotr32 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rotr32, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the shift is `0`, the function returns the input value', function test( t ) {
	var y;
	var i;

	for ( i = 0; i < 100; i++ ) {
		y = rotr32( i, 0 );
		t.strictEqual( y, i, 'returns input value' );
	}
	t.end();
});

tape( 'if the shift is `32`, the function returns the input value', function test( t ) {
	var y;
	var i;

	for ( i = 0; i < 100; i++ ) {
		y = rotr32( i, 32 );
		t.strictEqual( y, i, 'returns input value' );
	}
	t.end();
});

tape( 'the function performs a bitwise rotation to the right', function test( t ) {
	var expected;
	var y;
	var i;

	for ( i = 1; i < 32; i++ ) {
		y = rotr32( 1, i );
		expected = pow( 2, 32-i );
		t.strictEqual( y, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function performs a bitwise rotation to the right', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = 2147483648; // 10000000000000000000000000000000

	for ( i = 0; i < 32; i++ ) {
		y = rotr32( x, i );
		expected = pow( 2, 32-i-1 );
		t.strictEqual( y, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function performs a bitwise rotation to the right', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = 3; // 00000000000000000000000000000011
	y = rotr32( x, 5 );

	expected = '00011000000000000000000000000000';
	actual = toBinaryStringUint32( y );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = 5; // 00000000000000000000000000000101
	y = rotr32( x, 5 );

	expected = '00101000000000000000000000000000';
	actual = toBinaryStringUint32( y );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = 7; // 00000000000000000000000000000111
	y = rotr32( x, 5 );

	expected = '00111000000000000000000000000000';
	actual = toBinaryStringUint32( y );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = 2147483649; // 10000000000000000000000000000001
	y = rotr32( x, 5 );

	expected = '00001100000000000000000000000000';
	actual = toBinaryStringUint32( y );
	t.strictEqual( actual, expected, 'returns expected value' );

	x = 2147483650; // 10000000000000000000000000000010
	y = rotr32( x, 5 );

	expected = '00010100000000000000000000000000';
	actual = toBinaryStringUint32( y );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a shift greater than `31`, the function performs a bitwise rotation to the right based on the `5` least significant bits', function test( t ) {
	var expected;
	var y;
	var i;

	for ( i = 32; i < 100; i++ ) {
		y = rotr32( 1, i );
		expected = rotr32( 1, i&31 );
		t.strictEqual( y, expected, 'returns expected value' );
	}
	t.end();
});
