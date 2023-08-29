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
var replace = require( '@stdlib/string/replace' );
var reWhitespace = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reWhitespace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a regular expression to match white space character sequences (no options)', function test( t ) {
	var values;
	var re;
	var i;

	re = reWhitespace();

	values = [
		'\r',
		'\n',
		' ',
		'\t',
		'\v',
		'\u0009',
		'\u000A',
		'\u000B',
		'\u000C',
		'\u000D',
		'\u0020',
		'\u0085',
		'\u00A0',
		'\u1680',
		'\u2000',
		'\u2001',
		'\u2002',
		'\u2003',
		'\u2004',
		'\u2005',
		'\u2006',
		'\u2007',
		'\u2008',
		'\u2009',
		'\u200A',
		'\u2028',
		'\u2029',
		'\u202F',
		'\u205F',
		'\u3000',
		'\uFEFF'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( re.test( values[ i ] ), true, 'matches when provided '+values[i] );
	}
	t.end();
});

tape( 'the returned regular expression does not match escaped sequences or non-matching strings (no options)', function test( t ) {
	var values;
	var re;
	var i;

	re = reWhitespace();

	values = [
		'\\r',
		'\\n',
		'b',
		'beep',
		'\u180E',
		'\u200B',
		'\u200C',
		'\u200D',
		'\u2060'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( re.test( values[ i ] ), false, 'does not match when provided '+values[i] );
	}
	t.end();
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reWhitespace( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		NaN,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'capture': value
			};
			reWhitespace( opts );
		};
	}
});

tape( 'the function supports returning a regular expression wrapped in a capture group', function test( t ) {
	var expected;
	var arr;
	var str;
	var re;

	re = reWhitespace({
		'capture': true
	});
	str = 'Hello World!';
	expected = [ 'Hello', ' ', 'World!' ];
	arr = str.split( re );

	t.deepEqual( arr, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying regular expression flags', function test( t ) {
	var expected;
	var actual;
	var str;
	var re;

	str = ' Hello World!   ';

	re = reWhitespace();
	actual = replace( str, re, '!' );
	expected = '!Hello World!   ';

	t.strictEqual( actual, expected, 'returns expected value' );

	re = reWhitespace({
		'flags': 'g'
	});
	actual = replace( str, re, '!' );
	expected = '!Hello!World!!!!';

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
