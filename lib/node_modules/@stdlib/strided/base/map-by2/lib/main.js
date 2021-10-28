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

// MAIN //

/**
* Applies a binary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {Collection} y - input array/collection
* @param {integer} strideY - `y` stride length
* @param {Collection} z - destination array/collection
* @param {integer} strideZ - `z` stride length
* @param {Function} fcn - binary function to apply to callback return values
* @param {Callback} clbk - callback function which returns an array-like object containing two values
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `z`
*
* @example
* var add = require( '@stdlib/math/base/ops/add' );
*
* function accessor( vx, vy ) {
*     return [ vx*2.0, vy*2.0 ];
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2( x.length, x, 1, y, 1, z, 1, add, accessor );
*
* console.log( z );
* // => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*/
function mapBy2( N, x, strideX, y, strideY, z, strideZ, fcn, clbk, thisArg ) {
	var ix;
	var iy;
	var iz;
	var v;
	var i;
	if ( N <= 0 ) {
		return z;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	if ( strideZ < 0 ) {
		iz = (1-N) * strideZ;
	} else {
		iz = 0;
	}
	for ( i = 0; i < N; i++ ) {
		v = clbk.call( thisArg, x[ ix ], y[ iy ], i, ix, iy, iz, x, y, z );
		if ( v !== void 0 ) {
			z[ iz ] = fcn( v[ 0 ], v[ 1 ] );
		}
		ix += strideX;
		iy += strideY;
		iz += strideZ;
	}
	return z;
}


// EXPORTS //

module.exports = mapBy2;
