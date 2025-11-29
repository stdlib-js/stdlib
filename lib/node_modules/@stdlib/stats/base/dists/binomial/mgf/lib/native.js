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
* Evaluates the moment-generating function (MGF) for a binomial distribution with number of trials `n` and success probability `p` at a value `t`.
*
* @private
* @param {number} t - input value
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.5, 20, 0.2 );
* // returns ~11.471
*
* @example
* var y = mgf( 5.0, 20, 0.2 );
* // returns ~4.798e29
*
* @example
* var y = mgf( 0.9, 10, 0.4 );
* // returns ~99.338
*
* @example
* var y = mgf( 0.0, 10, 0.4 );
* // returns 1.0
*
* @example
* var y = mgf( NaN, 20, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, 20, NaN );
* // returns NaN
*
* @example
* var y = mgf( 0.2, -2.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 20, -1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 20, 1.5 );
* // returns NaN
*/
function mgf( t, n, p ) {
	return addon( t, n, p );
}


// EXPORTS //

module.exports = mgf;
