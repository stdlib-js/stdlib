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

// MAIN //

/**
* Performs a multiply-add operation involving three double-precision complex floating-point numbers and assigns the results to an output strided array.
*
* @param {number} ar - real component of the first complex number
* @param {number} ai - imaginary component of the first complex number
* @param {number} xr - real component of the second complex number
* @param {number} xi - imaginary component of the second complex number
* @param {number} yr - real component of the third complex number
* @param {number} yi - imaginary component of the third complex number
* @param {Collection} out - output array
* @param {integer} strideOut - stride length
* @param {NonNegativeInteger} offsetOut - starting index
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var out = assign( 5.0, 3.0, -2.0, 1.0, 7.0, -8.0, new Float64Array( 2 ), 1, 0 );
* // returns <Float64Array>[ -6.0, -9.0 ]
*/
function assign( ar, ai, xr, xi, yr, yi, out, strideOut, offsetOut ) {
	out[ offsetOut ] = (ar*xr) - (ai*xi) + yr;
	out[ offsetOut+strideOut ] = (ar*xi) + (ai*xr) + yi;
	return out;
}


// EXPORTS //

module.exports = assign;
