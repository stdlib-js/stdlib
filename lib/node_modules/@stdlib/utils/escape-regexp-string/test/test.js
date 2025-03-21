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
var rescape = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rescape, 'function', 'main export is a function' );
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
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws when provided a ' + (typeof values[i]) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			rescape( value );
		};
	}
});

tape( 'the function escapes a regular expression string', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		'/beep/',
		'/[A-Z]*/',
		'/\\\//ig', // eslint-disable-line no-useless-escape
		'/[A-Z]{0,}/',
		'/^boop$/',
		'/(?:.*)/',
		'/(?:beep|boop)/'
	];

	expected = [
		'/beep/',
		'/\\[A\\-Z\\]\\*/',
		'/\\\\\\\//ig', // eslint-disable-line no-useless-escape
		'/\\[A\\-Z\\]\\{0,\\}/',
		'/\\^boop\\$/',
		'/\\(\\?:\\.\\*\\)/',
		'/\\(\\?:beep\\|boop\\)/'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = rescape( values[ i ] );
		t.strictEqual( actual, expected[ i ], values[ i ], 'escapes string' );
	}
	t.end();
});

tape( 'the function escapes a regular expression string pattern', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		'beep',
		'[A-Z]*',
		'\\\/', // eslint-disable-line no-useless-escape
		'[A-Z]{0,}',
		'^boop$',
		'(?:.*)',
		'(?:beep|boop)',
		'/beep'
	];

	expected = [
		'beep',
		'\\[A\\-Z\\]\\*',
		'\\\\\\\/', // eslint-disable-line no-useless-escape
		'\\[A\\-Z\\]\\{0,\\}',
		'\\^boop\\$',
		'\\(\\?:\\.\\*\\)',
		'\\(\\?:beep\\|boop\\)',
		'\\/beep'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = rescape( values[ i ] );
		t.strictEqual( actual, expected[ i ], values[ i ], 'escapes string' );
	}
	t.end();
});
