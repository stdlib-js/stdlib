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
* Copy the upper triangular part of a matrix `A` to another matrix `B`.
*
* @module @stdlib/blas/ext/base/ndarray/gtriu
*
* @example
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var gtriu = require( '@stdlib/blas/ext/base/ndarray/gtriu' );
*
* var A = matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], 'generic' );
* var B = matrix( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ], 'generic' );
*
* var k = scalar2ndarray( 0, {
*    'dtype': 'generic'
* });
*
* var out = gtriu( [ A, B, k ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 0.0, 4.0 ] ]
*
* var bool = ( out === B );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
