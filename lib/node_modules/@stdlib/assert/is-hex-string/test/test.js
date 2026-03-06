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
var isHexString = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isHexString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a string containing all hexadecimal digits', function test( t ) {
	t.strictEqual( isHexString( '0123456789abcdefABCDEF' ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a string containing all hexadecimal digits', function test( t ) {
	var values;
	var i;

	values = [
		'',
		'È',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
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
		new String( 'abcdef' ), // eslint-disable-line no-new-wrappers
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isHexString( values[i] ), false, 'returns false when provided ' + values[i] );
	}
	t.end();
});
