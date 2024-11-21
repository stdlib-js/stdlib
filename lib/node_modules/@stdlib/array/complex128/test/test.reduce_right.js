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
var cadd = require( '@stdlib/complex/float64/base/add' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `reduceRight` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'reduceRight' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.reduceRight ), true, 'has method' );
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
			return arr.map.reduceRight( value, cadd );
		};
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
			return arr.reduceRight( value );
		};
	}
});

tape( 'the method throws an error if not provided an initial value when operating on an empty complex number array', function test( t ) {
	var arr;

	arr = new Complex128Array( 0 );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		arr.reduceRight( cadd );
	}
});

tape( 'the method uses the last element of the array as the initial value when an initial value is not provided', function test( t ) {
	var valueArray;
	var accArray;
	var expected;
	var actual;
	var arr;
	var len;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	len = arr.length;
	accArray = [ 3.0, -3.0, 5.0, -5.0 ];
	valueArray = [ 2.0, -2.0, 1.0, -1.0 ];
	expected = new Complex128( 6.0, -6.0 );
	actual = arr.reduceRight( reducer );

	t.strictEqual( instanceOf( actual, Complex128 ), true, 'returns expected value' );
	t.strictEqual( real( actual ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( actual ), imag( expected ), 'returns expected value' );

	t.end();

	function reducer( acc, value, index ) {
		var ind = 2*(len-index-2);
		t.strictEqual( instanceOf( acc, Complex128 ), true, 'returns expected value' );
		t.strictEqual( real( acc ), accArray[ ind ], 'returns expected value' );
		t.strictEqual( imag( acc ), accArray[ ind+1 ], 'returns expected value' );
		t.strictEqual( instanceOf( value, Complex128 ), true, 'returns expected value' );
		t.strictEqual( real( value ), valueArray[ ind ], 'returns expected value' );
		t.strictEqual( imag( value ), valueArray[ ind+1 ], 'returns expected value' );
		return cadd( acc, value );
	}
});

tape( 'the method supports providing an initial value as the second argument', function test( t ) {
	var valueArray;
	var accArray;
	var expected;
	var actual;
	var arr;
	var len;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	len = arr.length;
	accArray = [ 2.0, -2.0, 5.0, -5.0, 7.0, -7.0 ];
	valueArray = [ 3.0, -3.0, 2.0, -2.0, 1.0, -1.0 ];
	expected = new Complex128( 8.0, -8.0 );
	actual = arr.reduceRight( reducer, new Complex128( 2.0, -2.0 ) );

	t.strictEqual( instanceOf( actual, Complex128 ), true, 'returns expected value' );
	t.strictEqual( real( actual ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( actual ), imag( expected ), 'returns expected value' );

	t.end();

	function reducer( acc, value, index ) {
		var ind = 2*(len-index-1);
		t.strictEqual( instanceOf( acc, Complex128 ), true, 'returns expected value' );
		t.strictEqual( real( acc ), accArray[ ind ], 'returns expected value' );
		t.strictEqual( imag( acc ), accArray[ ind+1 ], 'returns expected value' );
		t.strictEqual( instanceOf( value, Complex128 ), true, 'returns expected value' );
		t.strictEqual( real( value ), valueArray[ ind ], 'returns expected value' );
		t.strictEqual( imag( value ), valueArray[ ind+1 ], 'returns expected value' );
		return cadd( acc, value );
	}
});

tape( 'the method returns the accumulated result', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	expected = new Complex128( 6.0, -6.0 );
	actual = arr.reduceRight( cadd );

	t.strictEqual( instanceOf( actual, Complex128 ), true, 'returns expected value' );
	t.strictEqual( real( actual ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( actual ), imag( expected ), 'returns expected value' );
	t.end();
});

tape( 'the method supports returning real-valued results', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	expected = 6.0;
	actual = arr.reduceRight( reducer, 0.0 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();

	function reducer( acc, value ) {
		return acc + real( value );
	}
});
