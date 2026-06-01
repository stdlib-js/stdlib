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
var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var Float16Array = require( './../../lib/polyfill' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Float16Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `reduce` method', function test( t ) {
	t.strictEqual( hasOwnProp( Float16Array.prototype, 'reduce' ), true, 'has property' );
	t.strictEqual( isFunction( Float16Array.prototype.reduce ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a floating-point number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Float16Array( 5 );

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
			return arr.reduce.call( value, reducer );
		};
	}

	function reducer( acc, value ) {
		return float64ToFloat16( acc + value );
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Float16Array( 10 );

	values = [
		'5',
		3.14,
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
			return arr.reduce( value );
		};
	}
});

tape( 'the method throws an error if not provided an initial value when operating on an empty floating-point number array', function test( t ) {
	var arr;

	arr = new Float16Array( 0 );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		arr.reduce( reducer );
	}

	function reducer( acc, value ) {
		return float64ToFloat16( acc + value );
	}
});

tape( 'the method uses the first element of the array as the initial value when an initial value is not provided', function test( t ) {
	var valueArray;
	var accArray;
	var expected;
	var actual;
	var arr;
	var ind;

	arr = new Float16Array( [ 1.0, 2.0, 3.0 ] );
	accArray = [ 1.0, 3.0 ];
	valueArray = [ 2.0, 3.0 ];
	expected = float64ToFloat16( 6.0 );
	actual = arr.reduce( reducer );

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();

	function reducer( acc, value, index ) {
		ind = index-1;
		t.strictEqual( acc, float64ToFloat16( accArray[ ind ] ), 'returns expected value' );
		t.strictEqual( value, float64ToFloat16( valueArray[ ind ] ), 'returns expected value' );
		return float64ToFloat16( acc + value );
	}
});

tape( 'the method supports providing an initial value as the second argument', function test( t ) {
	var valueArray;
	var accArray;
	var expected;
	var actual;
	var arr;

	arr = new Float16Array( [ 1.0, 2.0, 3.0 ] );
	accArray = [ 2.0, 3.0, 5.0 ];
	valueArray = [ 1.0, 2.0, 3.0 ];
	expected = 8.0;
	actual = arr.reduce( reducer, 2.0 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();

	function reducer( acc, value, index ) {
		t.strictEqual( acc, float64ToFloat16( accArray[ index ] ), 'returns expected value' );
		t.strictEqual( value, float64ToFloat16( valueArray[ index ] ), 'returns expected value' );
		return float64ToFloat16( acc + value );
	}
});

tape( 'the method returns the accumulated result', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Float16Array( [ 1.05, 2.05, 3.05, 4.05 ] );
	expected = float64ToFloat16( 10.20 );
	actual = arr.reduce( reducer );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();

	function reducer( acc, value ) {
		return float64ToFloat16( acc + value );
	}
});
