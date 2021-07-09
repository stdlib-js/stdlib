/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var reColorHexadecimal = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( reColorHexadecimal instanceof Function, true, 'main export is a function' );
	t.end();
});

tape( 'the function returns a regular expression to match full hexadecimal colors', function test( t ) {
	var RE = reColorHexadecimal();
	t.strictEqual( RE instanceof RegExp, true, 'returns a regular expression' );
	t.end();
});

tape( 'the function returns a regular expression to match shorthand hexadecimal colors', function test( t ) {
	var RE = reColorHexadecimal( 'shorthand' );
	t.strictEqual( RE instanceof RegExp, true, 'returns a regular expression' );
	t.end();
});

tape( 'the function returns a regular expression to match either full or shorthand hexadecimal colors', function test( t ) {
	var RE = reColorHexadecimal( 'either' );
	t.strictEqual( RE instanceof RegExp, true, 'returns a regular expression' );
	t.end();
});

tape( 'the function throws an error if the `mode` argument is not a recognized mode', function test( t ) {
	var values;
	var i;

	values = [
		123,
		'abc',
		true,
		false,
		null,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function factory() {
			reColorHexadecimal( value );
		};
	}
});
