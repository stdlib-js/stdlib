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
var base = require( './base.js' ).assign;


// MAIN //

/**
* Computes the cumulative sum along one or more ndarray dimensions and assigns the results to a provided output ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|number|ComplexLike)} [initial] - initial value
* @param {ndarrayLike} out - output ndarray
* @param {Options} [options] - function options
* @param {*} [options.dtype] - output ndarray data type
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} initial value argument must be either an ndarray-like object or a numeric value
* @throws {TypeError} output argument must be an ndarray-like object
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
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ] );
* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var strides = [ 2, 2, 1 ];
*
* // Define the index offset:
* var offset = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, shape, strides, offset, 'row-major' );
*
* // Create an output ndarray:
* var y = new ndarray( 'float64', ybuf, shape, strides, offset, 'row-major' );
*
* // Perform operation:
* var out = assign( x, y );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* var arr = ndarray2array( out );
* // returns [ [ [ 1.0, 3.0 ] ], [ [ 0.0, 4.0 ] ], [ [ -1.0, 5.0 ] ] ]
*/
function assign( x ) {
	var nargs;
	var opts;
	var ord;
	var out;
	var dt;
	var sh;
	var v;

	nargs = arguments.length;

	// Resolve input ndarray meta data:
	dt = getDType( x );
	ord = getOrder( x );

	// Case: assign( x, out )
	if ( nargs < 3 ) {
		return base( x, broadcastScalar( 0.0, dt, [], ord ), arguments[ 1 ] );
	}
	v = arguments[ 1 ];
	out = arguments[ 2 ];

	// Case: assign( x, ???, ??? )
	if ( nargs === 3 ) {
		// Case: assign( x, initial, out )
		if ( isndarrayLike( out ) ) {
			// Case: assign( x, initial_ndarray, out )
			if ( isndarrayLike( v ) ) {
				// As the operation is performed across all dimensions, `v` is assumed to be a zero-dimensional ndarray...
				return base( x, v, out );
			}
			// When computing the sum, initial values must be numeric...
			if ( !isNumber( v ) && !isComplexLike( v ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or a numeric scalar value. Value: `%s`.', v ) );
			}
			// Case: assign( x, initial_scalar, out )
			return base( x, broadcastScalar( v, dt, [], ord ), out );
		}
		// Case: assign( x, out, opts )
		opts = out;
		out = v;
		v = 0.0;

		// Intentionally fall through...
	}
	// Case: assign( x, initial, out, opts )
	else { // nargs > 3
		opts = arguments[ 3 ];
	}
	// Case: assign( x, initial_ndarray, out, opts )
	if ( isndarrayLike( v ) ) {
		// When not provided `dims`, the operation is performed across all dimensions and `v` is assumed to be a zero-dimensional ndarray; when `dims` is provided, we need to broadcast `v` to match the shape of the non-core dimensions...
		if ( hasOwnProp( opts, 'dims' ) ) {
			v = maybeBroadcastArray( v, nonCoreShape( getShape( x ), opts.dims ) ); // eslint-disable-line max-len
		}
	}
	// Case: assign( x, initial_scalar, out, opts )
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
	return base( x, v, out, opts );
}


// EXPORTS //

module.exports = assign;
