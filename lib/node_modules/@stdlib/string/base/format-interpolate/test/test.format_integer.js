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
var formatInteger = require( './../lib/format_integer.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof formatInteger, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an integer-formatted token argument', function test( t ) {
	var expected;
	var actual;
	var token;

	token = {
		'specifier': 'b',
		'arg': 3
	};
	expected = '11';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'o',
		'arg': 15
	};
	expected = '17';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'x',
		'arg': 15
	};
	expected = 'f';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'X',
		'arg': 15
	};
	expected = 'F';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an integer-formatted token argument (include sign)', function test( t ) {
	var expected;
	var actual;
	var token;

	token = {
		'specifier': 'b',
		'arg': 3,
		'sign': '-'
	};
	expected = '-11';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'o',
		'arg': 15,
		'sign': '+'
	};
	expected = '+17';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an integer-formatted token argument (alternate form)', function test( t ) {
	var expected;
	var actual;
	var token;

	token = {
		'specifier': 'b',
		'arg': 3,
		'alternate': true
	};
	expected = '11';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'o',
		'arg': 15,
		'alternate': true
	};
	expected = '017';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'x',
		'arg': 15,
		'alternate': true
	};
	expected = '0xf';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'X',
		'arg': 15,
		'alternate': true
	};
	expected = '0XF';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an integer-formatted token argument (precision)', function test( t ) {
	var expected;
	var actual;
	var token;

	token = {
		'specifier': 'd',
		'arg': 10,
		'precision': 5
	};
	expected = '00010';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'd',
		'arg': 10,
		'precision': 5,
		'padRight': true
	};
	expected = '10000';
	actual = formatInteger( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
