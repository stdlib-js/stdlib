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

var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Takes elements from one of two double-precision floating-point strided arrays depending on a condition.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {BooleanArray} condition - condition array
* @param {integer} strideC - stride length for `condition`
* @param {NonNegativeInteger} offsetC - starting index for `condition`
* @param {Float64Array} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Float64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var condition = new BooleanArray( [ true, false, true ] );
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 4.0, 5.0, 6.0 ] );
* var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );
*
* dwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 5.0, 3.0 ]
*/
function dwhere( N, condition, strideC, offsetC, x, strideX, offsetX, y, strideY, offsetY, out, strideOut, offsetOut ) { // eslint-disable-line max-len, max-params
	addon.ndarray( N, reinterpretBoolean( condition, 0 ), strideC, offsetC, x, strideX, offsetX, y, strideY, offsetY, out, strideOut, offsetOut ); // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = dwhere;
