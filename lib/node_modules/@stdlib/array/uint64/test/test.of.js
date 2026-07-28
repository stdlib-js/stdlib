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
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var Uint64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Uint64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is an `of` method for creating a 64-bit unsigned integer array from a variable number of arguments', function test( t ) {
	var arr;

	t.strictEqual( hasOwnProp( Uint64Array, 'of' ), true, 'has property' );
	t.strictEqual( isFunction( Uint64Array.of ), true, 'has method' );

	arr = Uint64Array.of();
	t.strictEqual( arr instanceof Uint64Array, true, 'returns expected value' );

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
			return Uint64Array.of.call( value, 1, 1 );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a 64-bit unsigned integer array constructor', function test( t ) {
	var values;
	var i;

	values = [
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Uint64Array.of.call( value, 1, 1 );
		};
	}
});

tape( 'the method returns a 64-bit unsigned integer array', function test( t ) {
	var arr;
	var u;
	var v;

	// No arguments:
	arr = Uint64Array.of();
	t.strictEqual( arr instanceof Uint64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	// Integer arguments:
	arr = Uint64Array.of( 1, 2, 3, 4 );
	t.strictEqual( arr instanceof Uint64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 4, 'returns expected value' );

	// 64-bit unsigned integers:
	u = new Uint64( 1 );
	arr = Uint64Array.of( u, u, u, u, u );
	t.strictEqual( arr instanceof Uint64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 5, 'returns expected value' );

	// Mixed arguments:
	u = new Uint64( 1 );
	arr = Uint64Array.of( u, 2, u, 4 );
	t.strictEqual( arr instanceof Uint64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 4, 'returns expected value' );

	t.end();
});
