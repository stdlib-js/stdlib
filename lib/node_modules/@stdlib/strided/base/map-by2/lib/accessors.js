/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {Function} xget - accessor for retrieving elements in `x`
* @param {Collection} y - input array/collection
* @param {integer} strideY - `y` stride length
* @param {Function} yget - accessor for retrieving elements in `y`
* @param {Collection} z - destination array/collection
* @param {integer} strideZ - `z` stride length
* @param {Function} zset - accessor for setting elements in `z`
* @param {Function} fcn - binary function to apply to callback return values
* @param {Callback} clbk - callback function which returns an array-like object containing two values
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `z`
*
* @example
* var add = require( '@stdlib/math/base/ops/add' );
*
* function accessor( values ) {
*     return values;
* }
*
* function get( buf, idx ) {
*     return buf[ idx ] * 2.0;
* }
*
* function set( buf, idx, value ) {
*     buf[ idx ] = value;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2( x.length, x, 1, get, y, 1, get, z, 1, set, add, accessor );
*
* console.log( z );
* // => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*/
function mapBy2( N, x, strideX, xget, y, strideY, yget, z, strideZ, zset, fcn, clbk, thisArg ) { // eslint-disable-line max-len, max-params
	var args;
	var o;
	var a;
	var v;
	var i;
	if ( N <= 0 ) {
		return z;
	}
	o = [ 0, 0, 0 ];
	if ( strideX < 0 ) {
		o[ 0 ] = (1-N) * strideX;
	} else {
		o[ 0 ] = 0;
	}
	if ( strideY < 0 ) {
		o[ 1 ] = (1-N) * strideY;
	} else {
		o[ 1 ] = 0;
	}
	if ( strideZ < 0 ) {
		o[ 2 ] = (1-N) * strideZ;
	} else {
		o[ 2 ] = 0;
	}
	a = [ x, y, z ];
	args = [ 0, 0 ];
	for ( i = 0; i < N; i++ ) {
		args[ 0 ] = xget( x, o[ 0 ] );
		args[ 1 ] = yget( y, o[ 1 ] );
		v = clbk.call( thisArg, args, i, o, a );
		if ( v !== void 0 ) {
			zset( z, o[ 2 ], fcn( v[ 0 ], v[ 1 ] ) );
		}
		o[ 0 ] += strideX;
		o[ 1 ] += strideY;
		o[ 2 ] += strideZ;
	}
	return z;
}


// EXPORTS //

module.exports = mapBy2;
