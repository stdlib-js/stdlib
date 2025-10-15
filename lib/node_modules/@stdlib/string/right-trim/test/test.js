/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var rtrim = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rtrim, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			rtrim( value );
		};
	}
});

tape( 'the function removes all whitespace characters at the end of a string', function test( t ) {
	var expected;
	var actual;

	expected = '   Whitespace';
	actual = rtrim( '   Whitespace   ' );
	t.strictEqual( actual, expected, 'removes all spaces' );

	expected = '\t\t\tTabs';
	actual = rtrim( '\t\t\tTabs\t\t\t' );
	t.strictEqual( actual, expected, 'removes all tabs' );

	expected = '\n\n\nNew Lines';
	actual = rtrim( '\n\n\nNew Lines\n\n\n' );
	t.strictEqual( actual, expected, 'removes all newline characters' );

	expected = ' \r\n \tBeep';
	actual = rtrim( ' \r\n \tBeep \r\n\t' );
	t.strictEqual( actual, expected, 'removes all whitespace characters' );

	expected = 'beep';
	actual = rtrim( 'beep\f' );
	t.strictEqual( actual, expected, 'removes \\f' );

	expected = 'beep';
	actual = rtrim( 'beep\n' );
	t.strictEqual( actual, expected, 'removes \\n' );

	expected = 'beep';
	actual = rtrim( 'beep\t' );
	t.strictEqual( actual, expected, 'removes \\t' );

	expected = 'beep';
	actual = rtrim( 'beep\v' );
	t.strictEqual( actual, expected, 'removes \\v' );

	expected = 'beep';
	actual = rtrim( 'beep\u1680' );
	t.strictEqual( actual, expected, 'removes \\u1680' );

	expected = 'beep';
	actual = rtrim( 'beep\u2000' );
	t.strictEqual( actual, expected, 'removes \\u2000' );

	expected = 'beep';
	actual = rtrim( 'beep\u2001' );
	t.strictEqual( actual, expected, 'removes \\u2001' );

	expected = 'beep';
	actual = rtrim( 'beep\u2002' );
	t.strictEqual( actual, expected, 'removes \\u2002' );

	expected = 'beep';
	actual = rtrim( 'beep\u2003' );
	t.strictEqual( actual, expected, 'removes \\u2003' );

	expected = 'beep';
	actual = rtrim( 'beep\u2004' );
	t.strictEqual( actual, expected, 'removes \\u2004' );

	expected = 'beep';
	actual = rtrim( 'beep\u2005' );
	t.strictEqual( actual, expected, 'removes \\u2005' );

	expected = 'beep';
	actual = rtrim( 'beep\u2006' );
	t.strictEqual( actual, expected, 'removes \\u2006' );

	expected = 'beep';
	actual = rtrim( 'beep\u2007' );
	t.strictEqual( actual, expected, 'removes \\u2007' );

	expected = 'beep';
	actual = rtrim( 'beep\u2008' );
	t.strictEqual( actual, expected, 'removes \\u2008' );

	expected = 'beep';
	actual = rtrim( 'beep\u2009' );
	t.strictEqual( actual, expected, 'removes \\u2009' );

	expected = 'beep';
	actual = rtrim( 'beep\u200a' );
	t.strictEqual( actual, expected, 'removes \\u200a' );

	expected = 'beep';
	actual = rtrim( 'beep\u2028' );
	t.strictEqual( actual, expected, 'removes \\u2028' );

	expected = 'beep';
	actual = rtrim( 'beep\u2029' );
	t.strictEqual( actual, expected, 'removes \\u2029' );

	expected = 'beep';
	actual = rtrim( 'beep\u202f' );
	t.strictEqual( actual, expected, 'removes \\u202f' );

	expected = 'beep';
	actual = rtrim( 'beep\u205f' );
	t.strictEqual( actual, expected, 'removes \\u205f' );

	expected = 'beep';
	actual = rtrim( 'beep\u3000' );
	t.strictEqual( actual, expected, 'removes \\u3000' );

	expected = 'beep';
	actual = rtrim( 'beep\ufeff' );
	t.strictEqual( actual, expected, 'removes \\ufefff' );

	t.end();
});

tape( 'the function does not trim the Mongolian space separator in accordance with Unicode 6.3.0 and later', function test( t ) {
	var expected;
	var actual;

	expected = 'beep\u180e';
	actual = rtrim( 'beep\u180e' );
	t.strictEqual( actual, expected, 'does not remove \\u180e' );

	t.end();
});
