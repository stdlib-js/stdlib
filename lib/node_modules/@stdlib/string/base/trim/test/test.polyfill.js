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
var trim = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof trim, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function removes all whitespace characters at the beginning and end of a string', function test( t ) {
	var expected;
	var actual;

	expected = 'Whitespace';
	actual = trim( '   Whitespace   ' );
	t.equal( actual, expected, 'removes all spaces' );

	expected = 'beep';
	actual = trim( '    beep' );
	t.equal( actual, expected, 'removes all spaces' );

	expected = 'boop';
	actual = trim( 'boop        ' );
	t.equal( actual, expected, 'removes all spaces' );

	expected = 'foo foo';
	actual = trim( '   foo foo     ' );
	t.equal( actual, expected, 'removes all spaces' );

	expected = '# bar bar bar';
	actual = trim( '# bar bar bar    ' );
	t.equal( actual, expected, 'removes all spaces' );

	expected = '# beep boop';
	actual = trim( '         # beep boop' );
	t.equal( actual, expected, 'removes all spaces' );

	expected = 'foo \n\n\n\n foo';
	actual = trim( '   foo \n\n\n\n foo     ' );
	t.equal( actual, expected, 'removes all spaces' );

	expected = 'Tabs';
	actual = trim( '\t\t\tTabs\t\t\t' );
	t.equal( actual, expected, 'removes all tabs' );

	expected = 'New Lines';
	actual = trim( '\n\n\nNew Lines\n\n\n' );
	t.equal( actual, expected, 'removes all newline characters' );

	expected = 'Beep';
	actual = trim( ' \r\n\tBeep \r\n\t' );
	t.equal( actual, expected, 'removes all whitespace characters' );

	expected = 'beep';
	actual = trim( '\fbeep\f' );
	t.equal( actual, expected, 'removes \\f' );

	expected = 'beep';
	actual = trim( '\nbeep\n' );
	t.equal( actual, expected, 'removes \\n' );

	expected = 'beep';
	actual = trim( '\tbeep\t' );
	t.equal( actual, expected, 'removes \\t' );

	expected = 'beep';
	actual = trim( '\vbeep\v' );
	t.equal( actual, expected, 'removes \\v' );

	expected = 'beep';
	actual = trim( '\u1680beep\u1680' );
	t.equal( actual, expected, 'removes \\u1680' );

	expected = 'beep';
	actual = trim( '\u2000beep\u2000' );
	t.equal( actual, expected, 'removes \\u2000' );

	expected = 'beep';
	actual = trim( '\u2001beep\u2001' );
	t.equal( actual, expected, 'removes \\u2001' );

	expected = 'beep';
	actual = trim( '\u2002beep\u2002' );
	t.equal( actual, expected, 'removes \\u2002' );

	expected = 'beep';
	actual = trim( '\u2003beep\u2003' );
	t.equal( actual, expected, 'removes \\u2003' );

	expected = 'beep';
	actual = trim( '\u2004beep\u2004' );
	t.equal( actual, expected, 'removes \\u2004' );

	expected = 'beep';
	actual = trim( '\u2005beep\u2005' );
	t.equal( actual, expected, 'removes \\u2005' );

	expected = 'beep';
	actual = trim( '\u2006beep\u2006' );
	t.equal( actual, expected, 'removes \\u2006' );

	expected = 'beep';
	actual = trim( '\u2007beep\u2007' );
	t.equal( actual, expected, 'removes \\u2007' );

	expected = 'beep';
	actual = trim( '\u2008beep\u2008' );
	t.equal( actual, expected, 'removes \\u2008' );

	expected = 'beep';
	actual = trim( '\u2009beep\u2009' );
	t.equal( actual, expected, 'removes \\u2009' );

	expected = 'beep';
	actual = trim( '\u200abeep\u200a' );
	t.equal( actual, expected, 'removes \\u200a' );

	expected = 'beep';
	actual = trim( '\u2028beep\u2028' );
	t.equal( actual, expected, 'removes \\u2028' );

	expected = 'beep';
	actual = trim( '\u2029beep\u2029' );
	t.equal( actual, expected, 'removes \\u2029' );

	expected = 'beep';
	actual = trim( '\u202fbeep\u202f' );
	t.equal( actual, expected, 'removes \\u202f' );

	expected = 'beep';
	actual = trim( '\u205fbeep\u205f' );
	t.equal( actual, expected, 'removes \\u205f' );

	expected = 'beep';
	actual = trim( '\u3000beep\u3000' );
	t.equal( actual, expected, 'removes \\u3000' );

	expected = 'beep';
	actual = trim( '\ufeffbeep\ufeff' );
	t.equal( actual, expected, 'removes \\ufefff' );

	t.end();
});

tape( 'the function does not remove the Mongolian space separator in accordance with Unicode 6.3.0 and later', function test( t ) {
	var expected;
	var actual;

	expected = '\u180ebeep\u180e';
	actual = trim( '\u180ebeep\u180e' );
	t.equal( actual, expected, 'does not remove \\u180e' );

	t.end();
});
