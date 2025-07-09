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
var duration2ms = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof duration2ms, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a duration string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		'',
		'2x',
		'1w1d',
		'1y3w12d'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			duration2ms( value );
		};
	}
});

tape( 'the function converts a duration string to milliseconds', function test( t ) {
	var expected;
	var values;
	var ms;
	var i;

	values = [
		'1ms',
		'1s',
		'1m',
		'1h',
		'1d',
		'1d2h3m4s5ms'
	];
	expected = [ 1, 1000, 60000, 3600000, 86400000, 93784005 ];

	for ( i = 0; i < values.length; i++ ) {
		ms = duration2ms( values[i] );
		t.equal( ms, expected[i], 'returns expected value when provided '+values[i] );
	}
	t.end();
});
