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
* BLAS level 1 routine to interchange two one-dimensional complex single-precision floating-point ndarrays.
*
* @module @stdlib/blas/base/ndarray/cswap
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var cswap = require( '@stdlib/blas/base/ndarray/cswap' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Vector( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* var z = cswap( [ x, y ] );
* // x => <ndarray>[ <Complex64>[ 7.0, 8.0 ], <Complex64>[ 9.0, 10.0 ], <Complex64>[ 11.0, 12.0 ] ]
* // y => <ndarray>[ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 3.0, 4.0 ], <Complex64>[ 5.0, 6.0 ] ]
*
* var bool = ( z === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
