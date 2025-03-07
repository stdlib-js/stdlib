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
* Adds two double-precision complex floating-point numbers stored in real-valued strided array views and assigns results to a provided strided output array.
*
* @param {Float64Array} z1 - first complex number view
* @param {integer} strideZ1 - stride length for `z1`
* @param {NonNegativeInteger} offsetZ1 - starting index for `z1`
* @param {Float64Array} z2 - second complex number view
* @param {integer} strideZ2 - stride length for `z2`
* @param {NonNegativeInteger} offsetZ2 - starting index for `z2`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var z1 = new Float64Array( [ 5.0, 3.0 ] );
* var z2 = new Float64Array( [ -2.0, 1.0 ] );
*
* var out = strided( z1, 1, 0, z2, 1, 0, new Float64Array( 2 ), 1, 0 );
* // returns <Float64Array>[ 3.0, 4.0 ]
*/
function strided( z1, strideZ1, offsetZ1, z2, strideZ2, offsetZ2, out, strideOut, offsetOut ) { // eslint-disable-line max-len
	out[ offsetOut ] = z1[ offsetZ1 ] + z2[ offsetZ2 ];
	out[ offsetOut+strideOut ] = z1[ offsetZ1+strideZ1 ] + z2[ offsetZ2+strideZ2 ]; // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = strided;
