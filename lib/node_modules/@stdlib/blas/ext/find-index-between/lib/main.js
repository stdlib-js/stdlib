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
var isFunction = require( '@stdlib/assert/is-function' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var nonCoreShape = require( '@stdlib/ndarray/base/complement-shape' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var ndims = require( '@stdlib/ndarray/ndims' );
var format = require( '@stdlib/string/format' );
var broadcastIndex = require( './broadcast_index.js' );
var base = require( './base.js' );


// MAIN //

/**
* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function within a specified range.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|integer)} fromIndex - index from which to begin searching
* @param {(ndarrayLike|integer)} toIndex - index at which to stop searching (exclusive)
* @param {Options} [options] - function options
* @param {integer} [options.dim=-1] - dimension over which to perform operation
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {*} [options.dtype] - output ndarray data type
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} `fromIndex` argument must be either an ndarray-like object or an integer
* @throws {TypeError} `toIndex` argument must be either an ndarray-like object or an integer
* @throws {RangeError} dimension index must not exceed input ndarray bounds
* @throws {RangeError} first argument must have at least one dimension
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* // Create a data buffer:
* var xbuf = [ 2.0, 1.0, 3.0, 4.0, 5.0, 6.0 ];
*
* // Define the shape of the input array:
* var sh = [ 6 ];
*
* // Define the array strides:
* var sx = [ 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'generic', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform operation:
* var out = findIndexBetween( x, 1, 4, isEven );
* // returns <ndarray>[ 3 ]
*/
function findIndexBetween( x, fromIndex, toIndex ) {
	var hasOptions;
	var options;
	var nargs;
	var opts;
	var ord;
	var ctx;
	var sh;
	var cb;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	if ( !isInteger( fromIndex ) && !isndarrayLike( fromIndex ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray or an integer. Value: `%s`.', fromIndex ) );
	}
	if ( !isInteger( toIndex ) && !isndarrayLike( toIndex ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be either an ndarray or an integer. Value: `%s`.', toIndex ) );
	}
	// Resolve input ndarray meta data:
	ord = getOrder( x );

	// Initialize an options object:
	opts = {
		'dims': [ -1 ], // default behavior is to perform a reduction over the last dimension
		'keepdims': false
	};

	// Initialize a flag indicating whether an `options` argument was provided:
	hasOptions = false;

	// Case: findIndexBetween( x, fromIndex, toIndex, clbk )
	if ( nargs === 4 ) {
		cb = arguments[ 3 ];
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Fourth argument must be a function. Value: `%s`.', cb ) );
		}
	}
	// Case: findIndexBetween( x, fromIndex, toIndex, ???, ??? )
	else if ( nargs === 5 ) {
		// Case: findIndexBetween( x, fromIndex, toIndex, clbk, thisArg )
		if ( isFunction( arguments[ 3 ] ) ) {
			cb = arguments[ 3 ];
			ctx = arguments[ 4 ];
		}
		// Case: findIndexBetween( x, fromIndex, toIndex, options, clbk )
		else {
			options = arguments[ 3 ];
			hasOptions = true;
			cb = arguments[ 4 ];
			if ( !isFunction( cb ) ) {
				throw new TypeError( format( 'invalid argument. Fifth argument must be a function. Value: `%s`.', cb ) );
			}
		}
	}
	// Case: findIndexBetween( x, fromIndex, toIndex, options, clbk, thisArg )
	else {
		options = arguments[ 3 ];
		hasOptions = true;
		cb = arguments[ 4 ];
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Fifth argument must be a function. Value: `%s`.', cb ) );
		}
		ctx = arguments[ 5 ];
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
	if ( ndims( x ) < 1 ) {
		throw new RangeError( 'invalid argument. First argument must have at least one dimension.' );
	}
	// Resolve the list of non-reduced dimensions:
	sh = getShape( x );
	sh = nonCoreShape( sh, opts.dims );

	// Broadcast the indices to match the shape of the non-reduced dimensions...
	return base( x, broadcastIndex( fromIndex, sh, ord ), broadcastIndex( toIndex, sh, ord ), opts, cb, ctx ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = findIndexBetween;
