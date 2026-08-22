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
* Return the index of the last truthy element in a one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/dlast-index-of-truthy
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var dlastIndexOfTruthy = require( '@stdlib/blas/ext/base/ndarray/dlast-index-of-truthy' );
*
* var x = new Float64Vector( [ 0.0, 1.0, 0.0, 2.0 ] );
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var v = dlastIndexOfTruthy( [ x, fromIndex ] );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
