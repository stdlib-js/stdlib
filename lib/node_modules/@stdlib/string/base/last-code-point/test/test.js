/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var last = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof last, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( last( '', 1 ), '', 'returns expected value' );
	t.strictEqual( last( '', 2 ), '', 'returns expected value' );
	t.strictEqual( last( '', 3 ), '', 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty string if provided zero as the second argument', function test( t ) {
	t.strictEqual( last( 'hello world', 0 ), '', 'returns expected value' );
	t.end();
});

tape( 'the function returns the last Unicode code point of a provided string (ascii)', function test( t ) {
	var out;

	out = last( 'hello world', 1 );
	t.strictEqual( out, 'd', 'returns expected value' );

	out = last( '!!!', 1 );
	t.strictEqual( out, '!', 'returns expected value' );

	out = last( 'JavaScript', 6 );
	t.strictEqual( out, 'Script', 'returns expected value' );

	t.end();
});

tape( 'the function returns the last Unicode code point of a provided string (Unicode)', function test( t ) {
	var out;

	out = last( 'अनुच्छेद', 1 );
	t.strictEqual( out, 'द', 'returns expected value' );

	out = last( '六书/六書', 1 );
	t.strictEqual( out, '書', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning the last `n` Unicode code points of a provided string', function test( t ) {
	var out;

	out = last( 'hello world', 1 );
	t.strictEqual( out, 'd', 'returns expected value' );

	out = last( 'hello world', 7 );
	t.strictEqual( out, 'o world', 'returns expected value' );

	out = last( '!!!', 2 );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = last( '六书/六書', 3 );
	t.strictEqual( out, '/六書', 'returns expected value' );

	out = last( '六书/六書', 5 );
	t.strictEqual( out, '六书/六書', 'returns expected value' );

	out = last( '六书/六書', 10 );
	t.strictEqual( out, '六书/六書', 'returns expected value' );

	out = last( 'hello六书/六書', 6 );
	t.strictEqual( out, 'o六书/六書', 'returns expected value' );

	out = last( 'hello六书/六書', 10 );
	t.strictEqual( out, 'hello六书/六書', 'returns expected value' );

	out = last( '六书/hello六書', 15 );
	t.strictEqual( out, '六书/hello六書', 'returns expected value' );

	out = last( '😄', 1 );
	t.strictEqual( out, '😄', 'returns expected value' );

	out = last( '👍', 1 );
	t.strictEqual( out, '👍', 'returns expected value' );

	out = last( 'abc😄def', 4 );
	t.strictEqual( out, '😄def', 'returns expected value' );

	out = last( '😄😄😄', 2 );
	t.strictEqual( out, '😄😄', 'returns expected value' );

	t.end();
});
