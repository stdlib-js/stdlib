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
var repeat = require( '@stdlib/string/repeat' );
var rpad = require( '@stdlib/string/right-pad' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var toBinaryStringf = require( './../lib' );


// VARIABLES //

// TODO: consider placing in external modules
var NUM_SIGNIFICAND_BITS = 23;
var NUM_EXPONENT_BITS = 8;


// FIXTURES //

var small = require( './fixtures/julia/bits_1e-36_1e-38.json' );
var medium = require( './fixtures/julia/bits_-1e3_1e3.json' );
var large = require( './fixtures/julia/bits_1e36_1e38.json' );
var subnormal = require( './fixtures/julia/bits_1e-39_1e-45.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof toBinaryStringf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `+0`, the function returns a string of all zeros', function test( t ) {
	var expected = repeat( '0', 32 );
	t.equal( toBinaryStringf( 0.0 ), expected, 'returns all 0s' );
	t.end();
});

tape( 'if provided `-0`, the function returns a string of all zeros except for the sign bit', function test( t ) {
	var expected = rpad( '1', 32, '0' );
	t.equal( toBinaryStringf( -0.0 ), expected, 'returns all 0s except the sign bit' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns a string where all exponent bits are 1s and everything else are 0s', function test( t ) {
	var expected;

	expected = '0';
	expected += repeat( '1', NUM_EXPONENT_BITS );
	expected += repeat( '0', NUM_SIGNIFICAND_BITS );

	t.equal( toBinaryStringf( PINF ), expected, 'returns bit string for +infinity' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns a string where the sign bit is 1, all exponent bits are 1s, and everything else are 0s', function test( t ) {
	var expected;

	expected = '1';
	expected += repeat( '1', NUM_EXPONENT_BITS );
	expected += repeat( '0', NUM_SIGNIFICAND_BITS );

	t.equal( toBinaryStringf( NINF ), expected, 'returns bit string for -infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns a string where the sign bit may be either 1 or 0, all exponent bits are 1s, and the fraction cannot be all 0s', function test( t ) {
	var actual;
	var frac;
	var exp;

	exp = repeat( '1', NUM_EXPONENT_BITS );
	frac = repeat( '0', NUM_SIGNIFICAND_BITS );

	actual = toBinaryStringf( NaN );

	t.ok( actual[0] === '0' || actual[1] === '1', 'sign bit is either 1 or 0' );
	t.equal( actual.substring( 1, 9 ), exp, 'all 1s for exponent' );
	t.notEqual( actual.substring( 9 ), frac, 'fraction does not equal all 0s' );
	t.end();
});

tape( 'the function returns literal bit representations for small values', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = small.x;
	expected = small.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = toBinaryStringf( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function returns literal bit representations for medium values', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = medium.x;
	expected = medium.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = toBinaryStringf( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function returns literal bit representations for large values', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = large.x;
	expected = large.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = toBinaryStringf( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function returns literal bit representations for subnormal values', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = subnormal.x;
	expected = subnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = toBinaryStringf( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});
