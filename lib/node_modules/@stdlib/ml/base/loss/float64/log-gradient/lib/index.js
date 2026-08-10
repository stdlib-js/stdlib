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
* Compute the log loss gradient with respect to a model parameter.
*
* @module @stdlib/ml/base/loss/float64/log-gradient
*
* @example
* var logGradient = require( '@stdlib/ml/base/loss/float64/log-gradient' );
*
* var v = logGradient( 2.3, 1.0, 0.782 );
* // returns ~-0.722
*
* v = logGradient( 1.4, 1.0, 0.202 );
* // returns ~-0.63
*
* v = logGradient( 1.0, 1.0, -0.999 );
* // returns ~-0.731
*
* v = logGradient( 5.0, -1.0, 0.234 );
* // returns ~2.791
*
* v = logGradient( -3.2, -1.0, 0.2 );
* // returns ~-1.759
*
* v = logGradient( -4.5, 1.0, -0.9 );
* // returns ~3.199
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
