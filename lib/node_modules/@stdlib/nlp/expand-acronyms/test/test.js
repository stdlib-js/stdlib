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
var expandAcronyms = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof expandAcronyms, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a primitive string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
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
			expandAcronyms( value );
		};
	}
});

tape( 'the function expands acronyms', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		'RTFM, I tell you!',
		'LOL, I\'m funny!',
		'This is a great idea, IMHO!',
		'BRB, someone is ringing the bell!',
		'OMG, I\'m so excited!',
		'We need to get to the root of this ASAP!'
	];
	expected = [
		'read the f*cking manual, I tell you!',
		'laughing out loud, I\'m funny!',
		'This is a great idea, in my humble opinion!',
		'be right back, someone is ringing the bell!',
		'oh my god, I\'m so excited!',
		'We need to get to the root of this as soon as possible!'
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = expandAcronyms( values[i] );
		t.strictEqual( actual, expected[i], 'converts string to '+expected[i] );
	}
	t.end();
});
