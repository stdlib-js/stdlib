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
* BLAS level 1 routine to compute the dot product of two one-dimensional single-precision floating-point ndarrays with extended accumulation.
*
* @module @stdlib/blas/base/ndarray/sdsdot
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var sdsdot = require( '@stdlib/blas/base/ndarray/sdsdot' );
*
* var x = new Float32Vector( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Vector( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var scalar = scalar2ndarray( 10.0, {
*     'dtype': 'float32'
* });
*
* var z = sdsdot( [ x, y, scalar ] );
* // returns 5.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
