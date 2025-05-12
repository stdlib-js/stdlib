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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var factory = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var ctor = factory( 'float64' );
	t.strictEqual( isFunction( ctor ), true, 'returns expected value' );
	t.end();
});

tape( 'attached to the prototype of the returned function is a `forEach` method', function test( t ) {
	var ctor = factory( 'float64' );
	t.strictEqual( hasOwnProp( ctor.prototype, 'forEach' ), true, 'returns expected value' );
	t.strictEqual( isFunction( ctor.prototype.forEach ), true, 'returns expected value' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a typed array instance', function test( t ) {
	var values;
	var ctor;
	var arr;
	var i;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', 5 );

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
		if ( isnan( v ) ) {
			t.fail( 'should not be NaN' );
		}
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var ctor;
	var arr;
	var i;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', 10 );

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

tape( 'the method should not invoke a provided callback function if operating on an empty array', function test( t ) {
	var ctor;
	var arr;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', 0 );
	arr.forEach( fcn );

	t.end();

	function fcn() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the method returns `undefined`', function test( t ) {
	var ctor;
	var arr;
	var out;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );
	out = arr.forEach( fcn );

	t.strictEqual( out, void 0, 'returns expected value' );
	t.end();

	function fcn( v ) {
		if ( isnan( v ) ) {
			t.fail( 'should not be NaN' );
		}
	}
});

tape( 'the method invokes a provided function for each element in an array', function test( t ) {
	var indices;
	var values;
	var arrays;
	var ctor;
	var arr;

	indices = [];
	values = [];
	arrays = [];

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );
	arr.forEach( fcn );

	t.deepEqual( values, [ 1.0, 2.0, 3.0, 4.0 ], 'returns expected value' );
	t.deepEqual( indices, [ 0, 1, 2, 3 ], 'returns expected value' );
	t.strictEqual( arrays[ 0 ], arr, 'returns expected value' );
	t.strictEqual( arrays[ 1 ], arr, 'returns expected value' );
	t.strictEqual( arrays[ 2 ], arr, 'returns expected value' );
	t.strictEqual( arrays[ 3 ], arr, 'returns expected value' );

	t.end();

	function fcn( v, i, arr ) {
		values.push( v );
		indices.push( i );
		arrays.push( arr );
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var ctor;
	var ctx;
	var arr;

	ctor = factory( 'float64' );

	ctx = {
		'count': 0
	};
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );
	arr.forEach( fcn, ctx );

	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function fcn() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});
