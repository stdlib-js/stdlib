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
var BooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `join` method', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'join' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.join ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a boolean array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 5 );

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
			return arr.join.call( value );
		};
	}
});

tape( 'the method throws an error if invoked with a `separator` argument which is not a string', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 5 );

	values = [
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
			return arr.join( value );
		};
	}
});

tape( 'the method returns an empty string if invoked on an empty array', function test( t ) {
	var str;
	var arr;

	arr = new BooleanArray();
	str = arr.join();

	t.strictEqual( str, '', 'returns expected value' );
	t.end();
});

tape( 'the method returns a string representation of a boolean array with elements separated by a separator', function test( t ) {
	var expected;
	var str;
	var arr;

	arr = new BooleanArray( [ true, false, false, true ] );
	expected = 'true@false@false@true';

	str = arr.join( '@' );

	t.strictEqual( str, expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns a string representation of a boolean array with elements separated by a separator (single element)', function test( t ) {
	var expected;
	var str;
	var arr;

	arr = new BooleanArray( [ true ] );
	expected = 'true';

	str = arr.join();

	t.strictEqual( str, expected, 'returns expected value' );

	arr = new BooleanArray( [ false ] );
	expected = 'false';

	str = arr.join( '@' );

	t.strictEqual( str, expected, 'returns expected value' );
	t.end();
});

tape( 'if the method is invoked without a separator argument, the method returns a string representation of a boolean array with elements separated by a comma', function test( t ) {
	var expected;
	var str;
	var arr;

	arr = new BooleanArray( [ true, false, false, true ] );
	expected = 'true,false,false,true';

	str = arr.join();

	t.strictEqual( str, expected, 'returns expected value' );
	t.end();
});
