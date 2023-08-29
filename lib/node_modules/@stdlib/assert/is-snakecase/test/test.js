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
var isSnakeCase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSnakeCase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if a string is in snake case', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'beep_boop',
		'beep_boop_boop',
		'foo_bar_baz',
		'foo_bar_baz_123'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isSnakeCase( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided an empty string', function test( t ) {
	t.equal( isSnakeCase( '' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if a string is not in snake case', function test( t ) {
	var values;
	var i;

	values = [
		'beepBoop',
		'FOO_BAR',
		'foo-bar',
		'foo bar',
		'foo bar baz',
		'FooBar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isSnakeCase( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a string', function test( t ) {
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
		t.equal( isSnakeCase( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
