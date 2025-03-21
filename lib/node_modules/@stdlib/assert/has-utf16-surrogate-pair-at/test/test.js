/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var hasUTF16SurrogatePairAt = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hasUTF16SurrogatePairAt, 'function', 'main export is a function' );
	t.end();
});

tape( 'the arity of the function is 2', function test( t ) {
	t.strictEqual( hasUTF16SurrogatePairAt.length, 2, 'has length 2' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a string primitive', function test( t ) {
	var values;
	var i;

	values = [
		-5,
		3.14,
		-1.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			hasUTF16SurrogatePairAt( value, 0 );
		};
	}
});

tape( 'the function throws an error if the second argument is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'bar',
		-5,
		3.14,
		-1.0,
		NaN,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			hasUTF16SurrogatePairAt( 'foo', value );
		};
	}
});

tape( 'the function throws an error if a provided position is not a valid index in the provided string', function test( t ) {
	var values;
	var i;

	values = [
		[ 'bar', 3 ],
		[ 'string', 7 ],
		[ '', 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			hasUTF16SurrogatePairAt( value[ 0 ], value[ 1 ] );
		};
	}
});

tape( 'the function returns true if the specified position marks the start of a surrogate pair', function test( t ) {
	var out;

	out = hasUTF16SurrogatePairAt( '🌷🠀', 2 );
	t.strictEqual( out, true, 'returns expected value' );

	out = hasUTF16SurrogatePairAt( '🌷', 0 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns false if the specified position does not mark the start of a surrogate pair', function test( t ) {
	var out;

	out = hasUTF16SurrogatePairAt( '🌷🠀', 3 );
	t.strictEqual( out, false, 'returns expected value' );

	out = hasUTF16SurrogatePairAt( '🌷', 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});
