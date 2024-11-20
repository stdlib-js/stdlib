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

'use strict';

// MODULES //

var mapBy = require( '@stdlib/strided/base/map-by' );
var asinh = require( '@stdlib/math/base/special/asinh' );


// MAIN //

/**
* Computes the hyperbolic arcsine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {Collection} y - destination array/collection
* @param {integer} strideY - `y` stride length
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `y`
*
* @example
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, -0.0, 2.0, -2.0, 0.75 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* asinhBy( x.length, x, 1, y, 1, accessor );
*
* console.log( y );
* // => [ 0.0, 0.0, ~1.444, ~-1.444, ~0.693 ]
*/
function asinhBy( N, x, strideX, y, strideY, clbk, thisArg ) {
	return mapBy( N, x, strideX, y, strideY, asinh, clbk, thisArg );
}


// EXPORTS //

module.exports = asinhBy;
