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
* Compute the covariance of two one-dimensional double-precision floating-point ndarrays provided known means and using a one-pass textbook algorithm.
*
* @module @stdlib/stats/base/ndarray/dcovarmtk
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var dcovarmtk = require( '@stdlib/stats/base/ndarray/dcovarmtk' );
*
* var opts = {
*     'dtype': 'float64'
* };
*
* var xbuf = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var x = new ndarray( opts.dtype, xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Float64Array( [ 2.0, -2.0, 1.0 ] );
* var y = new ndarray( opts.dtype, ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var correction = scalar2ndarray( 1.0, opts );
* var meanx = scalar2ndarray( 1.0/3.0, opts );
* var meany = scalar2ndarray( 1.0/3.0, opts );
*
* var v = dcovarmtk( [ x, y, correction, meanx, meany ] );
* // returns ~3.8333
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
