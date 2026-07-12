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

var isFunction = require( '@stdlib/assert/is-function' );
var mainFactory = require( './main_factory.js' );
var main = require( './main.js' );


// MAIN //

/**
* Return a function for applying a one-dimensional strided array function to a list of specified dimensions in an ndarray.
*
* @param {Function} [fcn] - wrapper for a one-dimensional strided array function
* @param {Options} [options] - function options
* @param {boolean} [options.strictTraversalOrder=false] - boolean specifying whether to require that element traversal match the memory layout of the target ndarray
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function for applying a strided array function
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
* var gsorthp = require( '@stdlib/blas/ext/base/gsorthp' ).ndarray;
*
* function wrapper( arrays ) {
*     var x = arrays[ 0 ];
*     var o = arrays[ 1 ];
*     return gsorthp( numelDimension( x, 0 ), ndarraylike2scalar( o ), getData( x ), getStride( x, 0 ), getOffset( x ) );
* }
*
* // Create a data buffer:
* var xbuf = [ 12.0, 11.0, 10.0, 9.0, 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ];
*
* // Define an array shape:
* var xsh = [ 1, 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an ndarray-like object:
* var x = {
*     'dtype': 'generic',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an ndarray-like object for the sort order:
* var sortOrder = {
*     'dtype': 'generic',
*     'data': [ 1.0 ],
*     'shape': [ 1, 3 ],
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Create a function for applying a strided function:
* var sorthp = factory( wrapper );
* // returns <Function>
*
* // Apply strided function:
* sorthp( [ x, sortOrder ], [ 2, 3 ] );
*
* var arr = ndarray2array( x.data, x.shape, x.strides, x.offset, x.order );
* // returns [ [ [ [ 9.0, 10.0 ], [ 11.0, 12.0 ] ], [ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ], [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ]
*/
function factory() {
	var nullary;
	var nargs;
	var fcn;
	var f;

	nargs = arguments.length;

	// Case: factory()
	if ( nargs === 0 ) {
		nullary = main;
		f = wrap;
	}
	// Case: factory( fcn, opts )
	else if ( nargs > 1 ) {
		nullary = mainFactory( arguments[ 1 ] );
		fcn = arguments[ 0 ];
		f = apply;
	}
	// Case: factory( fcn )
	else if ( isFunction( arguments[ 0 ] ) ) {
		nullary = main;
		fcn = arguments[ 0 ];
		f = apply;
	}
	// Case: factory( opts )
	else {
		nullary = mainFactory( arguments[ 0 ] );
		f = wrap;
	}
	return f;

	/**
	* Applies a one-dimensional strided array function to a list of specified dimensions in an ndarray.
	*
	* @private
	* @param {ArrayLikeObject<Object>} arrays - array-like object containing ndarrays
	* @param {IntegerArray} dims - list of dimensions to which to apply a strided array function
	* @param {Options} [options] - function options
	* @returns {void}
	*/
	function apply( arrays, dims, options ) {
		var opts;
		if ( arguments.length > 2 ) {
			opts = options;
		} else {
			opts = {};
		}
		return nullary( fcn, arrays, dims, opts );
	}

	/**
	* Applies a one-dimensional strided array function to a list of specified dimensions in an ndarray.
	*
	* @private
	* @param {Function} fcn - wrapper for a one-dimensional strided array function
	* @param {ArrayLikeObject<Object>} arrays - array-like object containing ndarrays
	* @param {IntegerArray} dims - list of dimensions to which to apply a strided array function
	* @param {Options} [options] - function options
	* @returns {void}
	*/
	function wrap( fcn, arrays, dims, options ) {
		var opts;
		if ( arguments.length > 3 ) {
			opts = options;
		} else {
			opts = {};
		}
		return nullary( fcn, arrays, dims, opts );
	}
}


// EXPORTS //

module.exports = factory;
