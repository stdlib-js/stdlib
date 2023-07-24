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
var isKebabcase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isKebabcase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a string in kebab case', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'beep-boop',
		'foo-bar-baz'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isKebabcase( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided an empty string', function test( t ) {
	t.equal( isKebabcase( '' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a string that is not in kebab case', function test( t ) {
	var values;
	var i;

	values = [
		'beepBoop',
		'foo bar',
		'BEEP_BOOP',
		'BEEP-BOOP',
		'snake_case'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isKebabcase( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a string', function test( t ) {
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
		t.equal( isKebabcase( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
