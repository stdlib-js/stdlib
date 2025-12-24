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
* Fill a one-dimensional single-precision floating-point ndarray with linearly spaced values over a specified interval.
*
* @module @stdlib/blas/ext/base/ndarray/slinspace
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var slinspace = require( '@stdlib/blas/ext/base/ndarray/slinspace' );
*
* var xbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 6 ], [ 1 ], 0, 'row-major' );
*
* var start = scalar2ndarray( 0.0, {
*    'dtype': 'float32'
* });
*
* var stop = scalar2ndarray( 100.0, {
*    'dtype': 'float32'
* });
*
* var endpoint = scalar2ndarray( true, {
*     'dtype': 'bool'
* });
*
* var out = slinspace( [ x, start, stop, endpoint ] );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
