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
var isEqual = require( '@stdlib/number/uint64/base/assert/is-equal' );
var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var Number = require( '@stdlib/number/ctor' );
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var Uint64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Uint64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `find` method', function test( t ) {
	t.strictEqual( hasOwnProp( Uint64Array.prototype, 'find' ), true, 'has property' );
	t.strictEqual( isFunction( Uint64Array.prototype.find ), true, 'has method' );
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.find.call( value, predicate );
		};
	}

	function predicate( v ) {
		return ( isEven( Number( v ) ) );
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Uint64Array( 10 );

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
			return arr.find( value );
		};
	}
});

tape( 'the method returns `undefined` if operating on an empty 64-bit unsigned integer array', function test( t ) {
	var arr;
	var u;

	arr = new Uint64Array();
	u = arr.find( predicate );

	t.strictEqual( u, void 0, 'returns expected value' );
	t.end();

	function predicate() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the method returns the first element which passes a test', function test( t ) {
	var arr;
	var u;

	arr = new Uint64Array( [ 1, 3, 4, 5 ] );
	u = arr.find( predicate );

	t.strictEqual( isEqual( u, new Uint64( 4 ) ), true, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( isEven( Number( v ) ) );
	}
});

tape( 'the method returns `undefined` if all elements fail a test', function test( t ) {
	var arr;
	var u;

	arr = new Uint64Array( [ 1, 3, 5, 7, 9 ] );
	u = arr.find( predicate );

	t.strictEqual( u, void 0, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( isEven( Number( v ) ) );
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var ctx;
	var arr;
	var u;

	ctx = {
		'count': 0
	};
	arr = new Uint64Array( [ 1, 3, 4, 5 ] );
	u = arr.find( predicate, ctx );

	t.strictEqual( isEqual( u, new Uint64( 4 ) ), true, 'returns expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );

	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( isEven( Number( v ) ) );
	}
});
