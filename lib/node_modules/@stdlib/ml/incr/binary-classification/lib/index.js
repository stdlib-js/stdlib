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

/**
* Incrementally perform binary classification using stochastic gradient descent (SGD).
*
* @module @stdlib/ml/incr/binary-classification
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var array = require( '@stdlib/ndarray/array' );
* var incrBinaryClassification = require( '@stdlib/ml/incr/binary-classification' );
*
* // Create an accumulator:
* var accumulator = incrBinaryClassification( 3, {
*     'intercept': true,
*     'lambda': 1.0e-5
* });
*
* // ...
*
* // Update the model:
* var x = array( new Float64Array( [ 2.3, 1.0, 5.0 ] ) );
* var coefs = accumulator( x, 1 );
* // returns <ndarray>
*
* // ...
*
* // Create a new observation vector:
* x = array( new Float64Array( [ 2.3, 5.3, 8.6 ] ) );
*
* // Predict the response value:
* var yhat = accumulator.predict( x );
* // returns <ndarray>
*/

// MODULES //

var incrBinaryClassification = require( './main.js' );


// EXPORTS //

module.exports = incrBinaryClassification;
