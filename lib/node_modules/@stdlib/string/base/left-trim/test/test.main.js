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
var HAS_BUILTIN = require( './../lib/has_builtin.js' );
var ltrim = require( './../lib/main.js' );


// VARIABLES //

var opts = {
	'skip': !HAS_BUILTIN
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof ltrim, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function removes all whitespace characters at the beginning of a string', function test( t ) {
	var expected;
	var actual;

	expected = 'Whitespace   ';
	actual = ltrim( '   Whitespace   ' );
	t.equal( actual, expected, 'removes all spaces' );

	expected = 'Tabs\t\t\t';
	actual = ltrim( '\t\t\tTabs\t\t\t' );
	t.equal( actual, expected, 'removes all tabs' );

	expected = 'New Lines\n\n\n';
	actual = ltrim( '\n\n\nNew Lines\n\n\n' );
	t.equal( actual, expected, 'removes all newline characters' );

	expected = 'New Lines\r\n\r\n\r\n';
	actual = ltrim( '\r\n\r\n\r\nNew Lines\r\n\r\n\r\n' );
	t.equal( actual, expected, 'removes all newline and carriage return characters' );

	expected = 'Beep \r\n \t';
	actual = ltrim( ' \t\r\n Beep \r\n \t' );
	t.equal( actual, expected, 'removes all whitespace characters' );

	expected = 'beep';
	actual = ltrim( '\fbeep' );
	t.equal( actual, expected, 'removes \\f' );

	expected = 'beep';
	actual = ltrim( '\nbeep' );
	t.equal( actual, expected, 'removes \\n' );

	expected = 'beep';
	actual = ltrim( '\tbeep' );
	t.equal( actual, expected, 'removes \\t' );

	expected = 'beep';
	actual = ltrim( '\vbeep' );
	t.equal( actual, expected, 'removes \\v' );

	expected = 'beep';
	actual = ltrim( '\u1680beep' );
	t.equal( actual, expected, 'removes \\u1680' );

	expected = 'beep';
	actual = ltrim( '\u2000beep' );
	t.equal( actual, expected, 'removes \\u2000' );

	expected = 'beep';
	actual = ltrim( '\u2001beep' );
	t.equal( actual, expected, 'removes \\u2001' );

	expected = 'beep';
	actual = ltrim( '\u2002beep' );
	t.equal( actual, expected, 'removes \\u2002' );

	expected = 'beep';
	actual = ltrim( '\u2003beep' );
	t.equal( actual, expected, 'removes \\u2003' );

	expected = 'beep';
	actual = ltrim( '\u2004beep' );
	t.equal( actual, expected, 'removes \\u2004' );

	expected = 'beep';
	actual = ltrim( '\u2005beep' );
	t.equal( actual, expected, 'removes \\u2005' );

	expected = 'beep';
	actual = ltrim( '\u2006beep' );
	t.equal( actual, expected, 'removes \\u2006' );

	expected = 'beep';
	actual = ltrim( '\u2007beep' );
	t.equal( actual, expected, 'removes \\u2007' );

	expected = 'beep';
	actual = ltrim( '\u2008beep' );
	t.equal( actual, expected, 'removes \\u2008' );

	expected = 'beep';
	actual = ltrim( '\u2009beep' );
	t.equal( actual, expected, 'removes \\u2009' );

	expected = 'beep';
	actual = ltrim( '\u200abeep' );
	t.equal( actual, expected, 'removes \\u200a' );

	expected = 'beep';
	actual = ltrim( '\u2028beep' );
	t.equal( actual, expected, 'removes \\u2028' );

	expected = 'beep';
	actual = ltrim( '\u2029beep' );
	t.equal( actual, expected, 'removes \\u2029' );

	expected = 'beep';
	actual = ltrim( '\u202fbeep' );
	t.equal( actual, expected, 'removes \\u202f' );

	expected = 'beep';
	actual = ltrim( '\u205fbeep' );
	t.equal( actual, expected, 'removes \\u205f' );

	expected = 'beep';
	actual = ltrim( '\u3000beep' );
	t.equal( actual, expected, 'removes \\u3000' );

	expected = 'beep';
	actual = ltrim( '\ufeffbeep' );
	t.equal( actual, expected, 'removes \\ufefff' );

	t.end();
});

tape( 'the function does not remove the Mongolian space separator in accordance with Unicode 6.3.0 and later', opts, function test( t ) {
	var expected;
	var actual;

	expected = '\u180ebeep';
	actual = ltrim( '\u180ebeep' );
	t.equal( actual, expected, 'does not remove \\u180e' );

	t.end();
});
