/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* BLAS level 2 routine to perform the rank 1 operation `A = alpha*x*y^T + A`.
*
* @module @stdlib/blas/base/dger
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dger = require( '@stdlib/blas/base/dger' );
*
* var M = 4;
* var N = 3;
*
* var B = new Float64Array( M*N );
*
* var x = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 4.0, 0.0 ] );
*
* dger( 'row-major', N, M, 1.0, y, 1, x, 1, B, M );
* // B => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 0.0, 4.0, 8.0, 12.0, 0.0, 0.0, 0.0, 0.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dger = require( '@stdlib/blas/base/dger' );
*
* var M = 4;
* var N = 3;
*
* var B = new Float64Array( M*N );
*
* var x = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 4.0, 0.0 ] );
*
* dger.ndarray( 'row-major', N, M, 1.0, y, 1, 0, x, 1, 0, B, M );
* // B => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 0.0, 4.0, 8.0, 12.0, 0.0, 0.0, 0.0, 0.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dger;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dger = main;
} else {
	dger = tmp;
}


// EXPORTS //

module.exports = dger;

// exports: { "ndarray": "dger.ndarray" }
