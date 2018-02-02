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

var max = require( '@stdlib/math/base/special/max' );


// VARIABLES //

var MIN_SCALING_FACTOR = 1e-7;


// MAIN //

/**
* L2 regularization of feature weights.
*
* @private
* @param {WeightVector} weights - current model coefficients
* @param {NonNegativeNumber} lambda - regularization parameter
* @param {PositiveNumber} eta - current learning rate
*/
function regularize( weights, lambda, eta ) {
	var scalingFactor;
	if ( lambda > 0.0 ) {
		scalingFactor = 1.0 - ( eta * lambda );
		weights.scaleTo( max( scalingFactor, MIN_SCALING_FACTOR ) );
	}
}


// EXPORTS //

module.exports = regularize;
