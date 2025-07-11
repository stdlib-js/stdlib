/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var format = require( '@stdlib/string/format' );
var nonCoreShape = require( './non_core_shape.js' );
var base = require( './base.js' );


// MAIN //

/**
* Computes the cumulative sum along one or more ndarray dimensions.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|number|ComplexLike)} [initial] - initial value
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
* @param {string} [options.dtype] - output ndarray data type
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} initial value argument must be either an ndarray-like object or a numeric value
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ] );
*
* // Define the shape of the input array:
* var sh = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform operation:
* var out = cusum( x );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ [ 1.0, 3.0 ] ], [ [ 0.0, 4.0 ] ], [ [ -1.0, 5.0 ] ] ]
*/
function cusum( x ) {
	var nargs;
	var opts;
	var ord;
	var dt;
	var sh;
	var v;

	nargs = arguments.length;

	// Resolve input ndarray meta data:
	dt = getDType( x );
	ord = getOrder( x );

	// Case: cusum( x )
	if ( nargs < 2 ) {
		return base( x, broadcastScalar( 0.0, dt, [], ord ) );
	}
	v = arguments[ 1 ];

	// Case: cusum( x, ??? )
	if ( nargs === 2 ) {
		// Case: cusum( x, initial_ndarray )
		if ( isndarrayLike( v ) ) {
			// As the operation is performed across all dimensions, `v` is assumed to be a zero-dimensional ndarray...
			return base( x, v );
		}
		// Case: cusum( x, initial_scalar )
		if ( isNumber( v ) || isComplexLike( v ) ) {
			return base( x, broadcastScalar( v, dt, [], ord ) );
		}
		// Case: cusum( x, opts )
		opts = v;
		v = 0.0;

		// Intentionally fall through...
	}
	// Case: cusum( x, initial, opts )
	else { // nargs > 2
		opts = arguments[ 2 ];
	}
	// Case: cusum( x, initial_ndarray, opts )
	if ( isndarrayLike( v ) ) {
		// When not provided `dims`, the operation is performed across all dimensions and `v` is assumed to be a zero-dimensional ndarray; when `dims` is provided, we need to broadcast `v` to match the shape of the non-core dimensions...
		if ( hasOwnProp( opts, 'dims' ) ) {
			v = maybeBroadcastArray( v, nonCoreShape( getShape( x ), opts.dims ) ); // eslint-disable-line max-len
		}
	}
	// Case: cusum( x, initial_scalar, opts )
	else if ( isNumber( v ) || isComplexLike( v ) ) {
		if ( hasOwnProp( opts, 'dims' ) ) {
			sh = nonCoreShape( getShape( x ), opts.dims );
		} else {
			sh = [];
		}
		v = broadcastScalar( v, dt, sh, getOrder( x ) );
	} else {
		throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or a numeric scalar value. Value: `%s`.', v ) );
	}
	return base( x, v, opts );
}


// EXPORTS //

module.exports = cusum;
