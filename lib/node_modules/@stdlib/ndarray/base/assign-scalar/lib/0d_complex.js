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

// MAIN //

/**
* Assigns a scalar value to every element of a reinterpreted complex number zero-dimensional output ndarray.
*
* @private
* @param {number} re - real component
* @param {number} im - imaginary component
* @param {Object} y - object containing output ndarray meta data
* @param {*} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a data buffer:
* var ybuf = new Float64Array( 2 );
*
* // Define the shape of the output array:
* var shape = [];
*
* // Define the array strides:
* var sy = [ 0 ];
*
* // Define the index offset:
* var oy = 0;
*
* // Create the output ndarray-like object:
* var y = {
*     'dtype': 'float64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Assign scalar:
* assign0d( 2.0, 2.0, y );
*
* console.log( y.data );
* // => <Float64Array>[ 2.0, 2.0 ]
*/
function assign0d( re, im, y ) {
	y.data[ y.offset ] = re;
	y.data[ y.offset+1 ] = im;
}


// EXPORTS //

module.exports = assign0d;
