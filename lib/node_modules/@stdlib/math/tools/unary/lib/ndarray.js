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

var ndarray = require( '@stdlib/ndarray/ctor' );
var buffer = require( '@stdlib/ndarray/base/buffer' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var numel = require( '@stdlib/ndarray/base/numel' );


// FUNCTIONS //

/**
* Copies an array-like object to a generic array.
*
* @private
* @param {ArrayLikeObject} x - input array
* @returns {Array} output array
*/
function copy( x ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < x.length; i++ ) {
		out.push( x[ i ] );
	}
	return out;
}


// MAIN //

/**
* Applies a function to an ndarray.
*
* @private
* @param {Function} fcn - function to apply
* @param {ndarray} x - input array
* @param {string} ydtype - output array data type
* @param {string} yorder - output array order
* @throws {TypeError} must provide an input array argument with a supported data type
* @returns {ndarray} output array
*/
function ndarrayfcn( fcn, x, ydtype, yorder ) {
	var shape;
	var buf;
	var y;

	// Check if we were provided a zero-dimensional array...
	shape = copy( x.shape ); // Note: we need to copy the shape to avoid a shared shape object between `x` and `y` which could lead to unintended mutations (e.g., if either `x` or `y` is reshaped)
	if ( shape.length === 0 ) {
		buf = buffer( ydtype, 1 );
		y = ndarray( ydtype, buf, [], [ 0 ], 0, yorder );
	} else {
		buf = buffer( ydtype, x.length || numel( shape ) ); // WARNING: `x.length` is a property found on ndarray instances, but not strictly necessary to describe an ndarray; accordingly, used here to avoid unnecessary computation, but a potential source of bugs if provided an ndarray-like object having a `length` property which is not equal to the product of the dimensions.
		y = ndarray( ydtype, buf, shape, shape2strides( shape, yorder ), 0, yorder ); // eslint-disable-line max-len
	}
	fcn( x, y );
	return y;
}


// EXPORTS //

module.exports = ndarrayfcn;
