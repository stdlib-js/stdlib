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
var capitalize = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof capitalize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
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
			capitalize( value );
		};
	}
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.equal( capitalize( '' ), '', 'returns empty string' );
	t.end();
});

tape( 'the function capitalizes the first character in a provided string', function test( t ) {
	var out;

	out = capitalize( 'hello world' );
	t.equal( out, 'Hello world', 'capitalizes first character' );

	out = capitalize( '!!!' );
	t.equal( out, '!!!', 'does not change non-alphabetical characters' );

	out = capitalize( 'Hello World' );
	t.equal( out, 'Hello World', 'leaves uppercase letters in uppercase' );

	t.end();
});
