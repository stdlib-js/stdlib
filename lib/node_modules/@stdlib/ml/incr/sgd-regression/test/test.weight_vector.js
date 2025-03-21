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
var WeightVector = require( './../lib/weight_vector.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof WeightVector, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `dim` value is not a positive integer value', function test( t ) {
	var values;
	var i;

	values = [
		-2,
		0.3,
		'5',
		null,
		true,
		void 0,
		NaN,
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
			var weights = new WeightVector( value, true ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if the `intercept` value is not a boolean value', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		null,
		void 0,
		NaN,
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
			var weights = new WeightVector( 3, value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor returns a WeightVector', function test( t ) {
	var weights = new WeightVector( 20, true );
	t.equal( weights instanceof WeightVector, true, 'returns a WeightVector' );
	t.end();
});

tape( 'the constructor does not require the `new` operator', function test( t ) {
	/* eslint-disable new-cap */
	var weights;

	weights = WeightVector( 2, false );
	t.equal( weights instanceof WeightVector, true, 'returns a WeightVector' );

	weights = WeightVector( 3, true );
	t.equal( weights instanceof WeightVector, true, 'returns a WeightVector' );
	t.end();

	/* eslint-enable new-cap */
});

tape( 'the `innerProduct` method calculates the inner product of the weights and a supplied vector `x`', function test( t ) {
	var expected;
	var weights;
	var dot;

	// Without an intercept:
	weights = new WeightVector( 3, false );

	weights.add( [ 1, 2, 3 ] );
	dot = weights.innerProduct( [ 1, 2, 3 ] );
	expected = 14;
	t.equal( dot, expected, 'returns the inner product' );

	// With an implicit intercept:
	weights = new WeightVector( 2, true );
	weights.add( [ 1, 2 ] );

	dot = weights.innerProduct( [ 1, 2 ] );
	expected = 6; // => 1*1 + 2*2 + 1*1
	t.equal( dot, expected, 'returns the inner product' );
	t.end();
});

tape( 'the `add` method adds a vector `x` to the weights', function test( t ) {
	var expected;
	var weights;

	// Without an intercept:
	weights = new WeightVector( 3.0, false );
	weights.add( [ 2.0, 3.0, 4.0 ] );

	expected = [ 2.0, 3.0, 4.0 ];

	// eslint-disable-next-line no-underscore-dangle
	t.deepEqual( weights._data, expected, 'weights are equal to [2,3,4]' );

	// Using a custom xScale:
	weights.add( [ 1.0, 1.0, 1.0 ], 2.0 );

	expected = [ 4.0, 5.0, 6.0 ];

	// eslint-disable-next-line no-underscore-dangle
	t.deepEqual( weights._data, expected, 'weights are equal to [4,5,6]' );

	// With an implicit intercept:
	weights = new WeightVector( 3.0, true );
	weights.add( [ 2.0, 3.0, 4.0 ] );

	expected = [ 2.0, 3.0, 4.0, 1.0 ];

	// eslint-disable-next-line no-underscore-dangle
	t.deepEqual( weights._data, expected, 'weights are equal to [2,3,4,1]' );

	// Using a custom xScale:
	weights.add( [ 1.0, 1.0, 1.0 ], 2.0 );

	expected = [ 4.0, 5.0, 6.0, 3.0 ];

	// eslint-disable-next-line no-underscore-dangle
	t.deepEqual( weights._data, expected, 'weights are equal to [4,5,6,3]' );
	t.end();
});

tape( 'the `scaleTo` method scales elements of the weight vector by the supplied factor', function test( t ) {
	var expectedNorm;
	var weights;

	weights = new WeightVector( 3.0, false );
	weights.add( [ 2.0, 3.0, 4.0 ] );

	expectedNorm = weights.norm * 9.0;
	weights.scaleTo( 3.0 );
	t.equal( weights.scale, 3.0, 'scale is equal to 3.0' );
	t.equal( weights.norm, expectedNorm, 'the new norm is equal to ' + expectedNorm );
	t.end();
});

tape( 'the `scaleTo` method scales the weights to one if the internal scale is smaller than 1e-11', function test( t ) {
	var weights;

	weights = new WeightVector( 3.0, false );
	weights.add( [ 2.0, 2.0, 2.0 ] );
	weights.scaleTo( 1e-13 );

	weights.scaleTo( 1.0 );

	t.equal( weights.scale, 1.0, 'scale is equal to 1.0' );

	// eslint-disable-next-line no-underscore-dangle
	t.deepEqual( weights._data, [ 2.0e-13, 2.0e-13, 2.0e-13], '_data array is equal to [2e-13,2e-13,2e-13]' );
	t.end();
});

tape( 'the `scaleTo` method throws an error if the supplied `factor` value is not positive', function test( t ) {
	var weights;

	weights = new WeightVector( 3.0, false );

	t.throws( badValue(), RangeError, 'throws an error when provided a negative scale factor' );
	t.end();

	function badValue() {
		return function badValue() {
			weights.scaleTo( -1.0 );
		};
	}
});
