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
var isEqualUint64Array = require( '@stdlib/assert/is-equal-uint64array' );
var isFunction = require( '@stdlib/assert/is-function' );
var Uint64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Uint64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `copyWithin` method for copying a sequence of array elements within a 64-bit unsigned integer array', function test( t ) {
	t.strictEqual( hasOwnProp( Uint64Array.prototype, 'copyWithin' ), true, 'has property' );
	t.strictEqual( isFunction( Uint64Array.prototype.copyWithin ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a 64-bit unsigned integer array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Uint64Array( 5 );

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
			return arr.copyWithin.call( value, 3, 0 );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a 64-bit unsigned integer array instance (end)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Uint64Array( 5 );

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
			return arr.copyWithin.call( value, 3, 0, 5 );
		};
	}
});

tape( 'the method copies a sequence of elements within an array', function test( t ) {
	var expected;
	var arr;

	arr = new Uint64Array( [ 0, 1, 2, 3, 4 ] );
	expected = new Uint64Array( [ 3, 4, 2, 3, 4 ] );

	arr.copyWithin( 0, 3 );

	t.strictEqual( isEqualUint64Array( arr, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative target)', function test( t ) {
	var expected;
	var arr;

	arr = new Uint64Array( [ 0, 1, 2, 3, 4 ] );
	expected = new Uint64Array( [ 3, 4, 2, 3, 4 ] );

	arr.copyWithin( -arr.length, 3 );

	t.strictEqual( isEqualUint64Array( arr, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative start)', function test( t ) {
	var expected;
	var arr;

	arr = new Uint64Array( [ 0, 1, 2, 3, 4 ] );
	expected = new Uint64Array( [ 3, 4, 2, 3, 4 ] );

	arr.copyWithin( 0, -2 );

	t.strictEqual( isEqualUint64Array( arr, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the method copies a sequence of elements within an array (end=length)', function test( t ) {
	var expected;
	var arr;

	arr = new Uint64Array( [ 0, 1, 2, 3, 4 ] );
	expected = new Uint64Array( [ 3, 4, 2, 3, 4 ] );

	arr.copyWithin( 0, 3, arr.length );

	t.strictEqual( isEqualUint64Array( arr, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the method copies a sequence of elements within an array (non-inclusive end)', function test( t ) {
	var expected;
	var arr;

	arr = new Uint64Array( [ 0, 1, 2, 3, 4 ] );
	expected = new Uint64Array( [ 0, 1, 0, 1, 4 ] );

	arr.copyWithin( 2, 0, 2 );

	t.strictEqual( isEqualUint64Array( arr, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the method copies a sequence of elements within an array (negative end)', function test( t ) {
	var expected;
	var arr;

	arr = new Uint64Array( [ 0, 1, 2, 3, 4 ] );
	expected = new Uint64Array( [ 0, 1, 0, 1, 4 ] );

	arr.copyWithin( 2, 0, -3 );

	t.strictEqual( isEqualUint64Array( arr, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the method copies a sequence of elements within an array (target >= length)', function test( t ) {
	var expected;
	var arr;

	arr = new Uint64Array( [ 0, 1, 2, 3, 4 ] );
	expected = new Uint64Array( [ 0, 1, 2, 3, 4 ] );

	arr.copyWithin( arr.length, 3 );

	t.strictEqual( isEqualUint64Array( arr, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the method copies a sequence of elements within an array (target > start)', function test( t ) {
	var expected;
	var arr;

	arr = new Uint64Array( [ 0, 1, 2, 3, 4 ] );
	expected = new Uint64Array( [ 0, 1, 0, 1, 2 ] );

	arr.copyWithin( 2, 0 );

	t.strictEqual( isEqualUint64Array( arr, expected ), true, 'returns expected value' );
	t.end();
});
