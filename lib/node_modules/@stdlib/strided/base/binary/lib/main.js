/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var strided = require( './binary.js' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Applies a binary callback to strided input array elements and assigns results to elements in a strided output array.
*
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing two input arrays and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {Callback} fcn - binary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1 ];
*
* binary( [ x, y, z ], shape, strides, add );
*
* console.log( z );
* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
function binary( arrays, shape, strides, fcn ) {
	var xget;
	var yget;
	var zset;
	var x;
	var y;
	var z;

	x = arrays[ 0 ];
	if ( isAccessorArray( x ) ) {
		xget = accessorGetter( dtype( x ) );
	}
	y = arrays[ 1 ];
	if ( isAccessorArray( y ) ) {
		yget = accessorGetter( dtype( y ) );
	}
	z = arrays[ 2 ];
	if ( isAccessorArray( z ) ) {
		zset = accessorSetter( dtype( z ) );
	}
	if ( xget || yget || zset ) {
		xget = xget || getter( dtype( x ) );
		yget = yget || getter( dtype( y ) );
		zset = zset || setter( dtype( z ) );
		return accessors( arrays, shape, strides, [ xget, yget, zset ], fcn );
	}
	return strided( arrays, shape, strides, fcn );
}


// EXPORTS //

module.exports = binary;
