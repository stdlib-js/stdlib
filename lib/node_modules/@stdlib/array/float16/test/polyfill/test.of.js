/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var Float16Array = require( './../../lib/polyfill' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Float16Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is an `of` method for creating a 16-bit floating-point number array from a variable number of arguments', function test( t ) {
	var arr;

	t.strictEqual( hasOwnProp( Float16Array, 'of' ), true, 'has property' );
	t.strictEqual( isFunction( Float16Array.of ), true, 'has method' );

	arr = Float16Array.of();
	t.strictEqual( arr instanceof Float16Array, true, 'returns expected value' );

	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a constructor', function test( t ) {
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
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Float16Array.of.call( value, true, true );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a floating-point array constructor', function test( t ) {
	var values;
	var i;

	values = [
		{},
		null,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Float16Array.of.call( value, true, true );
		};
	}
});

tape( 'the method returns a floating-point number array', function test( t ) {
	var arr;
	var v;

	// No arguments:
	arr = Float16Array.of();
	t.strictEqual( arr instanceof Float16Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	// Numeric arguments:
	arr = Float16Array.of( 1.0, 2.0, 3.0, 4.0 );
	t.strictEqual( arr instanceof Float16Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 4, 'returns expected value' );

	// Non-numeric arguments:
	arr = Float16Array.of( 1, {}, 0, null, 'beep' );
	t.strictEqual( arr instanceof Float16Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 5, 'returns expected value' );

	// Mixed arguments:
	arr = Float16Array.of( true, 1, false, 0 );
	t.strictEqual( arr instanceof Float16Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 4, 'returns expected value' );

	t.end();
});
