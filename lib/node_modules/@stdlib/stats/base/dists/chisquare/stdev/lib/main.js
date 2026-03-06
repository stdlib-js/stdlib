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
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns the standard deviation of a chi-squared distribution.
*
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {NonNegativeNumber} standard deviation
*
* @example
* var v = stdev( 9.0 );
* // returns ~4.243
*
* @example
* var v = stdev( 1.0 );
* // returns ~1.414
*
* @example
* var v = stdev( -0.2 );
* // returns NaN
*
* @example
* var v = stdev( NaN );
* // returns NaN
*/
function stdev( k ) {
	if ( isnan( k ) || k < 0.0 ) {
		return NaN;
	}
	return sqrt( 2.0 * k );
}


// EXPORTS //

module.exports = stdev;
