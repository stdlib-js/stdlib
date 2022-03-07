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
var PI = require( '@stdlib/constants/float64/pi' );
var formatDouble = require( './../lib/format_double.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof formatDouble, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a double-formatted token argument', function test( t ) {
	var expected;
	var actual;
	var token;

	token = {
		'specifier': 'f',
		'arg': PI,
		'precision': 2
	};
	expected = '3.14';
	actual = formatDouble( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'F',
		'arg': PI,
		'precision': 4
	};
	expected = '3.1416';
	actual = formatDouble( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'e',
		'arg': PI,
		'precision': 2
	};
	expected = '3.14e+00';
	actual = formatDouble( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'E',
		'arg': PI,
		'precision': 2
	};
	expected = '3.14E+00';
	actual = formatDouble( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a double-formatted token argument (include sign)', function test( t ) {
	var expected;
	var actual;
	var token;

	token = {
		'specifier': 'f',
		'arg': PI,
		'precision': 2,
		'sign': '+'
	};
	expected = '+3.14';
	actual = formatDouble( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	token = {
		'specifier': 'F',
		'arg': PI,
		'precision': 4,
		'sign': '-'
	};
	expected = '-3.1416';
	actual = formatDouble( token );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
