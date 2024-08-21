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

tape( 'attached to the prototype of the main export is a `toString` method', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.toString ), true, 'has method' );
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
			return arr.toString.call( value );
		};
	}
});

tape( 'the method returns an empty string if invoked on an empty array', function test( t ) {
	var str;
	var arr;

	arr = new BooleanArray();
	str = arr.toString();

	t.strictEqual( str, '', 'returns expected value' );
	t.end();
});

tape( 'the method returns a string representation of a boolean array', function test( t ) {
	var expected;
	var str;
	var arr;

	arr = new BooleanArray( [ true, false, false, true ] );
	expected = 'true,false,false,true';

	str = arr.toString();

	t.strictEqual( str, expected, 'returns expected value' );
	t.end();
});
