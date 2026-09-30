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
var format = require( '@stdlib/string/format' );
var defaults = require( '@stdlib/ndarray/defaults' );
var base = require( './base.js' ).assign;


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.integer_index' );


// MAIN //

/**
* Returns the index of the first falsy element along an ndarray dimension and assigns the results to a provided output ndarray.
*
* ## Notes
*
* -   If unable to find a falsy element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
* -   The function explicitly treats `NaN` values as falsy.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|integer)} [fromIndex=0] - index from which to begin searching
* @param {ndarrayLike} out - output ndarray
* @param {Options} [options] - function options
* @param {integer} [options.dim=-1] - dimension over which to perform operation
* @throws {TypeError} function must be provided at least two arguments
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be either an ndarray-like object or an integer
* @throws {TypeError} output argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension index must not exceed input ndarray bounds
* @throws {RangeError} first argument must have at least one dimension
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var zeros = require( '@stdlib/ndarray/zeros' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 3.0, 0.0, 2.0, 0.0, 4.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 2, 3 ];
*
* // Define the array strides:
* var strides = [ 3, 1 ];
*
* // Define the index offset:
* var offset = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, shape, strides, offset, 'row-major' );
*
* // Create an output ndarray:
* var y = zeros( [ 2 ], {
*     'dtype': 'int32'
* });
*
* // Perform operation:
* var out = assign( x, y );
* // returns <ndarray>[ 2, 1 ]
*
* var bool = ( out === y );
* // returns true
*/
function assign( x, fromIndex, out ) {
	var hasOptions;
	var options;
	var nargs;
	var opts;
	var fidx;
	var iflg;
	var ord;
	var sh;
	var o;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	// Resolve input ndarray meta data:
	ord = getOrder( x );

	// Initialize an options object:
	opts = {
		'dims': [ -1 ] // default behavior is to perform a reduction over the last dimension
	};

	// Initialize the `fromIndex` to the first element along a dimension:
	fidx = 0;

	// Initialize a flag indicating whether the `fromIndex` argument is a scalar:
	iflg = true;

	// Initialize a flag indicating whether an `options` argument was provided:
	hasOptions = false;

	// Case: assign( x, out )
	if ( nargs <= 2 ) {
		o = fromIndex;
		if ( !isndarrayLike( o ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an ndarray. Value: `%s`.', o ) );
		}
	}
	// Case: assign( x, ???, ??? )
	else if ( nargs === 3 ) {
		// Case: assign( x, from_index, out )
		if ( isndarrayLike( out ) ) {
			o = out;

			// Case: assign( x, from_index_scalar, out )
			if ( isInteger( fromIndex ) ) {
				fidx = fromIndex;
			}
			// Case: assign( x, from_index_ndarray, out )
			else if ( isndarrayLike( fromIndex ) ) {
				fidx = fromIndex;
				iflg = false;
			}
			// Case: assign( x, ???, out )
			else {
				throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or an integer. Value: `%s`.', fromIndex ) );
			}
		}
		// Case: assign( x, out, options )
		else {
			o = fromIndex;
			if ( !isndarrayLike( o ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be an ndarray. Value: `%s`.', o ) );
			}
			options = out;
			hasOptions = true;
		}
	}
	// Case: assign( x, from_index, out, options )
	else { // nargs > 3
		// Case: assign( x, from_index_scalar, out, options )
		if ( isInteger( fromIndex ) ) {
			fidx = fromIndex;
		}
		// Case: assign( x, from_index_ndarray, out, options )
		else if ( isndarrayLike( fromIndex ) ) {
			fidx = fromIndex;
			iflg = false;
		}
		// Case: assign( x, ???, out, options )
		else {
			throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or an integer. Value: `%s`.', fromIndex ) );
		}
		o = out;
		if ( !isndarrayLike( o ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be an ndarray. Value: `%s`.', o ) );
		}
		options = arguments[ 3 ];
		hasOptions = true;
	}
	if ( hasOptions ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		// Resolve provided options...
		if ( hasOwnProp( options, 'dim' ) ) {
			opts.dims[ 0 ] = options.dim;
		}
	}
	// Resolve the list of non-reduced dimensions:
	sh = getShape( x );
	if ( sh.length < 1 ) {
		throw new RangeError( 'invalid argument. First argument must have at least one dimension.' );
	}
	sh = nonCoreShape( sh, opts.dims );

	// Broadcast the `fromIndex` to match the shape of the non-reduced dimensions...
	if ( iflg ) {
		fidx = broadcastScalar( fidx, DEFAULT_DTYPE, sh, ord );
	} else {
		fidx = maybeBroadcastArray( fidx, sh );
	}
	return base( x, fidx, o, opts );
}


// EXPORTS //

module.exports = assign;
