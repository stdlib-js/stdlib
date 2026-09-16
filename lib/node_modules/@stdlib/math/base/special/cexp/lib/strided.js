/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var assign = require( './assign.js' );


// MAIN //

/**
* Evaluates the exponential function for a double-precision complex floating-point number stored in a real-valued strided array view and assigns results to a provided strided output array.
*
* @param {Float64Array} z - complex number view
* @param {integer} strideZ - stride length for `z`
* @param {NonNegativeInteger} offsetZ - starting index for `z`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var z = new Float64Array( [ 0.0, 0.0 ] );
*
* var out = strided( z, 1, 0, new Float64Array( 2 ), 1, 0 );
* // returns <Float64Array>[ 1.0, 0.0 ]
*/
function strided( z, strideZ, offsetZ, out, strideOut, offsetOut ) {
	return assign( z[ offsetZ ], z[ offsetZ+strideZ ], out, strideOut, offsetOut ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = strided;
