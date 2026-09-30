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
* Copy the lower triangular part of a matrix `A` to another matrix `B`.
*
* @module @stdlib/blas/ext/base/gtril
*
* @example
* var gtril = require( '@stdlib/blas/ext/base/gtril' );
*
* var A = [ 1.0, 2.0, 3.0, 4.0 ];
* var B = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gtril( 'row-major', 2, 2, 0, A, 2, B, 2 );
* // B => [ 1.0, 0.0, 3.0, 4.0 ]
*
* @example
* var gtril = require( '@stdlib/blas/ext/base/gtril' );
*
* var A = [ 1.0, 2.0, 3.0, 4.0 ];
* var B = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gtril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => [ 1.0, 0.0, 3.0, 4.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
