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

/* eslint-disable object-property-newline, object-curly-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var uppercase = require( '@stdlib/string/uppercase' );
var parseDuration = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof parseDuration, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function parses a duration string', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		'1m3s10ms',
		'3d2h1m',
		'1d2h3m4s5ms',
		'2m3s',
		'1h2m3s4ms',
		'1m3s10ms',
		'2ms',
		'1m',
		'1h',
		'1d',
		''
	];
	expected = [
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 },
		{ 'days': 3, 'hours': 2, 'minutes': 1, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 1, 'hours': 2, 'minutes': 3, 'seconds': 4, 'milliseconds': 5 },
		{ 'days': 0, 'hours': 0, 'minutes': 2, 'seconds': 3, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 1, 'minutes': 2, 'seconds': 3, 'milliseconds': 4 },
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 },
		{ 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 2 },
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 1, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 1, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = parseDuration( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function parses a duration string (uppercase)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		'1M3S10MS',
		'3D2H1M',
		'1D2H3M4S5MS',
		'2M3S',
		'1H2M3S4MS',
		'1M3S10MS',
		'2MS',
		'1M',
		'1H',
		'1D',
		''
	];
	expected = [
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 },
		{ 'days': 3, 'hours': 2, 'minutes': 1, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 1, 'hours': 2, 'minutes': 3, 'seconds': 4, 'milliseconds': 5 },
		{ 'days': 0, 'hours': 0, 'minutes': 2, 'seconds': 3, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 1, 'minutes': 2, 'seconds': 3, 'milliseconds': 4 },
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 },
		{ 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 2 },
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 1, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 1, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = parseDuration( uppercase( values[ i ] ) );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function parses a duration string (mixed case)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		'1M3s10ms',
		'1m3s10Ms',
		'3D2h1m',
		'1d2h3m4s5ms',
		'2m3S',
		'1h2m3s4MS',
		'1M3s10MS',
		'2ms',
		'1m',
		'1H',
		'1d',
		''
	];
	expected = [
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 },
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 },
		{ 'days': 3, 'hours': 2, 'minutes': 1, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 1, 'hours': 2, 'minutes': 3, 'seconds': 4, 'milliseconds': 5 },
		{ 'days': 0, 'hours': 0, 'minutes': 2, 'seconds': 3, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 1, 'minutes': 2, 'seconds': 3, 'milliseconds': 4 },
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 },
		{ 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 2 },
		{ 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 1, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 1, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 },
		{ 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = parseDuration( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});
