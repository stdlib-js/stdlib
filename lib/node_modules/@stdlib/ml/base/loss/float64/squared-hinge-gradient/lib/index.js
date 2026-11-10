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
* Compute the squared hinge loss gradient with respect to a model parameter.
*
* @module @stdlib/ml/base/loss/float64/squared-hinge-gradient
*
* @example
* var squaredHingeGradient = require( '@stdlib/ml/base/loss/float64/squared-hinge-gradient' );
*
* var v = squaredHingeGradient( 3.0, 1.0, 1.0, 0.782 );
* // returns ~-1.308
*
* v = squaredHingeGradient( 2.5, 1.0, 1.0, 0.202 );
* // returns -3.99
*
* v = squaredHingeGradient( -1.3, 1.0, 1.0, -0.999 );
* // returns ~5.197
*
* v = squaredHingeGradient( -2.0, 1.0, -1.0, 0.234 );
* // returns -4.936
*
* v = squaredHingeGradient( -2.0, 1.0, -1.0, 0.2 );
* // returns -4.8
*
* v = squaredHingeGradient( -1.3, 1.0, 1.0, -0.9 );
* // returns ~4.94
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
