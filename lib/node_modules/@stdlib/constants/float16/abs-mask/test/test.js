/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var toBinaryString = require( '@stdlib/number/uint16/base/to-binary-string' );
var toWord = require( '@stdlib/number/float16/base/to-word' );
var FLOAT16_ABS_MASK = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT16_ABS_MASK, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals 32767', function test( t ) {
	t.strictEqual( FLOAT16_ABS_MASK, 32767, 'returns expected value' );
	t.strictEqual( FLOAT16_ABS_MASK, 0x7fff, 'returns expected value' );
	t.end();
});

tape( 'the exported value can be used to mask off the sign bit', function test( t ) {
	var expected;
	var actual;
	var hi;
	var x;

	x = -1.0;
	hi = toWord( x ); // 1 01111 0000000000

	actual = hi & FLOAT16_ABS_MASK;
	expected = '0011110000000000';

	t.strictEqual( toBinaryString( actual ), expected );

	t.end();
});
