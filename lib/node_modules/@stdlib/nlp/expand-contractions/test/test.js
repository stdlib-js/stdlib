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
var expandContractions = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof expandContractions, 'function', 'main export is a function' );
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
			expandContractions( value );
		};
	}
});

tape( 'the function expands contractions to their formal equivalents', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		'I won\'t be able to, sorry.',
		'Y\'all\'d be surprised if you know what I\'ll do.',
		'She\'ll be coming around the mountain...',
		'Y\'all\'d\'ve come to the park if y\'all could\'ve, right?',
		'If Parker hadn\'t been sent off for a foul, they\'d\'ve won.'
	];
	expected = [
		'I will not be able to, sorry.',
		'You all would be surprised if you know what I will do.',
		'She will be coming around the mountain...',
		'You all would have come to the park if you all could have, right?',
		'If Parker had not been sent off for a foul, they would have won.'
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = expandContractions( values[i] );
		t.strictEqual( actual, expected[i], 'converts string to '+expected[i] );
	}
	t.end();
});
