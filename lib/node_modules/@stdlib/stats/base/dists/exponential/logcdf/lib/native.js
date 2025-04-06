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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for an exponential distribution with rate parameter `lambda` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} lambda - rate parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.1 );
* // returns ~-1.708
*
* @example
* var y = logcdf( 1.0, 2.0 );
* // returns ~-0.145
*
* @example
* var y = logcdf( -1.0, 4.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN );
* // returns NaN
*
* @example
* // Negative rate parameter:
* var y = logcdf( 2.0, -1.0 );
* // returns NaN
*/
function logcdf( x, lambda ) {
	return addon( x, lambda );
}


// EXPORTS //

module.exports = logcdf;
