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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 10.0, 2.0, 3.0, 2.0 );
* // returns ~-0.141
*
* @example
* var y = logcdf( -2.5, 1.0, 3.0, -3.0 );
* // returns -6.0
*
* @example
* var y = logcdf( 0.0, 2.0, 1.0, -1.0 );
* // returns -1.0
*
* @example
* var y = logcdf( NaN, 2.0, 1.0, -1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN, 1.0, -1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, 2.0, NaN, -1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, 2.0, 1.0, NaN );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, -1.0, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, 1.0, -1.0, 0.0 );
* // returns NaN
*/
function logcdf( x, alpha, s, m ) {
	return addon( x, alpha, s, m );
}


// EXPORTS //

module.exports = logcdf;
