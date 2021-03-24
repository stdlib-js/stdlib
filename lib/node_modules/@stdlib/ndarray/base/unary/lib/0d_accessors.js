/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Applies a unary callback to elements in a zero-dimensional input ndarray and assigns results to elements in an equivalently shaped output ndarray.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Function} x.getter - callback for accessing `x` data buffer elements
* @param {Object} y - object containing output ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Function} y.setter - callback for setting `y` data buffer elements
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* function scale( z ) {
*     return new Complex64( real(z)*10.0, imag(z)*10.0 );
* }
*
* // Create data buffers:
* var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var ybuf = new Complex64Array( 2 );
*
* // Define the shape of the input and output arrays:
* var shape = [];
*
* // Define the array strides:
* var sx = [ 0 ];
* var sy = [ 0 ];
*
* // Define the index offsets:
* var ox = 1;
* var oy = 0;
*
* // Define getters and setters:
* function getter( buf, idx ) {
*     return buf.get( idx );
* }
*
* function setter( buf, idx, value ) {
*     buf.set( value, idx );
* }
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'dtype': 'complex64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'getter': getter
* };
* var y = {
*     'dtype': 'complex64',
*     'data': ybuf,
*     'shape': shape,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'setter': setter
* };
*
* // Apply the unary function:
* unary0d( x, y, scale );
*
* var v = y.data.get( 0 );
*
* var re = real( v );
* // returns 30.0
*
* var im = imag( v );
* // returns 40.0
*/
function unary0d( x, y, fcn ) {
	y.setter( y.data, y.offset, fcn( x.getter( x.data, x.offset ) ) );
}


// EXPORTS //

module.exports = unary0d;
