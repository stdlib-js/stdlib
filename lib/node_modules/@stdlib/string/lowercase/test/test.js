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
var lowercase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lowercase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			lowercase( value );
		};
	}
});

tape( 'the function converts a string to lowercase', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		'beep',
		'Beep',
		'BeEp',
		'Beep BOOP',
		'$**_Beep_BoOp_**$',
		''
	];
	expected = [
		'beep',
		'beep',
		'beep',
		'beep boop',
		'$**_beep_boop_**$',
		''
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = lowercase( values[i] );
		t.equal( actual, expected[i], 'converts string to '+expected[i] );
	}
	t.end();
});
