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
* Given a new observation `(x,y)`, updates the weights using the epsilon-insensitive loss.
*
* ## Notes
*
* The penalty of the epsilon-insensitive loss is the absolute value of the dot product of the weights and `x` minus `y` whenever the absolute error exceeds epsilon, and zero otherwise.
*
* @private
* @param {WeightVector} weights - current model coefficients
* @param {NumericArray} x - feature vector
* @param {number} y - response value
* @param {PositiveNumber} eta - current learning rate
* @param {NonNegativeNumber} lambda - regularization parameter
* @param {PositiveNumber} epsilon - insensitivity parameter
*/
function epsilonInsensitiveLoss( weights, x, y, eta, lambda, epsilon ) {
	var p = weights.innerProduct( x ) - y;

	// Perform L2 regularization...
	regularize( weights, lambda, eta );

	if ( p > epsilon ) {
		weights.add( x, -eta );
	} else if ( p < -epsilon ) {
		weights.add( x, +eta );
	}
}


// EXPORTS //

module.exports = epsilonInsensitiveLoss;
