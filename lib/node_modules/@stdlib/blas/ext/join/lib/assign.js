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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var nonCoreShape = require( '@stdlib/ndarray/base/complement-shape' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' ).assign;


// MAIN //

/**
* Joins elements of an input ndarray using a separator along one or more ndarray dimensions and assigns the results to a provided output ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {ndarrayLike} out - output ndarray
* @param {Options} [options] - function options
* @param {(ndarrayLike|*)} [options.sep=','] - separator
* @param {integer} [options.dims] - list of dimensions over which to perform operation
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
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
* var y = scalar2ndarray( '', {
*     'dtype': 'generic'
* });
*
* // Perform operation:
* var out = assign( x, y );
* // returns <ndarray>[ '1,2,3,4,5,6' ]
*
* var bool = ( out === y );
* // returns true
*/
function assign( x, out, options ) {
	var nargs;
	var opts;
	var sh;
	var s;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', x ) );
	}
	if ( !isndarrayLike( out ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an ndarray-like object. Value: `%s`.', out ) );
	}
	// Initialize the separator:
	s = ',';

	// Initialize an options object:
	opts = {};

	if ( nargs > 2 ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		// Resolve provided options...
		if ( hasOwnProp( options, 'sep' ) ) {
			s = options.sep;
		}
		if ( hasOwnProp( options, 'dims' ) ) {
			opts.dims = options.dims;
		}
	}
	// Broadcast the separator to match the shape of the non-reduced dimensions...
	if ( isndarrayLike( s ) ) {
		// When not provided `dims`, the operation is performed across all dimensions and `s` is assumed to be a zero-dimensional ndarray; when `dims` is provided, we need to broadcast `s` to match the shape of the non-core dimensions...
		if ( hasOwnProp( opts, 'dims' ) ) {
			s = maybeBroadcastArray( s, nonCoreShape( getShape( x ), opts.dims ) ); // eslint-disable-line max-len
		}
	} else {
		if ( hasOwnProp( opts, 'dims' ) ) {
			sh = nonCoreShape( getShape( x ), opts.dims );
		} else {
			sh = [];
		}
		s = broadcastScalar( s, 'generic', sh, getOrder( x ) );
	}
	return base( x, s, out, opts );
}


// EXPORTS //

module.exports = assign;
