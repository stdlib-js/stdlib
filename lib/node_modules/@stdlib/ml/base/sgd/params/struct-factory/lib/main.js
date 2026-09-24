/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var struct = require( '@stdlib/dstructs/struct' );


// MAIN //

/**
* Returns a new struct constructor tailored to a specified floating-point data type.
*
* ## Notes
*
* -   Each parameter list is a fixed-length array which is zero-filled upon initialization. Consumers should only read as many elements as are applicable to the corresponding penalty, learning rate scheduler, or loss function, with any remaining elements being unused.
*
* @param {string} dtype - floating-point data type
* @returns {Function} struct constructor
*
* @example
* var Struct = factory( 'float64' );
* // returns <Function>
*
* var s = new Struct();
* // returns <Struct>
*/
function factory( dtype ) {
	var schema = [
		{
			'name': 'penaltyParams',
			'description': 'parameters specific to the regularization function being used',
			'type': dtype,
			'length': 2,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'learningRateParams',
			'description': 'parameters specific to the learning rate scheduler being used',
			'type': dtype,
			'length': 2,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'lossFunctionParams',
			'description': 'parameters specific to the loss function being used',
			'type': dtype,
			'length': 1,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'intercept',
			'description': 'initial intercept value',
			'type': dtype,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'maxIter',
			'description': 'maximum number of iterations to run',
			'type': 'int32',
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'penalty',
			'description': 'regularization function to be used',
			'type': 'int8',
			'castingMode': 'none'
		},
		{
			'name': 'learningRate',
			'description': 'learning rate scheduler to be used',
			'type': 'int8',
			'castingMode': 'none'
		},
		{
			'name': 'lossFunction',
			'description': 'loss function to be used',
			'type': 'int8',
			'castingMode': 'none'
		},
		{
			'name': 'fitIntercept',
			'description': 'boolean indicating whether to include intercept',
			'type': 'bool',
			'castingMode': 'none'
		}
	];
	return struct( schema );
}


// EXPORTS //

module.exports = factory;
