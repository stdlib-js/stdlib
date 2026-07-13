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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var nonCoreShape = require( '@stdlib/ndarray/base/complement-shape' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var defaults = require( '@stdlib/ndarray/defaults' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.integer' );


// MAIN //

/**
* Circularly shifts the elements of an input ndarray by a specified number of positions along one or more ndarray dimensions.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|integer)} k - number of positions to shift
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be either an ndarray-like object or an integer
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} input ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0 ], {
*     'shape': [ 2, 2 ],
*     'order': 'row-major'
* });
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var y = circshift( x, 1, {
*     'dims': [ 0 ]
* });
* // returns <ndarray>[ [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
*/
function circshift( x, k ) {
	var nargs;
	var opts;
	var sh;
	var ka;

	nargs = arguments.length;

	// Case: circshift( x, k )
	if ( nargs === 2 ) {
		// Case: circshift( x, k_scalar )
		if ( isInteger( k ) ) {
			return base( x, broadcastScalar( k, DEFAULT_DTYPE, [], getOrder( x ) ) );
		}
		// Case: circshift( x, k_ndarray )
		if ( isndarrayLike( k ) ) {
			// As the operation is performed across all dimensions, `k` is assumed to be a zero-dimensional ndarray...
			return base( x, k );
		}
		throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or an integer. Value: `%s`.', k ) );
	}
	// Case: circshift( x, k, opts )
	opts = arguments[ 2 ];

	// Case: circshift( x, k_scalar, opts )
	if ( isInteger( k ) ) {
		if ( hasOwnProp( opts, 'dims' ) ) {
			sh = nonCoreShape( getShape( x ), opts.dims );
		} else {
			sh = [];
		}
		ka = broadcastScalar( k, DEFAULT_DTYPE, sh, getOrder( x ) );
	}
	// Case: circshift( x, k_ndarray, opts )
	else if ( isndarrayLike( k ) ) {
		// When not provided `dims`, the operation is performed across all dimensions and `k` is assumed to be a zero-dimensional ndarray; when `dims` is provided, we need to broadcast `k` to match the shape of the non-core dimensions...
		if ( hasOwnProp( opts, 'dims' ) ) {
			ka = maybeBroadcastArray( k, nonCoreShape( getShape( x ), opts.dims ) ); // eslint-disable-line max-len
		} else {
			ka = k;
		}
	} else {
		throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or an integer. Value: `%s`.', k ) );
	}
	return base( x, ka, opts );
}


// EXPORTS //

module.exports = circshift;
