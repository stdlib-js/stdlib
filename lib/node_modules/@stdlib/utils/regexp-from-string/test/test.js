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
var reFromString = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof reFromString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a primitive string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		undefined,
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
			reFromString( value );
		};
	}
});

tape( 'the function returns a regular expression', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		'/beep/',
		'/[A-Z]*/',
		'/\\\\\\\//ig', // eslint-disable-line no-useless-escape
		'/[A-Z]{0,}/',
		'/^boop$/',
		'/(?:.*)/',
		'/(?:beep|boop)/',
		'/\\w+/'
	];

	expected = [
		/beep/,
		/[A-Z]*/,
		/\\\//ig,
		/[A-Z]{0,}/,
		/^boop$/,
		/(?:.*)/,
		/(?:beep|boop)/,
		/\w+/
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = reFromString( values[ i ] );
		t.equal( actual.toString(), expected[ i ].toString(), values[ i ] );
	}
	t.end();
});

tape( 'the function returns `null` if unable to parse an input string as a regular expression', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'/boop',
		'/dir//',
		'/dir/goo',
		'\/\/\/\/' // eslint-disable-line no-useless-escape
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( reFromString( values[i] ), null, values[ i ] );
	}
	t.end();
});
