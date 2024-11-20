/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var mapBy = require( '@stdlib/strided/base/map-by' ).ndarray;
var asin = require( '@stdlib/math/base/special/asin' );


// MAIN //

/**
* Computes the arcsine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Collection} y - destination array/collection
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `y`
*
* @example
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, -0.5, 1.0, -0.25, 0.75 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* asinBy( x.length, x, 1, 0, y, 1, 0, accessor );
*
* console.log( y );
* // => [ 0.0, ~-0.524, ~1.571, ~-0.253, ~0.848 ]
*/
function asinBy( N, x, strideX, offsetX, y, strideY, offsetY, clbk, thisArg ) {
	return mapBy( N, x, strideX, offsetX, y, strideY, offsetY, asin, clbk, thisArg );
}


// EXPORTS //

module.exports = asinBy;
