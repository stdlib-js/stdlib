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
var removeFirst = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof removeFirst, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		undefined,
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
			removeFirst( value );
		};
	}
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( removeFirst( '' ), '', 'returns empty string' );
	t.end();
});

tape( 'the function removes the first character of a given string', function test( t ) {
	var out;

	out = removeFirst( 'hello world' );
	t.strictEqual( out, 'ello world', 'removes first character' );

	out = removeFirst( '!!!' );
	t.strictEqual( out, '!!', 'removes character' );

	out = removeFirst( 'Hello World' );
	t.strictEqual( out, 'ello World', 'removes character' );

	out = removeFirst( 'अनुच्छेद' );
	t.strictEqual( out, 'नुच्छेद', 'returns expected value' );

	out = removeFirst( '六书/六書' );
	t.strictEqual( out, '书/六書', 'returns expected value' );

	out = removeFirst( '🌷' );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});
