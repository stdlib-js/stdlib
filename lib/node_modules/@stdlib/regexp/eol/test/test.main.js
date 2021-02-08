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
var reEOL = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof reEOL, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a regular expression to newline character sequence (no options)', function test( t ) {
	var REGEXP = reEOL();
	var values;
	var i;

	values = [
		'\r\n',
		'\n'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( REGEXP.test( values[ i ] ), true, 'matches when provided '+values[i] );
	}
	t.end();
});

tape( 'the returned regular expression does not match escaped sequences or non-matching strings (no options)', function test( t ) {
	var REGEXP = reEOL();
	var values;
	var i;

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
		t.strictEqual( REGEXP.test( values[ i ] ), false, 'does not match when provided '+values[i] );
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
			reEOL( value );
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
		undefined,
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
			reEOL( opts );
		};
	}
});

tape( 'the function supports returning a regular expression wrapped in a capture group', function test( t ) {
	var expected;
	var REGEXP;
	var arr;
	var str;

	REGEXP = reEOL({
		'capture': true
	});
	str = 'A\nB';
	expected = [ 'A', '\n', 'B' ];
	arr = str.split( REGEXP );

	t.deepEqual( arr, expected, 'returns expected value' );
	t.end();
});
