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
var epsilonInsensitiveLoss = require( './../lib/loss/epsilon_insensitive.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof epsilonInsensitiveLoss, 'function', 'main export is a function' );
	t.end();
});

tape( 'the weights are unchanged for errors smaller than epsilon in magnitude (no regularization)', function test( t ) {
	var expected;
	var weights;
	var epsilon;
	var lambda;
	var eta;
	var x;
	var y;

	lambda = 0.0;

	weights = new WeightVector( 3, false );
	weights.add( [ 1.0, 2.0, 3.0 ] );
	epsilon = 0.1;
	eta = 0.02;

	x = [ 1.0, 1.0, 1.0 ];
	y = 6.05; // <w,x> = 1*1 + 2*1 + 3*1 = 6

	expected = [ 1.0, 2.0, 3.0 ];

	epsilonInsensitiveLoss( weights, y, x, eta, lambda, epsilon );
	t.deepEqual( weights._data, expected, 'weights are correctly updated' ); // eslint-disable-line no-underscore-dangle

	t.end();
});

tape( 'the sub-gradient of the linear loss times the learning rate is added to the weights for absolute errors greater or equal than epsilon (no regularization)', function test( t ) {
	/* eslint-disable no-underscore-dangle */
	var expected;
	var weights;
	var epsilon;
	var lambda;
	var eta;
	var x;
	var y;

	lambda = 0.0;

	weights = new WeightVector( 3, false );
	weights.add( [ 1.0, 2.0, 3.0 ] );
	epsilon = 0.1;
	eta = 0.02;

	x = [ 1.0, 1.0, 1.0 ];
	y = 6.2; // <w,x> = 1*1 + 2*1 + 3*1 = 6

	// w := w + eta = [1,2,3] + 0.02
	expected = [ 1.02, 2.02, 3.02 ];

	epsilonInsensitiveLoss( weights, x, y, eta, lambda, epsilon );
	t.deepEqual( weights._data, expected, 'weights are correctly updated' );

	x = [ 1.0, 1.0, 1.0 ];
	y = 5.8; // <w,x> = 1*1 + 2*1 + 3*1 = 6

	// w := w - eta = [1,2,3] - 0.02
	expected = [ 1.0, 2.0, 3.0 ];

	epsilonInsensitiveLoss( weights, x, y, eta, lambda, epsilon );
	t.deepEqual( weights._data, expected, 'weights are correctly updated' );
	t.end();
});
