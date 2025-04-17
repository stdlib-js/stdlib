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

var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );


// MAIN //

/**
* Performs a reduction over an input ndarray and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {IntegerArray} strides - loop dimension strides for the input ndarray
* @param {Function} strategy - input ndarray reshape strategy
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var gsum = require( '@stdlib/blas/ext/base/gsum' ).ndarray;
*
* function wrapper( arrays ) {
*     var x = arrays[ 0 ];
*     return gsum( numelDimension( x, 0 ), getData( x ), getStride( x, 0 ), getOffset( x ) );
* }
*
* // Create data buffers:
* var xbuf = toAccessorArray( new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ) );
* var ybuf = toAccessorArray( new Float64Array( [ 0.0, 0.0, 0.0 ] ) );
*
* // Define the array shapes:
* var xsh = [ 3, 2, 2 ];
* var ysh = [ 3 ];
*
* // Define the array strides:
* var sx = [ 4, 2, 1 ];
* var sy = [ 1 ];
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
*     'order': 'row-major',
*     'accessors': accessors( xbuf ).accessors
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': accessors( ybuf ).accessors
* };
*
* // Initialize ndarray-like objects representing sub-array views:
* var views = [
*     {
*         'dtype': x.dtype,
*         'data': x.data,
*         'shape': [ 2, 2 ],
*         'strides': [ 2, 1 ],
*         'offset': x.offset,
*         'order': x.order
*     }
* ];
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
* // Perform a reduction:
* unary1d( wrapper, [ x, y ], views, [ 4 ], strategy, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ 10.0, 26.0, 42.0 ]
*/
function unary1d( fcn, arrays, views, strides, strategy, opts ) {
	var ybuf;
	var set;
	var dv0;
	var sh;
	var S0;
	var iv;
	var i0;
	var y;
	var i;

	// Note on variable naming convention: S#, dv#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Resolve the output ndarray and associated shape:
	y = arrays[ 1 ];
	sh = y.shape;

	// Extract loop variables: dimensions and loop offset (pointer) increments...
	S0 = sh[ 0 ];
	dv0 = [ strides[0] ];
	for ( i = 1; i < arrays.length; i++ ) {
		dv0.push( arrays[i].strides[0] );
	}
	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	iv = offsets( arrays );

	// Cache a reference to the output ndarray buffer:
	ybuf = y.data;

	// Cache accessors:
	set = y.accessors[ 1 ];

	// Iterate over the non-reduced ndarray dimensions...
	for ( i0 = 0; i0 < S0; i0++ ) {
		setViewOffsets( views, iv );
		views[ 0 ] = strategy( views[ 0 ] );
		set( ybuf, iv[1], fcn( views, opts ) );
		incrementOffsets( iv, dv0 );
	}
}


// EXPORTS //

module.exports = unary1d;
