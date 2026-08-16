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

/**
* Compute the squared epsilon insensitive loss gradient with respect to a model parameter.
*
* @module @stdlib/ml/base/loss/float64/squared-epsilon-insensitive-gradient
*
* @example
* var squaredEpsilonInsensitiveGradient = require( '@stdlib/ml/base/loss/float64/squared-epsilon-insensitive-gradient' );
*
* var v = squaredEpsilonInsensitiveGradient( 3.0, 5.0, 10.2, 0.782 );
* // returns ~-26.508
*
* v = squaredEpsilonInsensitiveGradient( 2.5, 2.0, 8.0, 0.202 );
* // returns ~-28.99
*
* v = squaredEpsilonInsensitiveGradient( -1.3, 1.0, 23.2, -0.999 );
* // returns ~60.317
*
* v = squaredEpsilonInsensitiveGradient( -2.0, 11.0, -12.2, 0.234 );
* // returns ~-5.736
*
* v = squaredEpsilonInsensitiveGradient( -2.0, 2.0, -21.0, 0.2 );
* // returns -76.8
*
* v = squaredEpsilonInsensitiveGradient( -1.3, 9.0, 4.0, -0.9 );
* // returns 0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
