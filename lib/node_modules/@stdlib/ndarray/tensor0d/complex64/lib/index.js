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
* Create a single-precision complex floating-point zero-dimensional ndarray.
*
* @module @stdlib/ndarray/tensor0d/complex64
*
* @example
* var Complex64Tensor0D = require( '@stdlib/ndarray/tensor0d/complex64' );
*
* var arr = new Complex64Tensor0D();
* // returns <ndarray>[ <Complex64>[ 0.0, 0.0 ] ]
*
* @example
* var Complex64Tensor0D = require( '@stdlib/ndarray/tensor0d/complex64' );
*
* var arr = new Complex64Tensor0D( 1.0 );
* // returns <ndarray>[ <Complex64>[ 1.0, 0.0 ] ]
*
* @example
* var Complex64Tensor0D = require( '@stdlib/ndarray/tensor0d/complex64' );
*
* var arr = new Complex64Tensor0D( 1.0, 2.0 );
* // returns <ndarray>[ <Complex64>[ 1.0, 2.0 ] ]
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var Complex64Tensor0D = require( '@stdlib/ndarray/tensor0d/complex64' );
*
* var arr = new Complex64Tensor0D( new Complex64( 3.0, 4.0 ) );
* // returns <ndarray>[ <Complex64>[ 3.0, 4.0 ] ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Complex64Tensor0D = require( '@stdlib/ndarray/tensor0d/complex64' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Complex64Tensor0D( buf );
* // returns <ndarray>[ <Complex64>[ 0.0, 0.0 ] ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Complex64Tensor0D = require( '@stdlib/ndarray/tensor0d/complex64' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex64Tensor0D( buf, 16 );
* // returns <ndarray>[ <Complex64>[ 0.0, 0.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
