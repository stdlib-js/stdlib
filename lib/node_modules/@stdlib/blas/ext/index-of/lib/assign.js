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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var format = require( '@stdlib/string/format' );
var defaults = require( '@stdlib/ndarray/defaults' );
var nonCoreShape = require( './non_core_shape.js' );
var base = require( './base.js' ).assign;


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.integer_index' );


// MAIN //

/**
* Returns the first index of a specified search element along an ndarray dimension and assigns the results to a provided output ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|*)} searchElement - search element
* @param {(ndarrayLike|integer)} [fromIndex] - index from which to begin searching
* @param {ndarrayLike} out - output ndarray
* @param {Options} [options] - function options
* @param {integer} [options.dim=-1] - dimension over which to perform operation
* @throws {TypeError} function must be provided at least three arguments
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} third argument must be either an ndarray-like object or an integer
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ] );
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
* var out = assign( x, -5.0, y );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* var arr = ndarray2array( out );
* // returns [ -1, 1 ]
*/
function assign( x, searchElement, fromIndex, out ) {
	var hasOptions;
	var options;
	var nargs;
	var opts;
	var fidx;
	var iflg;
	var ord;
	var dt;
	var sh;
	var v;
	var o;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. The first argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( nargs < 2 ) {
		throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or a scalar value. Value: `%s`.', searchElement ) );
	}
	if ( nargs < 3 ) {
		throw new TypeError( format( 'invalid argument. Third argument must be an ndarray. Value: `%s`.', fromIndex ) );
	}
	// Resolve input ndarray meta data:
	dt = getDType( x );
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

	// Case: assign( x, search_element, out )
	if ( nargs === 3 ) {
		o = fromIndex;
	}
	// Case: assign( x, search_element, ???, ??? )
	else if ( nargs === 4 ) {
		// Case: assign( x, search_element, from_index, out )
		if ( isndarrayLike( out ) ) {
			o = out;

			// Case: assign( x, search_element, from_index_scalar, out )
			if ( isInteger( fromIndex ) ) {
				fidx = fromIndex;
			}
			// Case: assign( x, search_element, from_index_ndarray, out )
			else if ( isndarrayLike( fromIndex ) ) {
				fidx = fromIndex;
				iflg = false;
			}
			// Case: assign( x, search_element, ???, out )
			else {
				throw new TypeError( format( 'invalid argument. Third argument must be either an ndarray or an integer. Value: `%s`.', fromIndex ) );
			}
		}
		// Case: assign( x, search_element, out, options )
		else {
			o = fromIndex;
			options = out;
			hasOptions = true;
		}
	}
	// Case: assign( x, search_element, from_index, out, options )
	else { // nargs > 4
		// Case: assign( x, search_element, from_index_scalar, out, options )
		if ( isInteger( fromIndex ) ) {
			fidx = fromIndex;
		}
		// Case: assign( x, search_element, from_index_ndarray, out, options )
		else if ( isndarrayLike( fromIndex ) ) {
			fidx = fromIndex;
			iflg = false;
		}
		// Case: assign( x, search_element, ???, out, options )
		else {
			throw new TypeError( format( 'invalid argument. Third argument must be either an ndarray or an integer. Value: `%s`.', fromIndex ) );
		}
		o = out;
		options = arguments[ 4 ];
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

	// Broadcast the search element to match the shape of the non-reduced dimensions...
	if ( isndarrayLike( searchElement ) ) {
		v = maybeBroadcastArray( searchElement, sh );
	} else {
		v = broadcastScalar( searchElement, dt, sh, ord ); // WARNING: potential for undesired value casting (e.g., if `searchElement` is `null` and cast to `float64`, the broadcasted scalar will be `0`, not `null`!)
	}
	// Broadcast the `fromIndex` to match the shape of the non-reduced dimensions...
	if ( iflg ) {
		fidx = broadcastScalar( fidx, DEFAULT_DTYPE, sh, ord );
	} else {
		fidx = maybeBroadcastArray( fidx, sh );
	}
	return base( x, v, fidx, o, opts );
}


// EXPORTS //

module.exports = assign;
