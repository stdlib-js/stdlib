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
var string2words = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof string2words, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a two-element numeric array containing integers', function test( t ) {
	var w = string2words( '1234', 10 );

	t.strictEqual( isInteger( w[0] ), true, 'returns expected value' );
	t.strictEqual( isInteger( w[1] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function parses a string representation of a 64-bit unsigned integer into high and low 32-bit words', function test( t ) {
	var w = string2words( '18446744073709551615', 10 );

	t.strictEqual( w[0], 4294967295, 'returns expected value' );
	t.strictEqual( w[1], 4294967295, 'returns expected value' );

	t.end();
});
