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
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var number2words = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof number2words, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a two-element numeric array containing integers', function test( t ) {
	var w = number2words( 1234 );

	t.strictEqual( isInteger( w[0] ), true, 'returns expected value' );
	t.strictEqual( isInteger( w[1] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function splits a number into the high and low 32-bit words of a 64-bit signed integer', function test( t ) {
	var w = number2words( 9007199254740991 );

	t.strictEqual( w[ 0 ], 2097151, 'returns expected value' );
	t.strictEqual( w[ 1 ], 4294967295, 'returns expected value' );

	w = number2words( -1 );
	t.strictEqual( w[ 0 ], 4294967295, 'returns expected value' );
	t.strictEqual( w[ 1 ], 4294967295, 'returns expected value' );

	w = number2words( -9007199254740991 );
	t.strictEqual( w[ 0 ], 4292870144, 'returns expected value' );
	t.strictEqual( w[ 1 ], 1, 'returns expected value' );

	w = number2words( 0x8000000000000000 - 1024 );
	t.strictEqual( w[ 0 ], 2147483647, 'returns expected value' );
	t.strictEqual( w[ 1 ], 4294966272, 'returns expected value' );

	w = number2words( -0x8000000000000000 + 1024 );
	t.strictEqual( w[ 0 ], 2147483648, 'returns expected value' );
	t.strictEqual( w[ 1 ], 1024, 'returns expected value' );

	t.end();
});
