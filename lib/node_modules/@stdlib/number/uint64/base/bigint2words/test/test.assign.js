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
var Uint32Array = require( '@stdlib/array/uint32' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var BigInt = require( '@stdlib/bigint/ctor' );
var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var bigint2words = require( './../lib/assign.js' );


// VARIABLES //

var TWO_32 = 0x100000000; // 2^32
var opts = {
	'skip': !hasBigIntSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bigint2words, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a two-element numeric array containing integers', opts, function test( t ) {
	var out;
	var w;

	out = [ 0, 0 ];
	w = bigint2words( BigInt( 1234 ), out, 1, 0 );

	t.strictEqual( w, out, 'returns expected value' );
	t.strictEqual( isInteger( w[0] ), true, 'returns expected value' );
	t.strictEqual( isInteger( w[1] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function splits a bigint into the high and low 32-bit words of a 64-bit unsigned integer', opts, function test( t ) {
	var values;
	var out;
	var w;
	var x;
	var i;

	values = [
		0,
		1,
		2,
		3,
		4,
		5,
		10,
		99,
		100,
		999,
		1000,
		999999,
		1000000,
		999999999,
		1000000000,
		UINT32_MAX,
		UINT32_MAX + 1,
		9007199254740881, // Largest prime under 2^53
		MAX_SAFE_INTEGER - 1,
		MAX_SAFE_INTEGER,
		'9007199254740992', // MAX_SAFE_INTEGER + 1
		'9999999999999999',
		'10000000000000000',
		'99999999999999999',
		'100000000000000000',
		'999999999999999999',
		'1000000000000000000',
		'9223372036854775783', // Largest prime under 2^63
		'9999999999999999999',
		'10000000000000000000',
		'18446744073709551557', // Largest prime under 2^64
		'18446744073709551615' // 2^64 - 1
	];

	for ( i = 0; i < values.length; i++ ) {
		values[ i ] = BigInt( values[ i ] ); // Convert values to BigInt
		out = [ 0, 0 ];
		w = bigint2words( values[ i ], out, 1, 0 );
		t.strictEqual( w, out, 'returns expected value' );

		x = ( BigInt( w[0] ) * BigInt( TWO_32 ) ) + BigInt( w[1] ); // Create BigInt from words
		t.strictEqual( x, values[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports providing an output object (array)', opts, function test( t ) {
	var out;
	var w;

	out = [ 0, 0 ];
	w = bigint2words( BigInt( 4294967296 ), out, 1, 0 );

	t.strictEqual( w, out, 'returns expected value' );
	t.strictEqual( w[ 0 ], 1, 'returns expected value' );
	t.strictEqual( w[ 1 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an output object (typed array)', opts, function test( t ) {
	var out;
	var w;

	out = new Uint32Array( 2 );
	w = bigint2words( BigInt( 4294967296 ), out, 1, 0 );

	t.strictEqual( w, out, 'returns expected value' );
	t.strictEqual( w[ 0 ], 1, 'returns expected value' );
	t.strictEqual( w[ 1 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var out;
	var val;

	out = new Uint32Array( 4 );
	val = bigint2words( BigInt( 4294967298 ), out, 2, 0 );

	t.strictEqual( val, out, 'returns expected value' );
	t.strictEqual( val[ 0 ], 1, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], 2, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', opts, function test( t ) {
	var out;
	var val;

	out = new Uint32Array( 4 );
	val = bigint2words( BigInt( 4294967298 ), out, 2, 1 );

	t.strictEqual( val, out, 'returns expected value' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], 1, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], 2, 'returns expected value' );

	t.end();
});
