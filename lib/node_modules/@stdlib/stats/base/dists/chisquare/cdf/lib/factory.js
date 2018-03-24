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

var gammaFactory = require( '@stdlib/stats/base/dists/gamma/cdf' ).factory;


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a chi-squared distribution with degrees of freedom `k`.
*
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {Function} CDF
*
* @example
* var cdf = factory( 3.0 );
*
* var y = cdf( 6.0 );
* // returns ~0.888
*
* y = cdf( 1.5 );
* // returns ~0.318
*/
function factory( k ) {
	return gammaFactory( k/2.0, 0.5 );
}


// EXPORTS //

module.exports = factory;
