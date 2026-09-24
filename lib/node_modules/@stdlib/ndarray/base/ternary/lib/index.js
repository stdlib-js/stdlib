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
* Apply a ternary callback to elements in input ndarrays and assign results to elements in an output ndarray.
*
* @module @stdlib/ndarray/base/ternary
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
* var ternary = require( '@stdlib/ndarray/base/ternary' );
*
* function fcn( a, b, c ) {
*     return a + b + c;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var zbuf = new Float64Array( [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ] );
* var wbuf = new Float64Array( 6 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
* var sy = [ 2, 2, 1 ];
* var sz = [ 2, 2, 1 ];
* var sw = [ 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
* var ow = 0;
*
* // Create the input and output ndarrays:
* var x = new ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
* var y = new ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
* var z = new ndarray( 'float64', zbuf, shape, sz, oz, 'row-major' );
* var w = new ndarray( 'float64', wbuf, shape, sw, ow, 'row-major' );
*
* // Apply the ternary function:
* ternary( [ x, y, z, w ], fcn );
*
* console.log( getData( w ) );
* // => <Float64Array>[ 2.5, 4.5, 6.5, 8.5, 10.5, 12.5 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
