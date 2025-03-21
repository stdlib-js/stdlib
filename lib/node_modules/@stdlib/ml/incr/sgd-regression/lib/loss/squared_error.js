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

var regularize = require( './../regularize.js' );


// MAIN //

/**
* Given a new observation `(x,y)`, updates the weights using the squared error loss.
*
* ## Notes
*
* The squared error loss is defined as the squared difference of the observed and fitted value.
*
* @private
* @param {WeightVector} weights - current model coefficients
* @param {NumericArray} x - feature vector
* @param {number} y - response value
* @param {PositiveNumber} eta - current learning rate
* @param {NonNegativeNumber} lambda - regularization parameter
*/
function squaredErrorLoss( weights, x, y, eta, lambda ) {
	var loss = y - weights.innerProduct( x );

	// Perform L2 regularization...
	regularize( weights, lambda, eta );

	weights.add( x, ( eta * loss ) );
}


// EXPORTS //

module.exports = squaredErrorLoss;
