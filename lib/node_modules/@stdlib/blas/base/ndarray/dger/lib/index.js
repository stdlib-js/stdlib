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
* BLAS level 2 routine to perform the rank 1 operation `A = alpha*x*y^T + A`.
*
* @module @stdlib/blas/base/ndarray/dger
*
* @example
* var Float64Matrix = require( '@stdlib/ndarray/matrix/float64' );
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var dger = require( '@stdlib/blas/base/ndarray/dger' );
*
* var x = new Float64Vector( [ 1.0, 2.0 ] );
* var y = new Float64Vector( [ 3.0, 4.0, 5.0 ] );
* var A = new Float64Matrix( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ] );
*
* var alpha = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
*
* var out = dger( [ x, y, A, alpha ] );
* // returns <ndarray>[ [ 4.0, 6.0, 8.0 ], [ 10.0, 13.0, 16.0 ] ]
*
* var bool = ( out === A );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
