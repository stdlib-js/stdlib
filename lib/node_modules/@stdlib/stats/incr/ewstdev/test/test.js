/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var pow = require( '@stdlib/math/base/special/pow' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var increwstdev = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof increwstdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a nonnegative number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			increwstdev( value );
		};
	}
});

tape( 'the function throws an error if provided a nonnegative number which does not reside on the interval `[0,1]`', function test( t ) {
	var values;
	var i;

	values = [
		1.5,
		3.14,
		1.0001,
		1.0e300
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			increwstdev( value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof increwstdev( 0.5 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = increwstdev( 0.5 );
	t.equal( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes an exponentially weighted standard deviation', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [
		2.0,
		3.0,
		2.0,
		4.0,
		3.0,
		4.0
	];
	N = data.length;

	// Note: manually computed using the recurrence relation S_n = (1-α)(S_{n-1} + α(x_n - mu_{n-1})^2) = S_n = (1-α)S_{n-1} + α(1-α)(x_n - mu_{n-1})^2
	expected = [
		0.0, // m = 2.0, s2 = 0.0
		sqrt( (0.5*0.0) + (0.25*pow( 3.0-2.0, 2 )) ), // m = 2.5, s2 = 0.25
		sqrt( (0.5*0.25) + (0.25*pow( 2.0-2.5, 2 )) ), // m = 2.25, s2 = 0.1875
		sqrt( (0.5*0.1875) + (0.25*pow( 4.0-2.25, 2 )) ), // m = 3.125, s2 = 0.859375
		sqrt( (0.5*0.859375) + (0.25*pow( 3.0-3.125, 2 )) ), // m = 3.0625, s2 = 0.43359375
		sqrt( (0.5*0.43359375) + (0.25*pow( 4.0-3.0625, 2 )) ) // m = 3.53125, s2 = 0.4365234375
	];
	actual = new Array( N );

	acc = increwstdev( 0.5 );

	for ( i = 0; i < N; i++ ) {
		actual[ i ] = acc( data[ i ] );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current standard deviation', function test( t ) {
	var data;
	var acc;
	var i;

	data = [
		2.0, // m = 2.0, s2 = 0.0
		3.0, // m = 2.5, s2 = 0.25
		1.0  // m = 1.75, s2 = 0.6875
	];
	acc = increwstdev( 0.5 );
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), sqrt( 0.6875 ), 'returns expected value' );
	t.end();
});
