/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var levenshteinDistance = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof levenshteinDistance, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string as its first argument', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			levenshteinDistance( value, 'dummy' );
		};
	}
});

tape( 'the function throws an error if not provided a string as its second argument', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			levenshteinDistance( 'dummy', value );
		};
	}
});

tape( 'calculates the Levenshtein (edit) distance between two strings.', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		[ 'algorithm', 'altruistic' ],
		[ '1638452297', '444488444' ],
		[ '', '' ],
		[ '', 'a' ],
		[ 'aaapppp', '' ],
		[ 'frog', 'fog' ],
		[ 'fly', 'ant' ],
		[ 'elephant', 'hippo' ],
		[ 'hippo', 'elephant' ],
		[ 'hippo', 'zzzzzzzz' ],
		[ 'hello', 'hallo' ],
		[ 'congratulations', 'conmgeautlatins' ]
	];

	expected = [ 6, 9, 0, 1, 7, 1, 3, 7, 7, 8, 1, 5 ];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( levenshteinDistance( values[i][0], values[i][1] ), expected[i], 'returns ' + expected[i] );
	}
	t.end();
});

tape( 'calculates the Levenshtein (edit) distance between two strings with unicode characters.', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		[ 'fóoBár', 'fóo' ],
		[ 'Привет', 'теи' ],
		[ '_Світ-прекрасний', 'прекрасний' ],
		[ '🤨🥹', '🥹' ],
		[ 'हिंदी', 'தமிழ்' ],
		[ '𝄞', '\uD834\uDD1E' ]
	];

	expected = [ 3, 5, 6, 2, 5, 0 ];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( levenshteinDistance( values[i][0], values[i][1] ), expected[i], 'returns expected value.' );
	}
	t.end();
});
