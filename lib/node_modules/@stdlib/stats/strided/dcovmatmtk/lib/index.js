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
* Compute the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assign the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.
*
* @module @stdlib/stats/strided/dcovmatmtk
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dcovmatmtk = require( '@stdlib/stats/strided/dcovmatmtk' );
*
* // Define a 2x3 matrix in which variables are stored along rows in row-major order:
* var A = new Float64Array([
*     1.0, -2.0, 2.0,
*     2.0, -2.0, 1.0
* ]);
*
* // Define a vector of known means:
* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
*
* // Allocate a 2x2 output matrix:
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* var out = dcovmatmtk( 'row-major', 'rows', 'full', 2, 3, 1, means, 1, A, 3, B, 2 );
* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
*
* var bool = ( B === out );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dcovmatmtk = require( '@stdlib/stats/strided/dcovmatmtk' );
*
* // Define a 2x3 matrix in which variables are stored along rows in row-major order:
* var A = new Float64Array([
*     1.0, -2.0, 2.0,
*     2.0, -2.0, 1.0
* ]);
*
* // Define a vector of known means:
* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
*
* // Allocate a 2x2 output matrix:
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* var out = dcovmatmtk( 'rows', 'full', 2, 3, 1, means, 1, 0, A, 3, 1, 0, B, 2, 1, 0 );
* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
*
* var bool = ( B === out );
* // returns true
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dcovmatmtk;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dcovmatmtk = main;
} else {
	dcovmatmtk = tmp;
}


// EXPORTS //

module.exports = dcovmatmtk;

// exports: { "ndarray": "dcovmatmtk.ndarray" }
