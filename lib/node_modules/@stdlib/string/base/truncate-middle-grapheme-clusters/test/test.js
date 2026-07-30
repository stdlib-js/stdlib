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
var truncateMiddle = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof truncateMiddle, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function truncates a string to the specified length', function test( t ) {
	var expected;
	var actual;
	var str;
	var len;

	str = 'beep boop';
	len = 5;
	expected = 'b...p';
	actual = truncateMiddle( str, len, '...' );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	len = 10;
	expected = 'beep boop';
	actual = truncateMiddle( str, len, '...' );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	len = 0;
	expected = '';
	actual = truncateMiddle( str, len, '...' );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	len = 1;
	expected = '.';
	actual = truncateMiddle( str, len, '...' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function truncates a string to the specified length (custom replacement sequence)', function test( t ) {
	var expected;
	var actual;
	var str;
	var len;

	str = 'beep boop';
	len = 5;
	expected = 'be|op';
	actual = truncateMiddle( str, len, '|' );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	len = 7;
	expected = 'bee!oop';
	actual = truncateMiddle( str, len, '!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = 'beep boop';
	len = 3;
	expected = 'b!p';
	actual = truncateMiddle( str, len, '!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
