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
* BLAS level 1 routine to multiply a one-dimensional single-precision floating-point ndarray by a scalar constant.
*
* @module @stdlib/blas/base/ndarray/sscal
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var sscal = require( '@stdlib/blas/base/ndarray/sscal' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var alpha = scalar2ndarray( 5.0, {
*     'dtype': 'float32'
* });
*
* var y = sscal( [ x, alpha ] );
* // returns <ndarray>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
*
* var bool = ( y === x );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
