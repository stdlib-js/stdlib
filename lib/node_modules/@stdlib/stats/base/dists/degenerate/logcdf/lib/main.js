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
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF) for a degenerate distribution with mean `mu`.
*
* @param {number} x - input value
* @param {number} mu - constant value of distribution
* @returns {number} natural logarithm of cumulative distribution function
*
* @example
* var y = logcdf( 2.0, 3.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( 4.0, 3.0 );
* // returns 0.0
*
* @example
* var y = logcdf( 3.0, 3.0 );
* // returns 0.0
*
* @example
* var y = logcdf( NaN, 0.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN );
* // returns NaN
*/
function logcdf( x, mu ) {
	if ( isnan( x ) || isnan( mu ) ) {
		return NaN;
	}
	return ( x < mu ) ? NINF : 0.0;
}


// EXPORTS //

module.exports = logcdf;
