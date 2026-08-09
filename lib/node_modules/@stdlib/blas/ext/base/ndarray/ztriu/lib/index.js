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
* Copy the upper triangular part of a double-precision complex floating-point matrix `A` to another matrix `B`.
*
* @module @stdlib/blas/ext/base/ndarray/ztriu
*
* @example
* var Complex128Matrix = require( '@stdlib/ndarray/matrix/complex128' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ztriu = require( '@stdlib/blas/ext/base/ndarray/ztriu' );
*
* var A = new Complex128Matrix( [ [ 1.0, 2.0, 3.0, 4.0 ], [ 5.0, 6.0, 7.0, 8.0 ] ] );
* var B = new Complex128Matrix( [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0, 0.0 ] ] );
*
* var k = scalar2ndarray( 0, {
*    'dtype': 'generic'
* });
*
* var out = ztriu( [ A, B, k ] );
* // returns <ndarray>[ [ <Complex128>[ 1.0, 2.0 ], <Complex128>[ 3.0, 4.0 ] ], [ <Complex128>[ 0.0, 0.0 ], <Complex128>[ 7.0, 8.0 ] ] ]
*
* var bool = ( out === B );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
