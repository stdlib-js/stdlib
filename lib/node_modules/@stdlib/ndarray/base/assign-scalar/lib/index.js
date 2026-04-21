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

/**
* Assign a scalar value to every element of an output ndarray.
*
* @module @stdlib/ndarray/base/assign-scalar
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var Float64Array = require( '@stdlib/array/float64' );
* var assignScalar = require( '@stdlib/ndarray/base/assign-scalar' );
*
* // Create a zero-dimensional ndarray containing the scalar value:
* var x = scalar2ndarray( 5.0, {
*     'dtype': 'float64'
* });
*
* // Create a data buffer:
* var ybuf = new Float64Array( 12 );
*
* // Define the shape of the output array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sy = [ 4, 4, 1 ];
*
* // Define the index offset:
* var oy = 1;
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
* // Assign the scalar value:
* assignScalar( [ x, y ] );
*
* console.log( y.data );
* // => <Float64Array>[ 0.0, 5.0, 5.0, 0.0, 0.0, 5.0, 5.0, 0.0, 0.0, 5.0, 5.0, 0.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
