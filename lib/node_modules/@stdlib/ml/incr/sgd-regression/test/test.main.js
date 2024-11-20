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
var isFunction = require( '@stdlib/assert/is-function' );
var incrSGDRegression = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrSGDRegression, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `options` object is not a simple object', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrSGDRegression( value );
		};
	}
});

tape( 'the `loss` option of the function specifies the used loss function', function test( t ) {
	var accumulator;
	var values;
	var len;
	var i;

	values = [
		'epsilonInsensitive',
		'huber',
		'squaredError'
	];
	len = values.length;

	for ( i = 0; i < len; i++ ) {
		accumulator = incrSGDRegression({
			'loss': values[ i ]
		});
		t.equal( isFunction( accumulator ), true, 'returns a function' );
	}

	t.end();
});

tape( 'the function throws an error if supplied an unknown `loss` option', function test( t ) {
	t.throws( badValue, Error, 'throws an error when provided unknown loss' );
	t.end();

	function badValue() {
		incrSGDRegression({
			'loss': 'hilbert'
		});
	}
});

tape( 'the `learningRate` option can be used to set the strength schedule of the gradient descent algorithm', function test( t ) {
	var values;
	var len;
	var i;

	values = [
		'basic',
		'constant',
		'pegasos'
	];
	for ( i = 0; i < len; i++ ) {
		incrSGDRegression({
			'learningRate': values[ i ]
		});
	}
	t.end();
});

tape( 'the constructor throws an error if supplied an unknown `learningRate` option', function test( t ) {
	t.throws( badValue, Error, 'throws an error when provided unknown learning rate' );
	t.end();

	function badValue() {
		incrSGDRegression({
			'learningRate': 'scaling'
		});
	}
});

tape( 'the function has an `intercept` option determining whether the regression model should include an implicit intercept / bias term', function test( t ) {
	var accumulator;

	accumulator = incrSGDRegression({
		'intercept': true
	});
	accumulator( [ 1.0, 1.0, 1.0 ], 2.0 );
	t.equal( accumulator.coefs.length, 4, 'the model contains a regression coefficient for the intercept' );

	accumulator = incrSGDRegression({
		'intercept': false
	});
	accumulator( [ 1.0, 1.0, 1.0 ], 2.0 );
	t.equal( accumulator.coefs.length, 3, 'the model does not contain an intercept regression coefficient' );

	t.end();
});

tape( 'the `update` method throws an error if the `x` value is not an array', function test( t ) {
	var accumulator;
	var values;
	var i;
	var y;

	accumulator = incrSGDRegression();
	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		{},
		function noop() {}
	];
	y = 2.0;

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			accumulator( value, y );
		};
	}
});

tape( 'the `update` method throws an error if the `x` is an array with an invalid number of elements', function test( t ) {
	var accumulator;
	var i;
	var y;
	var x;

	accumulator = incrSGDRegression();
	y = 2.0;
	x = [ 1.0, 1.0 ];
	accumulator( x, y );

	for ( i = 0; i < 10; i++ ) {
		x.push( 1.0 );
		t.throws( badValue, TypeError, 'throws an error when provided an array of any length other than two' );
	}
	t.end();

	function badValue() {
		accumulator( x, y );
	}
});

tape( 'the `predict` method calculates the inner product of the weights and feature vector `x`', function test( t ) {
	var accumulator;
	var expected;
	var weights;
	var actual;
	var i;
	var x;

	accumulator = incrSGDRegression();
	accumulator( [ 0.0, 0.0 ], 2.0 );
	weights = accumulator.coefs;

	x = [ 2.0, 2.0 ];
	actual = accumulator.predict( x );

	// Add intercept...
	x.push( 1.0 );
	expected = 0;
	for ( i = 0; i < weights.length; i++ ) {
		expected += x[ i ] * weights[ i ];
	}
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the `predict` method throws an error if the `x` value is not an array', function test( t ) {
	var accumulator;
	var values;
	var i;

	accumulator = incrSGDRegression();
	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			accumulator.predict( value );
		};
	}
});

tape( 'the `predict` method throws an error if the `x` is an array with an invalid number of elements', function test( t ) {
	var accumulator;
	var i;
	var x;

	accumulator = incrSGDRegression();
	x = [ 1.0, 1.0 ];
	accumulator( x, 2.0 );

	for ( i = 0; i < 10; i++ ) {
		x.push( 1.0 );
		t.throws( badValue, TypeError, 'throws an error when provided an array of any length other than two' );
	}
	t.end();

	function badValue() {
		accumulator.predict( x );
	}
});
