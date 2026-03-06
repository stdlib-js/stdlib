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
var squaredErrorLoss = require( './../lib/loss/squared_error.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof squaredErrorLoss, 'function', 'main export is a function' );
	t.end();
});

tape( 'the sub-gradient of the squared-error loss times the learning rate is added to the weights (no regularization)', function test( t ) {
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

	// w := w - eta * ( <w,x> - y ) = [1,2,3] - 0.02 * ( 6.0 - 6.2 )
	expected = [ 1.004, 2.004, 3.004 ];

	squaredErrorLoss( weights, x, y, eta, lambda, epsilon );

	t.deepEqual( weights._data, expected, 'weights are correctly updated' ); // eslint-disable-line no-underscore-dangle
	t.end();
});
