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

// MAIN //

/**
* Applies a one-dimensional strided array function to a list of specified dimensions in an input ndarray and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - wrapper for a one-dimensional strided array function
* @param {Array<Object>} arrays - ndarrays
* @param {Object} strategyX - strategy for marshaling data to and from an input ndarray view
* @param {Object} strategyY - strategy for marshaling data to and from an output ndarray view
* @param {Options} opts - function options
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var getStride = require( '@stdlib/ndarray/base/stride' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var getData = require( '@stdlib/ndarray/base/data-buffer' );
* var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
* var gcusum = require( '@stdlib/blas/ext/base/gcusum' ).ndarray;
*
* function wrapper( arrays ) {
*     var x = arrays[ 0 ];
*     var y = arrays[ 1 ];
*     var s = arrays[ 2 ];
*     return gcusum( numelDimension( x, 0 ), getData( s )[ getOffset( s ) ], getData( x ), getStride( x, 0 ), getOffset( x ), getData( y ), getStride( y, 0 ), getOffset( y ) );
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* // Define the array shapes:
* var xsh = [ 2, 2 ];
* var ysh = [ 2, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 1 ];
* var sy = [ 2, 1 ];
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
* // Create an ndarray-like object for the initial sum:
* var initial = {
*     'dtype': 'float64',
*     'data': new Float64Array( [ 0.0 ] ),
*     'shape': [ 3 ],
*     'strides': [ 0 ],
*     'offset': 0,
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
* // Apply strided function:
* unary0d( wrapper, [ x, y, initial ], strategy, strategy, {} );
*
* var v = y.data;
* // returns <Float64Array>[ 1.0, 3.0, 6.0, 10.0 ]
*/
function unary0d( fcn, arrays, strategyX, strategyY, opts ) {
	arrays[ 0 ] = strategyX.input( arrays[ 0 ] );
	arrays[ 1 ] = strategyY.input( arrays[ 1 ] );
	fcn( arrays, opts );
	strategyY.output( arrays[ 1 ] );
}


// EXPORTS //

module.exports = unary0d;
