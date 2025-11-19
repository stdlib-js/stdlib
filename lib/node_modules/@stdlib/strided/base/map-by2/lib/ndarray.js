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

var isAccessorArray = require( '@stdlib/array/base/assert/is-accessor-array' );
var accessorGetter = require( '@stdlib/array/base/accessor-getter' );
var accessorSetter = require( '@stdlib/array/base/accessor-setter' );
var getter = require( '@stdlib/array/base/getter' );
var setter = require( '@stdlib/array/base/setter' );
var dtype = require( '@stdlib/array/dtype' );
var strided = require( './map.ndarray.js' );
var accessors = require( './accessors.ndarray.js' );


// MAIN //

/**
* Applies a binary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Collection} y - input array/collection
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Collection} z - destination array/collection
* @param {integer} strideZ - `z` stride length
* @param {NonNegativeInteger} offsetZ - starting `z` index
* @param {Function} fcn - binary function to apply to callback return values
* @param {Callback} clbk - callback function which returns an array-like object containing two values
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `z`
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
*
* function accessor( values ) {
*     values[ 0 ] *= 2.0;
*     values[ 1 ] *= 2.0;
*     return values;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
*
* console.log( z );
* // => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*/
function mapBy2( N, x, strideX, offsetX, y, strideY, offsetY, z, strideZ, offsetZ, fcn, clbk, thisArg ) { // eslint-disable-line max-len, max-params
	var xget;
	var yget;
	var zset;

	if ( isAccessorArray( x ) ) {
		xget = accessorGetter( dtype( x ) );
	}
	if ( isAccessorArray( y ) ) {
		yget = accessorGetter( dtype( y ) );
	}
	if ( isAccessorArray( z ) ) {
		zset = accessorSetter( dtype( z ) );
	}
	if ( xget || yget || zset ) {
		xget = xget || getter( dtype( x ) );
		yget = yget || getter( dtype( y ) );
		zset = zset || setter( dtype( z ) );
		return accessors( N, x, strideX, offsetX, xget, y, strideY, offsetY, yget, z, strideZ, offsetZ, zset, fcn, clbk, thisArg ); // eslint-disable-line max-len
	}
	return strided( N, x, strideX, offsetX, y, strideY, offsetY, z, strideZ, offsetZ, fcn, clbk, thisArg ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = mapBy2;
