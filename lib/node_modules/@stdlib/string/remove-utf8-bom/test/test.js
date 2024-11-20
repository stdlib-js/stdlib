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
var string2buffer = require( '@stdlib/buffer/from-string' );
var removeUTF8BOM = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof removeUTF8BOM, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string primitive', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		void 0,
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
			removeUTF8BOM( value );
		};
	}
});

tape( 'the function removes a UTF-8 byte order mark (BOM) from the beginning of a string', function test( t ) {
	var str;

	str = removeUTF8BOM( '\ufeffbeep' );
	t.equal( str, 'beep', 'returns beep' );

	str = string2buffer( '\ufeffboop' ).toString();
	str = removeUTF8BOM( str );
	t.equal( str, 'boop', 'returns boop' );

	t.end();
});

tape( 'the function ignores zero-width non-breaking spaces (Unicode) occurring elsewhere in a string', function test( t ) {
	var str;

	str = removeUTF8BOM( 'boop\ufeff' );
	t.equal( str, 'boop\ufeff', 'returns boop\ufeff' );

	str = removeUTF8BOM( 'be\ufeffbop' );
	t.equal( str, 'be\ufeffbop', 'returns be\ufeffbop' );

	t.end();
});

tape( 'if a string does not begin with a BOM, the function returns the input string unchanged', function test( t ) {
	var str = removeUTF8BOM( 'foobar' );
	t.equal( str, 'foobar', 'returns foobar' );
	t.end();
});
