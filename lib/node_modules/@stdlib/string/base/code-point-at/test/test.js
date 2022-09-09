/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var codePointAt = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof codePointAt, 'function', 'main export is a function' );
	t.end();
});

tape( 'the arity of the function is 3', function test( t ) {
	t.strictEqual( codePointAt.length, 3, 'has length 3' );
	t.end();
});

tape( 'the function returns the code point at a specified string position', function test( t ) {
	var out;

	out = codePointAt( 'last man standing', 4, false );
	t.strictEqual( out, 0x20, 'returns expected value' );

	out = codePointAt( 'last man standing', -13, false );
	t.strictEqual( out, 0x20, 'returns expected value' );

	out = codePointAt( 'presidential election', 8, true );
	t.strictEqual( out, 0x74, 'returns expected value' );

	out = codePointAt( 'presidential election', -13, true );
	t.strictEqual( out, 0x74, 'returns expected value' );

	out = codePointAt( 'अनुच्छेद', 2, false );
	t.strictEqual( out, 0x941, 'returns expected value' );

	out = codePointAt( 'अनुच्छेद', -6, false );
	t.strictEqual( out, 0x941, 'returns expected value' );

	out = codePointAt( '🌷', 0, true );
	t.strictEqual( out, 0x1F337, 'returns expected value' );

	out = codePointAt( '🌷', -2, true );
	t.strictEqual( out, 0x1F337, 'returns expected value' );

	t.end();
});
