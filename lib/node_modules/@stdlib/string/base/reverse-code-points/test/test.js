/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var reverse = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reverse, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( reverse( '' ), '', 'returns expected value' );
	t.end();
});

tape( 'the function reverses the Unicode code points of a provided string (ascii)', function test( t ) {
	var out;

	out = reverse( 'hello world' );
	t.strictEqual( out, 'dlrow olleh', 'returns expected value' );

	out = reverse( '!!!*' );
	t.strictEqual( out, '*!!!', 'returns expected value' );

	out = reverse( 'Hello World' );
	t.strictEqual( out, 'dlroW olleH', 'returns expected value' );

	t.end();
});

tape( 'the function reverses the Unicode code points of a provided string (Unicode)', function test( t ) {
	var out;

	out = reverse( 'अनुच्छेद' );
	t.strictEqual( out, 'देछ्चुनअ', 'returns expected value' );

	out = reverse( '六书/六書' );
	t.strictEqual( out, '書六/书六', 'returns expected value' );

	t.end();
});

tape( 'the function reverses the Unicode code points of a provided string (surrogate pair)', function test( t ) {
	var out;

	out = reverse( 'foo\uD834\uDF06bar' );
	t.strictEqual( out, 'rab\uD834\uDF06oof', 'returns expected value' );

	out = reverse( 'foo\uD834bar\uDF06baz' );
	t.strictEqual( out, 'zab\uDF06rab\uD834oof', 'returns expected value' );

	out = reverse( 'foo\uD834bar\uDF06\uD834' );
	t.strictEqual( out, '\uD834\uDF06rab\uD834oof', 'returns expected value' );

	t.end();
});
