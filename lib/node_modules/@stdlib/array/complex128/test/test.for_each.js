/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `forEach` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'forEach' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.forEach ), true, 'has method' );
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
			return arr.forEach.call( value, fcn );
		};
	}

	function fcn( v ) {
		if ( !isComplex128( v ) ) {
			t.fail( 'should be a complex number ' );
		}
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array( 10 );

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
			return arr.forEach( value );
		};
	}
});

tape( 'the method should not invoke a provided callback function if operating on an empty complex number array', function test( t ) {
	var arr;

	arr = new Complex128Array();
	arr.forEach( fcn );

	t.end();

	function fcn() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the method returns `undefined`', function test( t ) {
	var arr;
	var out;

	arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = arr.forEach( fcn );

	t.strictEqual( out, void 0, 'returns expected value' );
	t.end();

	function fcn( v ) {
		if ( !isComplex128( v ) ) {
			t.fail( 'should be a complex number' );
		}
	}
});

tape( 'the method invokes a provided function for each element in an array', function test( t ) {
	var expected;
	var arr;

	expected = [];
	arr = new Complex128Array( [ 1.0, 1.0, 2.0, -2.0 ] );
	arr.forEach( fcn );
	expected = new Complex128Array( expected );

	t.deepEqual( reinterpret128( expected, 0 ), reinterpret128( arr, 0 ), 'returns expected value' );
	t.end();

	function fcn( v ) {
		expected.push( v );
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var ctx;
	var arr;

	ctx = {
		'count': 0
	};
	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, 3.0 ] );
	arr.forEach( fcn, ctx );

	t.strictEqual( ctx.count, 3, 'returns expected value' );

	t.end();

	function fcn() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});
