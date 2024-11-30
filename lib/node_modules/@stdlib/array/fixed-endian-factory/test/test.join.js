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

tape( 'attached to the prototype of the returned function is a `join` method', function test( t ) {
	var ctor = factory( 'float64' );
	t.strictEqual( hasOwnProp( ctor.prototype, 'join' ), true, 'has property' );
	t.strictEqual( isFunction( ctor.prototype.join ), true, 'has method' );
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.join.call( value );
		};
	}
});

tape( 'the method returns an empty string if invoked on an empty array', function test( t ) {
	var ctor;
	var str;
	var arr;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [] );

	str = arr.join();
	t.strictEqual( str, '', 'returns expected value' );
	t.end();
});

tape( 'the method returns a string representation of a typed array with elements separated by a separator', function test( t ) {
	var expected;
	var ctor;
	var str;
	var arr;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = '1@2@3@4';

	str = arr.join( '@' );

	t.strictEqual( str, expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns a string representation of a typed array with elements separated by a separator (single element)', function test( t ) {
	var expected;
	var ctor;
	var str;
	var arr;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0 ] );
	expected = '1';

	str = arr.join();

	t.strictEqual( str, expected, 'returns expected value' );

	arr = new ctor( 'little-endian', [ 2.0 ] );
	expected = '2';

	str = arr.join( ';' );

	t.strictEqual( str, expected, 'returns expected value' );
	t.end();
});

tape( 'if the method is invoked without a separator argument, the method returns a string representation of a typed array with elements separated by a comma', function test( t ) {
	var expected;
	var ctor;
	var str;
	var arr;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = '1,2,3,4';

	str = arr.join();

	t.strictEqual( str, expected, 'returns expected value' );
	t.end();
});

tape( 'the method coerces non-string separators to strings', function test( t ) {
	var expected;
	var ctor;
	var str;
	var arr;

	ctor = factory( 'float64' );
	arr = new ctor( 'little-endian', [ 1.0, 2.0, 3.0 ] );

	expected = '1true2true3';
	str = arr.join( true );
	t.strictEqual( str, expected, 'returns expected value' );

	expected = '1null2null3';
	str = arr.join( null );
	t.strictEqual( str, expected, 'returns expected value' );

	expected = '1[object Object]2[object Object]3';
	str = arr.join( {} );
	t.strictEqual( str, expected, 'returns expected value' );

	t.end();
});
