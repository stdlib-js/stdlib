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
* Compute the standard deviation of a one-dimensional ndarray using Welford's algorithm.
*
* @module @stdlib/stats/base/ndarray/stdevwd
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var stdevwd = require( '@stdlib/stats/base/ndarray/stdevwd' );
*
* var opts = {
*     'dtype': 'generic'
* };
*
* // Define a one-dimensional input ndarray:
* var xbuf = [ 1.0, -2.0, 2.0 ];
* var x = new ndarray( opts.dtype, xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* // Specify the degrees of freedom adjustment:
* var correction = scalar2ndarray( 1.0, opts );
*
* // Compute the standard deviation:
* var v = stdevwd( [ x, correction ] );
* // returns ~2.0817
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
