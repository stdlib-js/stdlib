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
var isAnagram = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAnagram, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a primitive comparison string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		undefined,
		NaN,
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
			isAnagram( value );
		};
	}
});

tape( 'the function returns `true` if provided an anagram', function test( t ) {
	t.strictEqual( isAnagram( 'bat', 'tab' ), true, 'returns true when provided `bat` and `tab`' );
	t.strictEqual( isAnagram( 'bat', 'TaB' ), true, 'returns true when provided `bat` and `TaB`' );
	t.strictEqual( isAnagram( 'bat', 't a b' ), true, 'returns true when provided `bat` and `t a b`' );
	t.strictEqual( isAnagram( 'bat', 'TAB' ), true, 'returns true when provided `bat` and `TAB`' );
	t.strictEqual( isAnagram( 'William Shakespeare', 'I am a weakish speller' ), true, 'returns true when provided `William Shakespeare` and `I am a weakish speller`' );
	t.strictEqual( isAnagram( 'bat 321', 'tab 123' ), true, 'returns true when provided `bat 321` and `tab 123`' );

	t.end();
});

tape( 'the function returns `false` if not provided an anagram', function test( t ) {
	var values;
	var i;

	values = [
		'abbt',
		'bbt',
		5,
		null,
		undefined,
		true,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAnagram( 'bat', values[i] ), false, 'returns false when provided ' + values[i] + ' and `bat`' );
	}
	t.end();
});
