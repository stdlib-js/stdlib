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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the index of the first element in a double-precision floating-point strided array which is less than a corresponding element in another double-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - stride length for `y`
* @returns {integer} index
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* var idx = dfirstIndexLessThan( x.length, x, 1, y, 1 );
* // returns 2
*/
function dfirstIndexLessThan( N, x, strideX, y, strideY ) {
	return addon( N, x, strideX, y, strideY );
}


// EXPORTS //

module.exports = dfirstIndexLessThan;
