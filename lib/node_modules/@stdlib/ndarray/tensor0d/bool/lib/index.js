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
* Create a boolean zero-dimensional ndarray.
*
* @module @stdlib/ndarray/tensor0d/bool
*
* @example
* var BooleanTensor0D = require( '@stdlib/ndarray/tensor0d/bool' );
*
* var v = new BooleanTensor0D();
* // returns <ndarray>[ false ]
*
* @example
* var BooleanTensor0D = require( '@stdlib/ndarray/tensor0d/bool' );
*
* var v = new BooleanTensor0D( true );
* // returns <ndarray>[ true ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var BooleanTensor0D = require( '@stdlib/ndarray/tensor0d/bool' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new BooleanTensor0D( buf );
* // returns <ndarray>[ false ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var BooleanTensor0D = require( '@stdlib/ndarray/tensor0d/bool' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new BooleanTensor0D( buf, 16 );
* // returns <ndarray>[ false ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
