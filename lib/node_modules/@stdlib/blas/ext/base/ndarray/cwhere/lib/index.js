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
* Take elements from one of two one-dimensional single-precision complex floating-point ndarrays depending on a condition.
*
* @module @stdlib/blas/ext/base/ndarray/cwhere
*
* @example
* var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var cwhere = require( '@stdlib/blas/ext/base/ndarray/cwhere' );
*
* var condition = new BooleanVector( [ true, false, true ] );
* var x = new Complex64Vector( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
* var y = new Complex64Vector( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
* var out = new Complex64Vector( 3 );
*
* var v = cwhere( [ condition, x, y, out ] );
* // returns <ndarray>[ <Complex64>[ 1.0, -1.0 ], <Complex64>[ 5.0, -5.0 ], <Complex64>[ 3.0, -3.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
