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
* Evaluates the cumulative distribution function (CDF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 9.0, 0.0, 10.0 );
* // returns ~0.909
*
* @example
* var y = cdf( 0.5, 0.0, 2.0 );
* // returns ~0.333
*
* @example
* var y = cdf( +Infinity, 2.0, 4.0 );
* // returns 1.0
*
* @example
* var y = cdf( -Infinity, 2.0, 4.0 );
* // returns 0.0
*
* @example
* var y = cdf( 2.0, 1.0, 0.0 );
* // returns NaN
*/
function cdf( x, a, b ) {
	return addon( x, a, b );
}


// EXPORTS //

module.exports = cdf;
