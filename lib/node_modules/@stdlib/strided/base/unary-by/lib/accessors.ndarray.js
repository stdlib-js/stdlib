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
* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
*
* @private
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing one input array and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {NonNegativeIntegerArray} offsets - array-like object containing the starting indices (i.e., index offsets) for the input and output arrays
* @param {Array<Function>} accessors - array-like object containing accessors for the input and output arrays
* @param {Function} fcn - unary function to apply to callback return values
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {void}
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function accessor( v ) {
*     return v;
* }
*
* function xget( buf, idx ) {
*     return buf[ idx ] * 2.0;
* }
*
* function yset( buf, idx, value ) {
*     buf[ idx ] = value;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* var shape = [ x.length ];
* var strides = [ 1, 1 ];
* var offsets = [ 0, 0 ];
*
* unaryBy( [ x, y ], shape, strides, offsets, [ xget, yset ], abs, accessor );
*
* console.log( y );
* // => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
function unaryBy( arrays, shape, strides, offsets, accessors, fcn, clbk, thisArg ) { // eslint-disable-line max-len
	var xget;
	var yset;
	var sx;
	var sy;
	var ix;
	var iy;
	var x;
	var y;
	var N;
	var v;
	var i;

	N = shape[ 0 ];
	if ( N <= 0 ) {
		return;
	}
	ix = offsets[ 0 ];
	iy = offsets[ 1 ];
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	xget = accessors[ 0 ];
	yset = accessors[ 1 ];
	for ( i = 0; i < N; i++ ) {
		v = clbk.call( thisArg, xget( x, ix ), i, [ ix, iy ], [ x, y ] );
		if ( v !== void 0 ) {
			yset( y, iy, fcn( v ) );
		}
		ix += sx;
		iy += sy;
	}
}


// EXPORTS //

module.exports = unaryBy;
