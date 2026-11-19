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
* Create a clamped 8-bit unsigned integer zero-dimensional ndarray.
*
* @module @stdlib/ndarray/tensor0d/uint8c
*
* @example
* var Uint8ClampedTensor0D = require( '@stdlib/ndarray/tensor0d/uint8c' );
*
* var v = new Uint8ClampedTensor0D();
* // returns <ndarray>[ 0 ]
*
* @example
* var Uint8ClampedTensor0D = require( '@stdlib/ndarray/tensor0d/uint8c' );
*
* var v = new Uint8ClampedTensor0D( 2 );
* // returns <ndarray>[ 2 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Uint8ClampedTensor0D = require( '@stdlib/ndarray/tensor0d/uint8c' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new Uint8ClampedTensor0D( buf );
* // returns <ndarray>[ 0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Uint8ClampedTensor0D = require( '@stdlib/ndarray/tensor0d/uint8c' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new Uint8ClampedTensor0D( buf, 16 );
* // returns <ndarray>[ 0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
