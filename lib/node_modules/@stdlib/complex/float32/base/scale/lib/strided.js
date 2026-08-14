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

var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Scales a single-precision complex floating-point number stored in a real-valued strided array view by a real-valued single-precision floating-point scalar constant and assigns results to a provided strided output array.
*
* @param {number} alpha - scalar constant
* @param {Float32Array} z - complex number view
* @param {integer} strideZ - stride length for `z`
* @param {NonNegativeInteger} offsetZ - starting index for `z`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Collection} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var z = new Float32Array( [ 5.0, 3.0 ] );
*
* var out = strided( 5.0, z, 1, 0, new Float32Array( 2 ), 1, 0 );
* // returns <Float32Array>[ 25.0, 15.0 ]
*/
function strided( alpha, z, strideZ, offsetZ, out, strideOut, offsetOut ) {
	out[ offsetOut ] = f32( alpha * z[ offsetZ ] );
	out[ offsetOut+strideOut ] = f32( alpha * z[ offsetZ+strideZ ] );
	return out;
}


// EXPORTS //

module.exports = strided;
