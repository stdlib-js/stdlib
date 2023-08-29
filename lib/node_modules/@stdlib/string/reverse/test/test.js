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
var reverseString = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reverseString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
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
			reverseString( value );
		};
	}
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( reverseString( '' ), '', 'returns expected value' );
	t.end();
});

tape( 'the function reverses a string', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		'hello world',
		'!!!',
		'Hello World',
		'𝑨𝑩𝑪',
		'ma\xF1ana',
		'man\u0303ana',                               // combining mark
		'foo\u0303\u035C\u035D\u035Ebar',             // multiple combining marks
		'foo\uD834\uDF06bar',                         // astral symbol (surrogate pair)
		'foo\uD834bar\uDF06baz',                      // unpaired surrogates
		'foo\uD834\uDF06\u0303bar',                   // astral symbol (surrogate pair) followed by a single combining mark
		'foo\uD834\uDF06\u0303\u035C\u035D\u035Ebar', // astral symbol (surrogate pair) followed by multiple combining marks
		'H\u0339\u0319\u0326\u032E\u0349\u0329\u0317\u0317\u0367\u0307\u030F\u030A\u033EE\u0368\u0346\u0352\u0306\u036E\u0303\u034F\u0337\u032E\u0323\u032B\u0324\u0323 \u0335\u031E\u0339\u033B\u0300\u0309\u0313\u036C\u0351\u0361\u0345C\u036F\u0302\u0350\u034F\u0328\u031B\u0354\u0326\u031F\u0348\u033BO\u031C\u034E\u034D\u0359\u035A\u032C\u031D\u0323\u033D\u036E\u0350\u0357\u0300\u0364\u030D\u0300\u0362M\u0334\u0321\u0332\u032D\u034D\u0347\u033C\u031F\u032F\u0326\u0309\u0312\u0360\u1E1A\u031B\u0319\u031E\u032A\u0317\u0365\u0364\u0369\u033E\u0351\u0314\u0350\u0345\u1E6E\u0334\u0337\u0337\u0317\u033C\u034D\u033F\u033F\u0313\u033D\u0350H\u0319\u0319\u0314\u0304\u035C',
		'六书/六書',
		'กิิก้้ก็็ก็็กิิก้้ก็็กิิก้้กิิก้้ก็็ก็็กิิก้้ก็็กิิก้้',
		'\u{1112}\u{1161}\u{11AB}', // eslint-disable-line  node/no-unsupported-features/es-syntax
		'\u{D55C}', // eslint-disable-line  node/no-unsupported-features/es-syntax
		'เ❄︎நி'
	];

	expected = [
		'dlrow olleh',
		'!!!',
		'dlroW olleH',
		'𝑪𝑩𝑨',
		'ana\xF1am',
		'anan\u0303am',
		'rabo\u0303\u035C\u035D\u035Eof',
		'rab\uD834\uDF06oof',
		'zab\uDF06rab\uD834oof',
		'rab\uD834\uDF06\u0303oof',
		'rab\uD834\uDF06\u0303\u035C\u035D\u035Eoof',
		'H\u0319\u0319\u0314\u0304\u035C\u1E6E\u0334\u0337\u0337\u0317\u033C\u034D\u033F\u033F\u0313\u033D\u0350\u1E1A\u031B\u0319\u031E\u032A\u0317\u0365\u0364\u0369\u033E\u0351\u0314\u0350\u0345M\u0334\u0321\u0332\u032D\u034D\u0347\u033C\u031F\u032F\u0326\u0309\u0312\u0360O\u031C\u034E\u034D\u0359\u035A\u032C\u031D\u0323\u033D\u036E\u0350\u0357\u0300\u0364\u030D\u0300\u0362C\u036F\u0302\u0350\u034F\u0328\u031B\u0354\u0326\u031F\u0348\u033B \u0335\u031E\u0339\u033B\u0300\u0309\u0313\u036C\u0351\u0361\u0345E\u0368\u0346\u0352\u0306\u036E\u0303\u034F\u0337\u032E\u0323\u032B\u0324\u0323H\u0339\u0319\u0326\u032E\u0349\u0329\u0317\u0317\u0367\u0307\u030F\u030A\u033E',
		'書六/书六',
		'ก้้กิิก็็ก้้กิิก็็ก็็ก้้กิิก้้กิิก็็ก้้กิิก็็ก็็ก้้กิิ',
		'\u{1112}\u{1161}\u{11AB}', // eslint-disable-line  node/no-unsupported-features/es-syntax
		'\u{D55C}', // eslint-disable-line  node/no-unsupported-features/es-syntax
		'நி❄︎เ'

	];
	for ( i = 0; i < values.length; i++ ) {
		actual = reverseString( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});
