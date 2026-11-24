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

/* eslint-disable max-len */

'use strict';

// MODULES //

var without = require( '@stdlib/array/base/without' );
var wrap = require( './callback_wrapper.js' );


// MAIN //

/**
* Performs a reduction over a list of specified dimensions in an input ndarray according to a callback function and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Function} strategy - input ndarray reshape strategy
* @param {NonNegativeIntegerArray} ibuf - workspace for storing iteration indices
* @param {NonNegativeIntegerArray} ldims - list of loop dimensions
* @param {NonNegativeIntegerArray} cdims - list of "core" dimensions
* @param {Options} opts - function options
* @param {boolean} hasOpts - boolean indicating whether to pass an options argument to a reduction function
* @param {Function} clbk - callback function
* @param {thisArg} thisArg - callback execution context
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var zeros = require( '@stdlib/array/base/zeros' );
* var maxBy = require( '@stdlib/stats/base/ndarray/max-by' );
*
* function clbk( value ) {
*    return value * 2.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var ybuf = new Float64Array( [ 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 2, 2 ];
* var ysh = [];
*
* // Define the array strides:
* var sx = [ 2, 1 ];
* var sy = [ 0 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Define a reshape strategy:
* function strategy( x ) {
*     return {
*         'dtype': x.dtype,
*         'data': x.data,
*         'shape': [ 4 ],
*         'strides': [ 1 ],
*         'offset': x.offset,
*         'order': x.order
*     };
* }
*
* // Create a workspace array for storing iteration indices:
* var ibuf = zeros( xsh.length );
*
* // Define the loop and core dimensions:
* var ldims = [];
* var cdims = [ 0, 1 ];
*
* // Perform a reduction:
* unary0d( maxBy, [ x, y ], strategy, ibuf, ldims, cdims, {}, false, clbk, {} );
*
* var v = y.data;
* // returns <Float64Array>[ 8.0 ]
*/
function unary0d( fcn, arrays, strategy, ibuf, ldims, cdims, opts, hasOpts, clbk, thisArg ) {
	var arr;
	var x;
	var y;
	var f;

	x = arrays[ 0 ];
	y = arrays[ 1 ];

	f = wrap( x.ref, x, ibuf, ldims, [], cdims, clbk, thisArg );

	arr = without( arrays, 1 );
	arr[ 0 ] = strategy( x );

	y.data[ y.offset ] = ( hasOpts ) ? fcn( arr, opts, f ) : fcn( arr, f );
}


// EXPORTS //

module.exports = unary0d;
