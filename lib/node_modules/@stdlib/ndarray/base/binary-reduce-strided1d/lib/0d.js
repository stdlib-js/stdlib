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

var without = require( '@stdlib/array/base/without' );


// MAIN //

/**
* Performs a reduction over a list of specified dimensions in two input ndarrays and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Function} strategyX - first input ndarray reshape strategy
* @param {Function} strategyY - second input ndarray reshape strategy
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var zbuf = new Float64Array( [ 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 2, 2 ];
* var ysh = [ 2, 2 ];
* var zsh = [];
*
* // Define the array strides:
* var sx = [ 2, 1 ];
* var sy = [ 2, 1 ];
* var sz = [ 0 ];
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
* binary0d( gdot, [ x, y, z ], strategy, strategy, {} );
*
* var v = z.data;
* // returns <Float64Array>[ 30.0 ]
*/
function binary0d( fcn, arrays, strategyX, strategyY, opts ) {
	arrays[ 0 ] = strategyX( arrays[ 0 ] );
	arrays[ 1 ] = strategyY( arrays[ 1 ] );
	arrays[ 2 ].data[ arrays[ 2 ].offset ] = fcn( without( arrays, 2 ), opts );
}


// EXPORTS //

module.exports = binary0d;
