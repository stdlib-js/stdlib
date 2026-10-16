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
* BLAS level 1 routine to compute the L2-norm of a one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas/base/ndarray/dnrm2
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var dnrm2 = require( '@stdlib/blas/base/ndarray/dnrm2' );
*
* var x = new Float64Vector( [ 1.0, -2.0, 2.0 ] );
*
* var y = dnrm2( [ x ] );
* // returns 3.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
