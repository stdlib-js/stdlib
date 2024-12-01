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

tape( 'attached to the prototype of the returned function is a `lastIndexOf` method', function test( t ) {
	var ctor = factory( 'float64' );
	t.strictEqual( hasOwnProp( ctor.prototype, 'lastIndexOf' ), true, 'returns expected value' );
	t.strictEqual( isFunction( ctor.prototype.lastIndexOf ), true, 'returns expected value' );
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
			return arr.lastIndexOf.call( value, 0 );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not an integer', function test( t ) {
	var values;
	var ctor;
	var arr;
	var i;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );

	values = [
		'5',
		3.14,
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
			return arr.lastIndexOf( 1.0, value );
		};
	}
});

tape( 'the method returns `-1` if provided a second argument which resolves to an index less than zero', function test( t ) {
	var ctor;
	var arr;
	var v;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	v = arr.lastIndexOf( 1.0, -10 );
	t.strictEqual( v, -1, 'returns expected value' );
	t.end();
});

tape( 'the method returns `-1` if operating on an empty array', function test( t ) {
	var ctor;
	var arr;
	var v;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [] );

	v = arr.lastIndexOf( 1.0 );
	t.strictEqual( v, -1, 'returns expected value' );

	t.end();
});

tape( 'the method returns `-1` if a search element is not found', function test( t ) {
	var ctor;
	var arr;
	var v;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	v = arr.lastIndexOf( 10.0 );
	t.strictEqual( v, -1, 'returns expected value' );

	t.end();
});

tape( 'the method returns the index of the last match if an element is found', function test( t ) {
	var ctor;
	var arr;
	var v;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 2.0 ] );

	v = arr.lastIndexOf( 2.0 );
	t.strictEqual( v, 4, 'returns expected value' );

	t.end();
});

tape( 'the method supports specifying a starting search index', function test( t ) {
	var ctor;
	var arr;
	var v;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 2.0 ] );

	v = arr.lastIndexOf( 2.0, 4 );
	t.strictEqual( v, 4, 'returns expected value' );

	v = arr.lastIndexOf( 2.0, 1 );
	t.strictEqual( v, 1, 'returns expected value' );

	v = arr.lastIndexOf( 1.0, 0 );
	t.strictEqual( v, 0, 'returns expected value' );

	t.end();
});

tape( 'the method supports specifying a starting search index (negative)', function test( t ) {
	var ctor;
	var arr;
	var v;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 2.0 ] );

	v = arr.lastIndexOf( 2.0, -1 );
	t.strictEqual( v, 4, 'returns expected value' );

	v = arr.lastIndexOf( 1.0, -3 );
	t.strictEqual( v, 0, 'returns expected value' );

	t.end();
});
