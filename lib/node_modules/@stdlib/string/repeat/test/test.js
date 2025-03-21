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
var repeat = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof repeat, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not a string, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		false,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			repeat( value, 10 );
		};
	}
});

tape( 'if the second argument is not a nonnegative integer, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-5,
		true,
		false,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			repeat( 'beep', value );
		};
	}
});

tape( 'if the output string will exceed the maximum allowed string length, the function will throw an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		repeat( 'beep', 1e300 );
	}
});

tape( 'the function repeats an input string a specified number of times', function test( t ) {
	var str;

	str = repeat( 'a', 5 );
	t.equal( str, 'aaaaa', 'repeated 5 times' );

	str = repeat( 'beep', 2 );
	t.equal( str, 'beepbeep', 'repeated 2 times' );

	t.end();
});

tape( 'if provided an empty string, the function returns an empty string', function test( t ) {
	t.equal( repeat( '', 100 ), '', 'returns an empty string' );
	t.end();
});

tape( 'if repeat number is 0, the function returns an empty string', function test( t ) {
	t.equal( repeat( 'a', 0 ), '', 'returns empty string' );
	t.end();
});
