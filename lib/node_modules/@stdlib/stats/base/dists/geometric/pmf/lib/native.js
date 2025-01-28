/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluates the probability mass function (PMF) for a geometric distribution with success probability `p` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {Probability} p - success probability
* @returns {Probability} evaluated PMF
*
* @example
* var y = pmf( 4.0, 0.3 );
* // returns ~0.072
*
* @example
* var y = pmf( 2.0, 0.7 );
* // returns ~0.063
*
* @example
* var y = pmf( -1.0, 0.5 );
* // returns 0.0
*
* @example
* var y = pmf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = pmf( NaN, 0.5 );
* // returns NaN
*
* @example
* // Invalid success probability:
* var y = pmf( 2.0, 1.5 );
* // returns NaN
*/
function pmf( x, p ) {
	return addon( x, p );
}


// EXPORTS //

module.exports = pmf;
