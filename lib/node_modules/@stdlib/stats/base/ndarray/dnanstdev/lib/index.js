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
* Compute the standard deviation of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.
*
* @module @stdlib/stats/base/ndarray/dnanstdev
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var dnanstdev = require( '@stdlib/stats/base/ndarray/dnanstdev' );
*
* var opts = {
*     'dtype': 'float64'
* };
*
* // Define a one-dimensional input ndarray:
* var xbuf = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var x = new ndarray( opts.dtype, xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* // Specify the degrees of freedom adjustment:
* var correction = scalar2ndarray( 1.0, opts );
*
* // Compute the standard deviation:
* var v = dnanstdev( [ x, correction ] );
* // returns ~2.0817
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
