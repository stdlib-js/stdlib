/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a negative binomial distribution.
*
* @private
* @param {number} t - input value
* @param {PositiveNumber} r - number of successes until experiment is stopped
* @param {Probability} p - success probability
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.05, 20.0, 0.8 );
* // returns ~267.839
*
* @example
* var y = mgf( 0.1, 20.0, 0.1 );
* // returns ~9.347
*
* @example
* var y = mgf( 0.5, 10.0, 0.4 );
* // returns ~42822.023
*
* @example
* var y = mgf( 0.1, 0.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( NaN, 20.0, 0.5 );
* // returns NaN
*/
function mgf( t, r, p ) {
	return addon( t, r, p );
}


// EXPORTS //

module.exports = mgf;
