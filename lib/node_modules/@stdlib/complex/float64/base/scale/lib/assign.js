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
* Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant and assigns results to a provided output array.
*
* @param {number} alpha - scalar constant
* @param {number} re - real component of the complex number
* @param {number} im - imaginary component of the complex number
* @param {Collection} out - output array
* @param {integer} strideOut - stride length
* @param {NonNegativeInteger} offsetOut - starting index
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var out = assign( 5.0, 5.0, 3.0, new Float64Array( 2 ), 1, 0 );
* // returns <Float64Array>[ 25.0, 15.0 ]
*/
function assign( alpha, re, im, out, strideOut, offsetOut ) {
	out[ offsetOut ] = re * alpha;
	out[ offsetOut+strideOut ] = im * alpha;
	return out;
}


// EXPORTS //

module.exports = assign;
