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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is an `at` method for returning an array element', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'at' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.at ), true, 'has method' );
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.at.call( value, 0 );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is not an integer', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.at( value );
		};
	}
});

tape( 'the method returns `undefined` if provided an index which exceeds array dimensions', function test( t ) {
	var arr;
	var v;
	var i;

	arr = new Complex128Array( 10 );
	for ( i = -arr.length; i < arr.length; i++ ) {
		if ( i < 0 ) {
			v = arr.at( i-arr.length );
			t.strictEqual( v, void 0, 'returns expected value for index '+(i-arr.length) );
		} else {
			v = arr.at( arr.length+i );
			t.strictEqual( v, void 0, 'returns expected value for index '+(arr.length+i) );
		}
	}
	t.end();
});

tape( 'the method returns an array element', function test( t ) {
	var arr;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Complex128( i, -i ) );
	}
	arr = new Complex128Array( arr );

	for ( i = -arr.length; i < arr.length; i++ ) {
		v = arr.at( i );
		if ( i < 0 ) {
			t.strictEqual( real( v ), arr.length + i, 'returns expected real component for index '+i );
			t.strictEqual( imag( v ), -arr.length - i, 'returns expected imaginary component for index '+i );
		} else {
			t.strictEqual( real( v ), i, 'returns expected real component for index '+i );
			t.strictEqual( imag( v ), -i, 'returns expected imaginary component for index '+i );
		}
	}
	t.end();
});
