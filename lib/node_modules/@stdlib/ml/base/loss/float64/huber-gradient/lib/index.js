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
* Compute the Huber loss gradient with respect to a model parameter.
*
* @module @stdlib/ml/base/loss/float64/huber-gradient
*
* @example
* var huberGradient = require( '@stdlib/ml/base/loss/float64/huber-gradient' );
*
* var v = huberGradient( 3.0, 5.0, 10.2, 0.782 );
* // returns -15.0
*
* v = huberGradient( 2.5, 2.0, 8.0, 0.202 );
* // returns -5.0
*
* v = huberGradient( -1.3, 1.0, 23.2, -0.999 );
* // returns 1.3
*
* v = huberGradient( -2.0, 11.0, -12.2, 0.234 );
* // returns -22.0
*
* v = huberGradient( -2.0, 2.0, -21.0, 0.2 );
* // returns -4.0
*
* v = huberGradient( -1.3, 9.0, 4.0, -0.9 );
* // returns ~6.37
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
