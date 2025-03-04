/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `toLocaleString` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'toLocaleString' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.toLocaleString ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array( 5 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.toLocaleString.call( value );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a string or an array of strings', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array();

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[ 1, 2, 3 ],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.toLocaleString( value );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a string or an array of strings (options)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array();

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[ 1, 2, 3 ],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.toLocaleString( value, {} );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not an object', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array();

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		'beep',
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.toLocaleString( 'en-GB', value );
		};
	}
});

tape( 'the method returns an empty string if invoked on an empty array', function test( t ) {
	var str;
	var arr;

	arr = new Complex128Array();
	str = arr.toLocaleString();

	t.strictEqual( str, '', 'returns expected value' );
	t.end();
});

tape( 'the method returns a string representation of a complex number array', function test( t ) {
	var expected;
	var str;
	var arr;

	arr = new Complex128Array( [ 1, 2, -3, -4 ] );
	expected = '1 + 2i,-3 - 4i';

	str = arr.toLocaleString();

	t.strictEqual( str, expected, 'returns expected value' );
	t.end();
});
