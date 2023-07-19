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
* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Collection} y - destination array/collection
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Function} fcn - unary function to apply to callback return values
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `y`
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );
*
* console.log( y );
* // => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
function mapBy( N, x, strideX, offsetX, y, strideY, offsetY, fcn, clbk, thisArg ) { // eslint-disable-line max-len
	var xget;
	var yset;

	if ( isAccessorArray( x ) ) {
		xget = accessorGetter( dtype( x ) );
	}
	if ( isAccessorArray( y ) ) {
		yset = accessorSetter( dtype( y ) );
	}
	if ( xget || yset ) {
		xget = xget || getter( dtype( x ) );
		yset = yset || setter( dtype( y ) );
		return accessors( N, x, strideX, offsetX, xget, y, strideY, offsetY, yset, fcn, clbk, thisArg ); // eslint-disable-line max-len
	}
	return strided( N, x, strideX, offsetX, y, strideY, offsetY, fcn, clbk, thisArg ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = mapBy;
