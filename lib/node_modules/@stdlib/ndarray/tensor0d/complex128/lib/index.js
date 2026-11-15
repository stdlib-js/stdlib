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
* Create a double-precision complex floating-point zero-dimensional ndarray.
*
* @module @stdlib/ndarray/tensor0d/complex128
*
* @example
* var Complex128Tensor0D = require( '@stdlib/ndarray/tensor0d/complex128' );
*
* var arr = new Complex128Tensor0D();
* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
*
* @example
* var Complex128Tensor0D = require( '@stdlib/ndarray/tensor0d/complex128' );
*
* var arr = new Complex128Tensor0D( 1.0 );
* // returns <ndarray>[ <Complex128>[ 1.0, 0.0 ] ]
*
* @example
* var Complex128Tensor0D = require( '@stdlib/ndarray/tensor0d/complex128' );
*
* var arr = new Complex128Tensor0D( 1.0, 2.0 );
* // returns <ndarray>[ <Complex128>[ 1.0, 2.0 ] ]
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var Complex128Tensor0D = require( '@stdlib/ndarray/tensor0d/complex128' );
*
* var arr = new Complex128Tensor0D( new Complex128( 3.0, 4.0 ) );
* // returns <ndarray>[ <Complex128>[ 3.0, 4.0 ] ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Complex128Tensor0D = require( '@stdlib/ndarray/tensor0d/complex128' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Complex128Tensor0D( buf );
* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Complex128Tensor0D = require( '@stdlib/ndarray/tensor0d/complex128' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex128Tensor0D( buf, 16 );
* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
