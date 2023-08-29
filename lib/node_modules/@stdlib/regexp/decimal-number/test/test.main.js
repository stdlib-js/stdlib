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
var reDecimalNumber = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reDecimalNumber, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a regular expression to match decimal numbers', function test( t ) {
	var values;
	var re;
	var i;

	re = reDecimalNumber();

	values = [
		'1.234',
		'beep 1.234',
		'1.234 boop',
		'foo 1.234.',
		'foo 1.234.567.890',
		'1.234!',
		'0.234',
		'.234',
		'1.0',
		'-1.0',
		'+1.0',
		'.0',
		'0.0',
		'1.234:',
		'1.234%'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( re.test( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the returned regular expression does not match strings which are not decimal numbers', function test( t ) {
	var values;
	var re;
	var i;

	re = reDecimalNumber();

	values = [
		'foo',
		'beep',
		'boop',
		'%',
		'',
		'$',
		'$$$$',
		'%%%%',
		'()',
		'[]',
		'{}',
		'/////',
		'a/b',
		'p%',
		'\\d+',
		'0',
		'1',
		'2',
		'2:3',
		'beep 0',
		'0 beep'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( re.test( values[i] ), false, 'returns false when provided '+values[i] );
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
			reDecimalNumber( value );
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
			reDecimalNumber( opts );
		};
	}
});

tape( 'the function supports returning a regular expression wrapped in a capture group', function test( t ) {
	var expected;
	var value;
	var str;
	var re;

	re = reDecimalNumber({
		'capture': true
	});
	str = '1.234';
	expected = '1.234 x 1.234';
	value = replace( str, re, '$1 x $1' );

	t.deepEqual( value, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying regular expression flags', function test( t ) {
	var expected;
	var actual;
	var str;
	var re;

	str = '3.14Hello3.14World!3.14';

	re = reDecimalNumber();
	actual = replace( str, re, '!' );
	expected = '!Hello3.14World!3.14';

	t.strictEqual( actual, expected, 'returns expected value' );

	re = reDecimalNumber({
		'flags': 'g'
	});
	actual = replace( str, re, '!' );
	expected = '!Hello!World!!';

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
