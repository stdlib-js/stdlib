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
* Evaluates the natural logarithm of the cumulative density function (CDF) for a uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 0.5, 1.0, 1.0 );
* // returns ~-0.693
*
* @example
* var y = logcdf( 0.5, 2.0, 4.0 );
* // returns ~-0.38
*
* @example
* var y = logcdf( 0.2, 2.0, 2.0 );
* // returns ~-2.546
*
* @example
* var y = logcdf( 0.8, 4.0, 4.0 );
* // returns ~-0.13
*
* @example
* var y = logcdf( -0.5, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( 1.5, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = logcdf( 2.0, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = logcdf( 2.0, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = logcdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, 1.0, NaN );
* // returns NaN
*/
function logcdf( x, a, b ) {
	return addon( x, a, b );
}


// EXPORTS //

module.exports = logcdf;
