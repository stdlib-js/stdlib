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
var startsWith = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof startsWith, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a string', function test( t ) {
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
			startsWith( value, 'abc' );
		};
	}
});

tape( 'the function throws an error if the second argument is not a string', function test( t ) {
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
			startsWith( 'abc', value );
		};
	}
});

tape( 'the function throws an error if the third argument is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
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
			startsWith( 'abc', 'a', value );
		};
	}
});

tape( 'the function returns `true` if the input string starts with the search value', function test( t ) {
	var bool;

	bool = startsWith( 'Too late, I\'m afraid', 'Too' );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'Not too late, I\'m afraid', 'Not' );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'Welcome home!', 'Welcome home' );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'Welcome home!', 'Welcome home!' );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if the input string does not start with the search value', function test( t ) {
	var bool;

	bool = startsWith( 'Too late, I\'m afraid', 'too' );
	t.strictEqual( bool, false, 'returns false' );

	bool = startsWith( 'Not too late, I\'m afraid', 'Never' );
	t.strictEqual( bool, false, 'returns false' );

	bool = startsWith( 'Welcome home!', 'Welcome at home' );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function supports providing a starting search position relative to the beginning of an input string (positive)', function test( t ) {
	var bool;

	bool = startsWith( 'Too late, I\'m afraid', 'late', 3 );
	t.strictEqual( bool, false, 'returns false' );

	bool = startsWith( 'Too late, I\'m afraid', 'late', 4 );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'Too late, I\'m afraid', 'late', 5 );
	t.strictEqual( bool, false, 'returns false' );

	bool = startsWith( 'Too late, I\'m afraid', 'afraid', 14 );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function supports providing a starting search position relative to the end of an input string (negative)', function test( t ) {
	var bool;

	bool = startsWith( 'Too late, I\'m afraid', 'i', -2 );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'Too late, I\'m afraid', 'afr', -7 );
	t.strictEqual( bool, false, 'returns false' );

	bool = startsWith( 'Too late, I\'m afraid', 'afr', -6 );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'Too late, I\'m afraid', 'afr', -5 );
	t.strictEqual( bool, false, 'returns false' );

	bool = startsWith( 'Too late, I\'m afraid', 'afraid', -6 );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if provided a search string which exceeds the input string length', function test( t ) {
	var bool = startsWith( 'abc', 'abcde' );
	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a search string which exceeds the input (sub)string length', function test( t ) {
	var bool;

	bool = startsWith( 'abc', 'bcd', 1 );
	t.strictEqual( bool, false, 'returns false' );

	bool = startsWith( 'abc', 'bcd', -2 );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `true` if provided an empty search string', function test( t ) {
	var bool;

	bool = startsWith( '', '' );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'abc', '' );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'abc', '', 10 );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'abc', '', -10 );
	t.strictEqual( bool, true, 'returns true' );

	bool = startsWith( 'abc', '', 0 );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if provided a position exceeding the input string length (positive)', function test( t ) {
	var bool = startsWith( 'abc', 'c', 99999 );
	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a position exceeding the input string length (negative)', function test( t ) {
	var bool = startsWith( 'abc', 'a', -5 );
	t.strictEqual( bool, false, 'returns false' );
	t.end();
});
