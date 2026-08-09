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
* Copy the upper triangular part of a double-precision floating-point matrix `A` to another matrix `B`.
*
* @module @stdlib/blas/ext/base/ndarray/dtriu
*
* @example
* var Float64Matrix = require( '@stdlib/ndarray/matrix/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var dtriu = require( '@stdlib/blas/ext/base/ndarray/dtriu' );
*
* var A = new Float64Matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* var B = new Float64Matrix( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] );
*
* var k = scalar2ndarray( 0, {
*    'dtype': 'generic'
* });
*
* var out = dtriu( [ A, B, k ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 0.0, 4.0 ] ]
*
* var bool = ( out === B );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
