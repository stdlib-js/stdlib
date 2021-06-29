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
var isAlphaNumeric = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAlphaNumeric, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a string containing all alphanumeric characters', function test( t ) {
	var values;
	var i;

	values = [
		'a123',
		'b',
		'c',
		'd',
		'e',
		'f456',
		'123g',
		'hacd',
		'idc',
		'54',
		'j21',
		'kasd',
		'l',
		'm',
		'n',
		'o',
		'pop',
		'q234',
		'r98765',
		's',
		't',
		'u',
		'v',
		'w1234123',
		'sdcasdx',
		'354367854y',
		'z',
		'6583924A',
		'BFUNFPIO443',
		'C',
		'DRCJENRJNRFWERF',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'0123456789'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAlphaNumeric( values[i] ), true, 'returns true when provided ' + values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a string containing exclusively alphanumeric characters', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'',
		'6y;',
		'.',
		null,
		NaN,
		function noop() { },
		' ',
		new String( '0123456789' ) // eslint-disable-line no-new-wrappers
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAlphaNumeric( values[i] ), false, 'returns true when provided ' + values[i] );
	}
	t.end();
});
