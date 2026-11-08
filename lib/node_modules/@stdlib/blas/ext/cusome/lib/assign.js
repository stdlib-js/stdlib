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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var nonCoreShape = require( '@stdlib/ndarray/base/complement-shape' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var ndims = require( '@stdlib/ndarray/base/ndims' );
var format = require( '@stdlib/string/format' );
var defaults = require( '@stdlib/ndarray/defaults' );
var base = require( './base.js' ).assign;


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.integer_index' );


// MAIN //

/**
* Cumulatively tests whether at least `k` elements along one or more ndarray dimensions are truthy and assigns the results to a provided output ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|integer)} k - minimum number of truthy elements
* @param {ndarrayLike} out - output ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be either an ndarray-like object or an integer
* @throws {TypeError} third argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var BooleanArray = require( '@stdlib/array/bool' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 0.0, 1.0, 0.0, 4.0, 3.0, 0.0 ] );
* var ybuf = new BooleanArray( 6 );
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
* var y = new ndarray( 'bool', ybuf, shape, strides, offset, 'row-major' );
*
* // Perform operation:
* var out = assign( x, 2, y );
* // returns <ndarray>[ [ [ false, false ] ], [ [ false, true ] ], [ [ true, true ] ] ]
*
* var bool = ( out === y );
* // returns true
*/
function assign( x, k, out ) {
	var options;
	var nargs;
	var opts;
	var iflg;
	var ord;
	var sh;
	var v;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	// Resolve input ndarray meta data:
	ord = getOrder( x );

	// Initialize an options object:
	opts = {};

	// Initialize a flag indicating whether the `k` argument is a scalar:
	iflg = true;

	// Case: assign( x, k_ndarray, out, ... )
	if ( isndarrayLike( k ) ) {
		iflg = false;
	}
	// Case: assign( x, ???, out, ... )
	else if ( !isInteger( k ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or an integer. Value: `%s`.', k ) );
	}
	if ( !isndarrayLike( out ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be an ndarray. Value: `%s`.', out ) );
	}
	// Case: assign( x, k, out, options )
	if ( nargs > 3 ) {
		options = arguments[ 3 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		// Resolve provided options...
		if ( hasOwnProp( options, 'dims' ) ) {
			opts.dims = options.dims;
		}
	}
	// Resolve the shape of the non-core dimensions, noting that, when not provided `dims`, the operation is performed across all dimensions:
	if ( hasOwnProp( opts, 'dims' ) ) {
		sh = nonCoreShape( getShape( x ), opts.dims );
	} else {
		sh = [];
	}
	// Broadcast `k` to match the shape of the non-core dimensions, noting that, when not provided `dims`, `k` must be a zero-dimensional ndarray, as the operation is performed across all dimensions...
	if ( iflg ) {
		v = broadcastScalar( k, DEFAULT_DTYPE, sh, ord );
	} else if ( hasOwnProp( opts, 'dims' ) ) {
		v = maybeBroadcastArray( k, sh );
	} else if ( ndims( k ) === 0 ) {
		v = k;
	} else {
		throw new TypeError( 'invalid argument. Second argument must be a zero-dimensional ndarray.' );
	}
	return base( x, v, out, opts );
}


// EXPORTS //

module.exports = assign;
