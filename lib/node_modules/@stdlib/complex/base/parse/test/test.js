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
var parse = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof parse, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns complex like object if provided valid complex string', function test( t ) {
	var tests;
	var i;

	tests = [
		{
			'value': '1 + 2i',
			'expected': {
				're': 1,
				'im': 2
			}
		},
		{
			'value': '1',
			'expected': {
				're': 1,
				'im': 0
			}
		},
		{
			'value': '2i',
			'expected': {
				're': 0,
				'im': 2
			}
		},
		{
			'value': '-2i',
			'expected': {
				're': 0,
				'im': -2
			}
		},
		{
			'value': '2i',
			'expected': {
				're': 0,
				'im': 2
			}
		},
		{
			'value': '1.523 - 4.234i',
			'expected': {
				're': 1.523,
				'im': -4.234
			}
		},
		{
			'value': '-1.5 + 4.2i',
			'expected': {
				're': -1.5,
				'im': 4.2
			}
		},
		{
			'value': '1.0e10 -2.0e-10i',
			'expected': {
				're': 1.0e10,
				'im': -2.0e-10
			}
		},
		{
			'value': '1.0E10 + 4.1e+10i',
			'expected': {
				're': 1.0e10,
				'im': 4.1e+10
			}
		},
		{
			'value': '1+2i',
			'expected': {
				're': 1,
				'im': 2
			}
		},
		{
			'value': '1-0i',
			'expected': {
				're': 1,
				'im': 0
			}
		},
		{
			'value': '0+1i',
			'expected': {
				're': 0,
				'im': 1
			}
		},
		{
			'value': '-0.0 + 2.0i',
			'expected': {
				're': 0.0,
				'im': 2.0
			}
		},
		{
			'value': '-Infinity + 5i',
			'expected': {
				're': -Infinity,
				'im': 5
			}
		},
		{
			'value': 'Infinity-Infinityi',
			'expected': {
				're': Infinity,
				'im': -Infinity
			}
		}
	];

	for ( i = 0; i < tests.length; i++ ) {
		t.deepEqual( parse( tests[ i ].value ), tests[ i ].expected, 'returns expected complex like object' );
	}
	t.end();
});

tape( 'the function returns null if provided input is not a complex number string', function test( t ) {
	var values;
	var i;

	values = [
		'boop',
		'4 + 5i5',
		null,
		Infinity,
		'55555555555555boop5',
		{},
		NaN
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( parse( values[ i ] ), null, 'returns null' );
	}
	t.end();
});
