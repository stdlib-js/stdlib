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
* Compute the squared error loss gradient with respect to a model parameter.
*
* @module @stdlib/ml/base/loss/float64/squared-error-gradient
*
* @example
* var squaredErrorGradient = require( '@stdlib/ml/base/loss/float64/squared-error-gradient' );
*
* var v = squaredErrorGradient( 5.0, -2.0, -1.782 );
* // returns ~1.09
*
* v = squaredErrorGradient( 1.0, 0.202, 0.202 );
* // returns 0.0
*
* v = squaredErrorGradient( -4.0,  1.0, -0.999 );
* // returns 7.996
*
* v = squaredErrorGradient( -10.33, -2.4, 0.234 );
* // returns ~-27.209
*
* v = squaredErrorGradient( 4.723, 0.2, 0.532 );
* // returns ~1.568
*
* v = squaredErrorGradient( 11.928, -1.811, -0.9 );
* // returns ~10.866
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
