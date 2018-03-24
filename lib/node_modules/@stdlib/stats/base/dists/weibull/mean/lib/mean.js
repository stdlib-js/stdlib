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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var gamma = require( '@stdlib/math/base/special/gamma' );


// MAIN //

/**
* Returns the expected value of a Weibull distribution.
*
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {PositiveNumber} expected value
*
* @example
* var v = mean( 1.0, 1.0 );
* // returns 1.0
*
* @example
* var v = mean( 4.0, 12.0 );
* // returns ~10.877
*
* @example
* var v = mean( 8.0, 2.0 );
* // returns ~1.883
*
* @example
* var v = mean( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = mean( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = mean( 2.0, NaN );
* // returns NaN
*
* @example
* var v = mean( NaN, 2.0 );
* // returns NaN
*/
function mean( k, lambda ) {
	if (
		isnan( k ) ||
		isnan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return NaN;
	}
	return lambda * gamma( 1.0 + ( 1.0/k ) );
}


// EXPORTS //

module.exports = mean;
