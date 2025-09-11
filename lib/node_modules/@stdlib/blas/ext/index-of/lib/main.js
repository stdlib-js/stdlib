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
var base = require( './base.js' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.integer_index' );


// MAIN //

/**
* Returns the first index of a specified search element along an ndarray dimension.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|*)} searchElement - search element
* @param {(ndarrayLike|integer)} [fromIndex=0] - index from which to begin searching
* @param {Options} [options] - function options
* @param {integer} [options.dim=-1] - dimension over which to perform operation
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {string} [options.dtype] - output ndarray data type
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be either an ndarray-like object or a scalar value
* @throws {TypeError} third argument must be either an ndarray-like object or an integer
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension index must not exceed input ndarray bounds
* @throws {RangeError} first argument must have at least one dimension
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
* var sh = [ 2, 3 ];
*
* // Define the array strides:
* var sx = [ 3, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform operation:
* var out = indexOf( x, -5.0 );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ -1, 1 ]
*/
function indexOf( x, searchElement, fromIndex ) {
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

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( nargs < 2 ) {
		throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or a scalar value. Value: `%s`.', searchElement ) );
	}
	// Resolve input ndarray meta data:
	dt = getDType( x );
	ord = getOrder( x );

	// Initialize an options object:
	opts = {
		'dims': [ -1 ], // default behavior is to perform a reduction over the last dimension
		'keepdims': false
	};

	// Initialize the `fromIndex` to the first element along a dimension:
	fidx = 0;

	// Initialize a flag indicating whether the `fromIndex` argument is a scalar:
	iflg = true;

	// Initialize a flag indicating whether an `options` argument was provided:
	hasOptions = false;

	// Case: indexOf( x, search_element, ??? )
	if ( nargs === 3 ) {
		// Case: indexOf( x, search_element, from_index_scalar )
		if ( isInteger( fromIndex ) ) {
			fidx = fromIndex;
		}
		// Case: indexOf( x, search_element, from_index_ndarray )
		else if ( isndarrayLike( fromIndex ) ) {
			fidx = fromIndex;
			iflg = false;
		}
		// Case: indexOf( x, search_element, options )
		else {
			options = fromIndex;
			hasOptions = true;
		}
	}
	// Case: indexOf( x, search_element, from_index, options )
	else if ( nargs > 3 ) {
		// Case: indexOf( x, search_element, from_index_scalar, options )
		if ( isInteger( fromIndex ) ) {
			fidx = fromIndex;
		}
		// Case: indexOf( x, search_element, from_index_ndarray, options )
		else if ( isndarrayLike( fromIndex ) ) {
			fidx = fromIndex;
			iflg = false;
		}
		// Case: indexOf( x, search_element, ???, options )
		else {
			throw new TypeError( format( 'invalid argument. Third argument must be either an ndarray or an integer. Value: `%s`.', fromIndex ) );
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
		if ( hasOwnProp( options, 'keepdims' ) ) {
			opts.keepdims = options.keepdims;
		}
		if ( hasOwnProp( options, 'dtype' ) ) {
			opts.dtype = options.dtype;
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
	return base( x, v, fidx, opts );
}


// EXPORTS //

module.exports = indexOf;
