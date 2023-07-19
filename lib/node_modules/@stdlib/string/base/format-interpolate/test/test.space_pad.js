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
var spacePad = require( './../lib/space_pad.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof spacePad, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function pads an argument to a minimum width', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello World!';
	expected = 'Hello World!';
	actual = spacePad( str, 10 );
	t.strictEqual( actual, expected, 'does not pad' );

	str = 'Hello World!';
	expected = '  Hello World!';
	actual = spacePad( str, 14 );
	t.strictEqual( actual, expected, 'pads' );

	str = 'beep';
	expected = 'beep';
	actual = spacePad( str, 2 );
	t.strictEqual( actual, expected, 'does not pad' );

	str = 'beep';
	expected = '    beep';
	actual = spacePad( str, 8 );
	t.strictEqual( actual, expected, 'pads' );

	t.end();
});

tape( 'the function pads an argument to a minimum width on the right', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello World!';
	expected = 'Hello World!';
	actual = spacePad( str, 10, true );
	t.strictEqual( actual, expected, 'does not pad' );

	str = 'Hello World!';
	expected = 'Hello World!  ';
	actual = spacePad( str, 14, true );
	t.strictEqual( actual, expected, 'pads' );

	str = 'beep';
	expected = 'beep    ';
	actual = spacePad( str, 8, true );
	t.strictEqual( actual, expected, 'pads' );

	t.end();
});
