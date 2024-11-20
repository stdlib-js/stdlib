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
var replace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof replace, 'function', 'main export is a function' );
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
		function noop() {},
		/ /g
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			replace( value, '', '' );
		};
	}
});

tape( 'the function throws an error if the second argument is not a string or regular expression', function test( t ) {
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
			replace( 'string', value, '' );
		};
	}
});

tape( 'the function throws an error if the third argument is not a function or string', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			replace( 'string', 'str', value );
		};
	}
});

tape( 'the function replaces all occurrences of a string search value', function test( t ) {
	var out;

	out = replace( 'abc abc abc', 'b', '' );
	t.equal( out, 'ac ac ac', 'returns expected value' );

	out = replace( 'abc abc abc', 'b', 'cd' );
	t.equal( out, 'acdc acdc acdc', 'returns expected value' );

	out = replace( 'Et tu, Brute?', 'Brute?', 'Caesar?' );
	t.equal( out, 'Et tu, Caesar?', 'returns expected value' );

	t.end();
});

tape( 'the function replaces matches of a regular expression', function test( t ) {
	var expected;
	var out;

	out = replace( 'aBcDeFgHiJkLmNoPqRsTuVwXYZ', /[A-Z]+/, '' );
	expected = 'acDeFgHiJkLmNoPqRsTuVwXYZ';
	t.equal( out, expected, 'replaces letters matching the regular expression (first occurrence)' );

	out = replace( 'aBcDeFgHiJkLmNoPqRsTuVwXYZ', /[A-Z]+/g, '' );
	expected = 'acegikmoqsuw';
	t.equal( out, expected, 'replaces letters matching the regular expression (global)' );

	t.end();
});

tape( 'the function replaces matches with values returned by a replacer function', function test( t ) {
	var expected;
	var out;
	var str;

	str = 'Oranges and lemons say the bells of St. Clement\'s';
	out = replace( str, /([^\s]+)/gi, replacer );

	expected = '/Oranges/ /and/ /lemons/ /say/ /the/ /bells/ /of/ /St./ /Clement\'s/';
	t.equal( out, expected, 'replaces matches using replacer function' );

	t.end();

	function replacer( match, p1 ) {
		return '/' + p1 + '/';
	}
});
