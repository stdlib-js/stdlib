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

var copyIndexed = require( '@stdlib/array/base/copy-indexed' );
var incrementOffsets = require( './increment_offsets.js' );
var setViewOffsets = require( './set_view_offsets.js' );
var offsets = require( './offsets.js' );


// MAIN //

/**
* Performs a reduction over a list of specified dimensions in two input ndarrays and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Array<Object>} views - initialized ndarray-like objects representing sub-array views
* @param {IntegerArray} stridesX - loop dimension strides for the first input ndarray
* @param {IntegerArray} stridesY - loop dimension strides for the second input ndarray
* @param {Function} strategyX - first input ndarray reshape strategy
* @param {Function} strategyY - second input ndarray reshape strategy
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var zbuf = new Float64Array( [ 0.0, 0.0, 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 3, 2, 2 ];
* var ysh = [ 3, 2, 2 ];
* var zsh = [ 3 ];
*
* // Define the array strides:
* var sx = [ 4, 2, 1 ];
* var sy = [ 4, 2, 1 ];
* var sz = [ 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
*
* // Create input ndarray-like objects:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var z = {
*     'dtype': 'float64',
*     'data': zbuf,
*     'shape': zsh,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major'
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
*     },
*     {
*         'dtype': y.dtype,
*         'data': y.data,
*         'shape': [ 2, 2 ],
*         'strides': [ 2, 1 ],
*         'offset': y.offset,
*         'order': y.order
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
* binary1d( gdot, [ x, y, z ], views, [ 4 ], [ 4 ], strategy, strategy, {} );
*
* var arr = ndarray2array( z.data, z.shape, z.strides, z.offset, z.order );
* // returns [ 30.0, 174.0, 446.0 ]
*/
function binary1d( fcn, arrays, views, stridesX, stridesY, strategyX, strategyY, opts ) {
	var zbuf;
	var dv0;
	var sh;
	var S0;
	var iv;
	var i0;
	var z;
	var v;
	var i;

	// Note on variable naming convention: S#, dv#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Resolve the output ndarray and associated shape:
	z = arrays[ 2 ];
	sh = z.shape;

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	S0 = sh[ 0 ];
	dv0 = [
		stridesX[0],
		stridesY[0]
	];
	for ( i = 2; i < arrays.length; i++ ) {
		dv0.push( arrays[i].strides[0] );
	}
	// Resolve a list of pointers to the first indexed elements in the respective ndarrays:
	iv = offsets( arrays );

	// Shallow copy the list of views to an internal array so that we can update with reshaped views without impacting the original list of views:
	v = copyIndexed( views );

	// Cache a reference to the output ndarray buffer:
	zbuf = z.data;

	// Iterate over the non-reduced ndarray dimensions...
	for ( i0 = 0; i0 < S0; i0++ ) {
		setViewOffsets( views, iv );
		v[ 0 ] = strategyX( views[ 0 ] );
		v[ 1 ] = strategyY( views[ 1 ] );
		zbuf[ iv[2] ] = fcn( v, opts );
		incrementOffsets( iv, dv0 );
	}
}


// EXPORTS //

module.exports = binary1d;
