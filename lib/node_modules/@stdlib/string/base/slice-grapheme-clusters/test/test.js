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
var sliceGraphemeClusters = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sliceGraphemeClusters, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( sliceGraphemeClusters.length, 3, 'the function has an arity of 3' );
	t.end();
});

tape( 'the function returns an empty string if provided an empty input string', function test( t ) {
	var out;

	out = sliceGraphemeClusters( '', 0, 1 );
	t.strictEqual( out, '', 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty string if the starting index is greater than or equal to the ending index', function test( t ) {
	var out;

	out = sliceGraphemeClusters( 'hello', 2, 2 );
	t.strictEqual( out, '', 'returns expected value' );

	out = sliceGraphemeClusters( 'hello', 3, 2 );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty string if the starting index is greater than or equal to the string length', function test( t ) {
	var out;

	out = sliceGraphemeClusters( 'hello', 5, 6 );
	t.strictEqual( out, '', 'returns expected value' );

	out = sliceGraphemeClusters( 'hello', 10, 12 );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});

tape( 'the function slices an input string based on grapheme cluster indices', function test( t ) {
	var out;

	out = sliceGraphemeClusters( 'hello', 0, 3 );
	t.strictEqual( out, 'hel', 'returns expected value' );

	out = sliceGraphemeClusters( '🌷🍕👉🏿', 1, 2 );
	t.strictEqual( out, '🍕', 'returns expected value' );

	out = sliceGraphemeClusters( 'अनुच्छेद', 1, 5 );
	t.strictEqual( out, 'नुच्छेद', 'returns expected value' );

	out = sliceGraphemeClusters( '六书/六書', 1, 5 );
	t.strictEqual( out, '书/六書', 'returns expected value' );

	out = sliceGraphemeClusters( '🏝️🌷', 1, 2 );
	t.strictEqual( out, '🌷', 'returns expected value' );

	t.end();
});

tape( 'the function slices an input string based on grapheme cluster indices (skin-tone emojis)', function test( t ) {
	var out;

	out = sliceGraphemeClusters( '🌷👨‍👩‍👧‍👦👉🏿', 1, 2 );
	t.strictEqual( out, '👨‍👩‍👧‍👦', 'returns expected value' );

	out = sliceGraphemeClusters( '🏝️👨‍👩‍👧‍👦', 1, 2 );
	t.strictEqual( out, '👨‍👩‍👧‍👦', 'returns expected value' );

	out = sliceGraphemeClusters( '👋🏾🤦🏽‍♀️🧑🏿', 1, 2 );
	t.strictEqual( out, '🤦🏽‍♀️', 'returns expected value' );

	t.end();
});

tape( 'the function supports providing negative indices', function test( t ) {
	var out;

	out = sliceGraphemeClusters( 'hello', -5, -2 );
	t.strictEqual( out, 'hel', 'returns expected value' );

	out = sliceGraphemeClusters( '🌷🍕👉🏿', -2, -1 );
	t.strictEqual( out, '🍕', 'returns expected value' );

	out = sliceGraphemeClusters( 'अनुच्छेद', -4, -1 );
	t.strictEqual( out, 'नुच्छे', 'returns expected value' );

	out = sliceGraphemeClusters( '六书/六書', -3, 5 );
	t.strictEqual( out, '/六書', 'returns expected value' );

	out = sliceGraphemeClusters( '🏝️🌷', -1, 2 );
	t.strictEqual( out, '🌷', 'returns expected value' );

	t.end();
});

tape( 'the function supports providing negative indices (skin-tone emojis)', function test( t ) {
	var out;

	out = sliceGraphemeClusters( '🌷👨‍👩‍👧‍👦👉🏿', -2, -1 );
	t.strictEqual( out, '👨‍👩‍👧‍👦', 'returns expected value' );

	out = sliceGraphemeClusters( '🏝️👨‍👩‍👧‍👦', -1, 4 );
	t.strictEqual( out, '👨‍👩‍👧‍👦', 'returns expected value' );

	out = sliceGraphemeClusters( '👋🏾🤦🏽‍♀️🧑🏿‍🦱', -2, -1 );
	t.strictEqual( out, '🤦🏽‍♀️', 'returns expected value' );

	t.end();
});

tape( 'the function truncates the end index to the string length', function test( t ) {
	var out;

	out = sliceGraphemeClusters( 'hello', 0, 10 );
	t.strictEqual( out, 'hello', 'returns expected value' );

	out = sliceGraphemeClusters( '六书/六書', 1, 10 );
	t.strictEqual( out, '书/六書', 'returns expected value' );

	out = sliceGraphemeClusters( '🏝️🌷', 0, 5 );
	t.strictEqual( out, '🏝️🌷', 'returns expected value' );

	t.end();
});
