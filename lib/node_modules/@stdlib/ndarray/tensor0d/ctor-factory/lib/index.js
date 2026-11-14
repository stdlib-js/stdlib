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
* Return a function for creating zero-dimensional ndarrays.
*
* @module @stdlib/ndarray/tensor0d/ctor-factory
*
* @example
* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
* var factory = require( '@stdlib/ndarray/tensor0d/ctor-factory' );
*
* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
*
* var arr = new Float64Tensor0D();
* // returns <ndarray>[ 0.0 ]
*
* @example
* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
* var factory = require( '@stdlib/ndarray/tensor0d/ctor-factory' );
*
* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
*
* var arr = new Float64Tensor0D( 1.0 );
* // returns <ndarray>[ 1.0 ]
*
* @example
* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var factory = require( '@stdlib/ndarray/tensor0d/ctor-factory' );
*
* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
*
* var buf = new ArrayBuffer( 8 );
* var arr = new Float64Tensor0D( buf );
* // returns <ndarray>[ 0.0 ]
*
* @example
* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var factory = require( '@stdlib/ndarray/tensor0d/ctor-factory' );
*
* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64Tensor0D( buf, 8 );
* // returns <ndarray>[ 0.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
