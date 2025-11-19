/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* BLAS level 2 routine to perform the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.
*
* @module @stdlib/blas/base/ggemm
*
* @example
* var ggemm = require( '@stdlib/blas/base/ggemm' );
*
* var A = [ 1.0, 2.0, 3.0, 4.0 ];
* var B = [ 1.0, 1.0, 0.0, 1.0 ];
* var C = [ 1.0, 2.0, 3.0, 4.0 ];
*
* ggemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
* // C => [ 2.0, 5.0, 6.0, 11.0 ]
*
* @example
* var ggemm = require( '@stdlib/blas/base/ggemm' );
*
* var A = [ 1.0, 2.0, 3.0, 4.0 ];
* var B = [ 1.0, 1.0, 0.0, 1.0 ];
* var C = [ 1.0, 2.0, 3.0, 4.0 ];
*
* ggemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, 1.0, C, 2, 1, 0 );
* // C => [ 2.0, 5.0, 6.0, 11.0 ]
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
