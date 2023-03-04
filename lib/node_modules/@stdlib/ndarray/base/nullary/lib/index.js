/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Apply a nullary function and assign results to elements in an output ndarray.
*
* @module @stdlib/ndarray/base/nullary
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var nullary = require( '@stdlib/ndarray/base/nullary' );
*
* function fcn() {
*     return 10.0;
* }
*
* // Create a data buffer:
* var xbuf = new Float64Array( 12 );
*
* // Define the shape of the output array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the ioutput ndarray-like objects:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Apply the nullary function:
* nullary( [ x ], fcn );
*
* console.log( x.data );
* // => <Float64Array>[ 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
