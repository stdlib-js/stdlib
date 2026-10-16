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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var BigInt = require( '@stdlib/bigint/ctor' );
var bigint2words = require( './../lib/main.js' );


// VARIABLES //

var opts = {
	'skip': hasBigIntSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bigint2words, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a two-element numeric array containing integers', opts, function test( t ) {
	var w;

	w = bigint2words( BigInt( 1234 ) );

	t.strictEqual( isInteger( w[0] ), true, 'returns expected value' );
	t.strictEqual( isInteger( w[1] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function splits a bigint into the high and low 32-bit words of a 64-bit unsigned integer', opts, function test( t ) {
	var w;

	w = bigint2words( BigInt( '18446744073709551615' ) );

	t.strictEqual( w[ 0 ], 4294967295, 'returns expected value' );
	t.strictEqual( w[ 1 ], 4294967295, 'returns expected value' );

	t.end();
});
