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

/**
* BLAS level 1 routine to compute the dot product of two one-dimensional double-precision floating-point ndarrays.
*
* @module @stdlib/blas/base/ndarray/ddot
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var ddot = require( '@stdlib/blas/base/ndarray/ddot' );
*
* var xbuf = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var x = new ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
* var y = new ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var z = ddot( [ x, y ] );
* // returns -5.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
