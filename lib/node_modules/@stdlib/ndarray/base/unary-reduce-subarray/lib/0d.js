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
* Performs a reduction over a list of specified dimensions in an input ndarray and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var filled = require( '@stdlib/array/base/filled' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var base = require( '@stdlib/ndarray/base/every' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = filled( false, 1 );
*
* // Define the array shapes:
* var xsh = [ 2, 2 ];
* var ysh = [];
*
* // Define the array strides:
* var sx = [ 6, 1 ];
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
*     'dtype': 'generic',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* unary0d( base, [ x, y ], {} );
*
* var v = y.data;
* // returns [ true ]
*/
function unary0d( fcn, arrays, opts ) {
	arrays[1].data[ arrays[1].offset ] = fcn( without( arrays, 1 ), opts );
}


// EXPORTS //

module.exports = unary0d;
