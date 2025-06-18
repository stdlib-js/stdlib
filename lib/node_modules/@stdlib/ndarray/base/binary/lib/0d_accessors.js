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
* Applies a binary callback to elements in zero-dimensional input ndarrays and assigns results to elements in an equivalently shaped output ndarray.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - data buffer accessors
* @param {Object} y - object containing input ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} y.accessors - data buffer accessors
* @param {Object} z - object containing output ndarray meta data
* @param {string} z.dtype - data type
* @param {Collection} z.data - data buffer
* @param {NonNegativeIntegerArray} z.shape - dimensions
* @param {IntegerArray} z.strides - stride lengths
* @param {NonNegativeInteger} z.offset - index offset
* @param {string} z.order - specifies whether `z` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} z.accessors - data buffer accessors
* @param {Callback} fcn - binary callback
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
*
* function fcn( x, y ) {
*     return x + y;
* }
*
* // Create data buffers:
* var xbuf = toAccessorArray( [ 1.0 ] );
* var ybuf = toAccessorArray( [ 2.0 ] );
* var zbuf = toAccessorArray( [ 0.0 ] );
*
* // Define the shape of the input and output arrays:
* var shape = [];
*
* // Define the array strides:
* var sx = [ 0 ];
* var sy = [ 0 ];
* var sz = [ 0 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'dtype': 'generic',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': accessors( xbuf ).accessors
* };
* var y = {
*     'dtype': 'generic',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': accessors( ybuf ).accessors
* };
* var z = {
*     'dtype': 'generic',
*     'data': zbuf,
*     'shape': shape,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major',
*     'accessors': accessors( zbuf ).accessors
* };
*
* // Apply the binary function:
* binary0d( x, y, z, fcn );
*
* var v = z.data.get( 0 );
* // returns 3.0
*/
function binary0d( x, y, z, fcn ) {
	z.accessors[ 1 ]( z.data, z.offset, fcn( x.accessors[ 0 ]( x.data, x.offset ), y.accessors[ 0 ]( y.data, y.offset ) ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = binary0d;
