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

var kernel2d = require( './2d.js' );
var kernel3d = require( './3d.js' );
var kernel4d = require( './4d.js' );
var kernel5d = require( './5d.js' );
var kernel6d = require( './6d.js' );
var kernel7d = require( './7d.js' );
var kernel8d = require( './8d.js' );
var kernel9d = require( './9d.js' );
var kernel10d = require( './10d.js' );


// VARIABLES //

var KERNELS = [
	kernel2d, // 0
	kernel3d,
	kernel4d,
	kernel5d,
	kernel6d,
	kernel7d,
	kernel8d,
	kernel9d,
	kernel10d // 8
];
var MAX_DIMS = KERNELS.length + 2;


// MAIN //

/**
* Returns a kernel for applying a one-dimensional strided array function to an input ndarray and assigning results to an output ndarray using loop blocking.
*
* @param {integer} ndims - number of loop dimensions
* @returns {(Function|null)} kernel function or null
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var gcusum = require( '@stdlib/blas/ext/base/ndarray/gcusum' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 12, 4, 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray descriptor:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an ndarray descriptor for the initial sum:
* var initial = {
*     'dtype': 'float64',
*     'data': new Float64Array( [ 0.0 ] ),
*     'shape': [ 1, 3 ],
*     'strides': [ 0, 0 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* // Create an output ndarray descriptor:
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Initialize ndarray descriptors representing sub-array views:
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
*     },
*     {
*         'dtype': initial.dtype,
*         'data': initial.data,
*         'shape': [],
*         'strides': [ 0 ],
*         'offset': initial.offset,
*         'order': initial.order
*     }
* ];
*
* // Define an input strategy:
* function inputStrategy( x ) {
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
* // Define an output strategy:
* function outputStrategy( x ) {
*     return x;
* }
*
* var strategy = {
*     'input': inputStrategy,
*     'output': outputStrategy
* };
*
* // Resolve a kernel:
* var kernel = resolveKernel( 2 );
*
* // Apply strided function:
* kernel( gcusum, [ x, y, initial ], views, [ 1, 3 ], [ 12, 4 ], [ 12, 4 ], strategy, strategy, {} );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ [ [ 1.0, 3.0 ], [ 6.0, 10.0 ] ], [ [ 5.0, 11.0 ], [ 18.0, 26.0 ] ], [ [ 9.0, 19.0 ], [ 30.0, 42.0 ] ] ] ]
*/
function resolveKernel( ndims ) {
	if ( ndims < 2 || ndims > MAX_DIMS ) {
		return null;
	}
	return KERNELS[ ndims-2 ];
}


// EXPORTS //

module.exports = resolveKernel;
