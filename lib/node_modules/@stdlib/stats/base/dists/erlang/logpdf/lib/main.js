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

// MODULES //

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var gammaLogPDF = require( '@stdlib/stats/base/dists/gamma/logpdf' );


// MAIN //

/**
* Evaluates the natural logarithm of the probability density function (PDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 0.1, 1, 1.0 );
* // returns ~-0.1
*
* @example
* var y = logpdf( 0.5, 2, 2.5 );
* // returns ~-0.111
*
* @example
* var y = logpdf( -1.0, 4, 2.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( NaN, 1, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, 1, NaN );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, -2, 0.5 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, 0.5, 0.5 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, 0.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( 0.0, 0.0, 2.0 );
* // returns Infinity
*
* @example
* var y = logpdf( 2.0, 1, 0.0 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, 1, -1.0 );
* // returns NaN
*/
function logpdf( x, k, lambda ) {
	if ( !isNonNegativeInteger( k ) ) {
		return NaN;
	}
	return gammaLogPDF( x, k, lambda );
}


// EXPORTS //

module.exports = logpdf;
