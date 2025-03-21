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
var lpad = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lpad, 'function', 'main export is a function' );
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
			lpad( value, 10 );
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
			lpad( 'beep', value );
		};
	}
});

tape( 'if the third argument is not a string, the function will throw an error', function test( t ) {
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
			lpad( 'beep', 10, value );
		};
	}
});

tape( 'if the output string will exceed the maximum allowed string length, the function will throw an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		lpad( 'beep', 1e300 );
	}
});

tape( 'if provided an empty pad string, the function throws an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		lpad( 'beep', 10, '' );
	}
});

tape( 'by default, the function left pads a string with spaces', function test( t ) {
	var str = lpad( 'a', 5 );
	t.equal( str, '    a', 'left padded with spaces' );
	t.end();
});

tape( 'the function supports left padding a string with a custom pad string', function test( t ) {
	var str = lpad( 'beep', 10, 'b' );
	t.equal( str, 'bbbbbbbeep', 'left padded to desired length' );
	t.end();
});

tape( 'the function left pads a string such that an output string may exceed the specified length (minimum bound)', function test( t ) {
	var str = lpad( 'a', 5, 'beepboop' );
	t.equal( str, 'beepboopa', 'left padded and length exceeds minimum length' );
	t.end();
});

tape( 'if the specified string length is less than or equal to the input string length, the function returns the input string', function test( t ) {
	t.equal( lpad( 'boop', 2, 'beep' ), 'boop', 'returns input string (<)' );
	t.equal( lpad( 'boop', 4, 'beep' ), 'boop', 'returns input string (=)' );
	t.end();
});
