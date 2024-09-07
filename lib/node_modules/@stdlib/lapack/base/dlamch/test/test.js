/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var dlamch = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlamch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns machine parameters', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		'E',
		'S',
		'B',
		'P',
		'N',
		'R',
		'M',
		'U',
		'L',
		'O',
		'e',
		's',
		'b',
		'p',
		'n',
		'r',
		'm',
		'u',
		'l',
		'o'
	];

	expected = [
		1.1102230246251565e-16,
		2.2250738585072014e-308,
		2.0,
		2.2204460492503131e-16,
		53.0,
		1.0,
		-1021.0,
		2.2250738585072014e-308,
		1024.0,
		1.7976931348623157e+308,
		1.1102230246251565e-16,
		2.2250738585072014e-308,
		2.0,
		2.2204460492503131e-16,
		53.0,
		1.0,
		-1021.0,
		2.2250738585072014e-308,
		1024.0,
		1.7976931348623157e+308
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = dlamch( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value for '+values[i] );
	}
	t.end();
});

tape( 'the function returns `0` if provided an unrecognized string', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		'__foo__',
		'**bar**',
		'&&beep&&'
	];

	expected = 0.0;

	for ( i = 0; i < values.length; i++ ) {
		actual = dlamch( values[ i ] );
		t.strictEqual( actual, expected, 'returns expected value for '+values[i] );
	}
	t.end();
});
