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
var percentEncode = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof percentEncode, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
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
			percentEncode( value );
		};
	}
});

tape( 'the function percent-encodes a string', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	// Some test values are from https://dev.twitter.com/oauth/overview/percent-encoding-parameters.
	values = [
		'Ladies + Gentlemen',
		'An encoded string!',
		'Dogs, Cats & Mice',
		'☃',
		'æ',
		'𐐷',
		'()',
		'https://en.wikipedia.org/wiki/Mode_(statistics)'
	];

	expected = [
		'Ladies%20%2B%20Gentlemen',
		'An%20encoded%20string%21',
		'Dogs%2C%20Cats%20%26%20Mice',
		'%E2%98%83',
		'%C3%A6',
		'%F0%90%90%B7',
		'%28%29',
		'https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMode_%28statistics%29'
	];

	for ( i = 0; i < values.length; i++ ) {
		out = percentEncode( values[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for '+values[i] );
	}
	t.end();
});
