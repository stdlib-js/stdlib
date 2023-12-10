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
var contains = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof contains, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not array-like', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			contains( value, '' );
		};
	}
});

tape( 'the function throws an error if not provided a second argument', function test( t ) {
	t.throws( badValue, Error, 'throws an error when not provided a second argument' );
	t.end();

	function badValue() {
		return contains( 'abc' );
	}
});

tape( 'the function throws an error if the first argument is a string and the second argument is not a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		false,
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
			contains( 'abc', value );
		};
	}
});

tape( 'the function throws an error if the `position` argument is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		6.5,
		'5',
		null,
		true,
		false,
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
			contains( 'Hello World', 'Hello', value );
		};
	}
});

tape( 'the function returns `true` when a search string is contained in input string', function test( t ) {
	var out;

	out = contains( 'Hello World', 'World' );
	t.equal( out, true, 'returns true' );

	out = contains( 'Hello World', ' ' );
	t.equal( out, true, 'returns true' );

	out = contains( 'Hello World', 'Hell' );
	t.equal( out, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` when a search string is not contained in input string', function test( t ) {
	var out;

	out = contains( 'Hello World', 'world' );
	t.equal( out, false, 'returns false' );

	out = contains( 'Hello World', '\t' );
	t.equal( out, false, 'returns false' );

	out = contains( 'Hello World', 'Word' );
	t.equal( out, false, 'returns false' );

	t.end();
});

tape( 'the function returns `true` when a search value is contained in input array', function test( t ) {
	var out;

	out = contains( [ NaN, null, 3, 'abc' ], 'abc' );
	t.equal( out, true, 'returns true' );

	out = contains( [ NaN, null, 3, 'abc' ], NaN );
	t.equal( out, true, 'returns true' );

	out = contains( [ NaN, null, 3, 'abc' ], null );
	t.equal( out, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` when search value is not contained in input array', function test( t ) {
	var out;

	out = contains( [ NaN, null, 3, 'abc' ], 'ac' );
	t.equal( out, false, 'returns false' );

	out = contains( [ NaN, null, 3, 'abc' ], false );
	t.equal( out, false, 'returns false' );

	out = contains( [ NaN, null, 3, 'abc' ], 3.5 );
	t.equal( out, false, 'returns false' );

	t.end();
});

tape( 'the function supports beginning a search at the specified position', function test( t ) {
	var out;

	out = contains( 'ABCDEFG', 'A', 1 );
	t.equal( out, false, 'returns false' );

	out = contains( 'ABCDEFG', 'B', 1 );
	t.equal( out, true, 'returns true' );

	out = contains( 'ABCDEFG', 'A', -3 );
	t.equal( out, true, 'returns true' );

	out = contains( [ null, NaN, 2 ], 3, 1 );
	t.equal( out, false, 'returns false' );

	out = contains( [ null, NaN, 2 ], NaN, 1 );
	t.equal( out, true, 'returns true' );

	out = contains( [ null, NaN, 2 ], NaN, -3 );
	t.equal( out, true, 'returns true' );

	out = contains( [ null, NaN, 2 ], NaN, 2 );
	t.equal( out, false, 'returns false' );

	t.end();
});

tape( 'the function returns `true` if provided an input string and an empty string as the search value', function test( t ) {
	t.equal( contains( 'abc', '' ), true, 'returns true' );
	t.equal( contains( '', '' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided an empty array-like value', function test( t ) {
	t.equal( contains( [], '' ), false, 'returns false' );
	t.end();
});

tape( 'the function does not distinguish between positive and negative zero', function test( t ) {
	t.equal( contains( [ -0.0 ], +0.0 ), true, 'returns true' );
	t.equal( contains( [ +0.0 ], -0.0 ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a position which exceeds the maximum index', function test( t ) {
	t.equal( contains( [ 1 ], 1, 1e5 ), false, 'returns false' );
	t.equal( contains( 'abc', 'a', 1e5 ), false, 'returns false' );
	t.end();
});
