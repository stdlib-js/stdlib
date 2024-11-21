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
* BLAS level 1 routine to compute the L2-norm of a complex single-precision floating-point vector.
*
* @module @stdlib/blas/base/scnrm2
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var scnrm2 = require( '@stdlib/blas/base/scnrm2' );
*
* var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
*
* var norm = scnrm2( 4, cx, 1 );
* // returns ~0.8
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var scnrm2 = require( '@stdlib/blas/base/scnrm2' );
*
* var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
*
* var norm = scnrm2.ndarray( 4, cx, 1, 0 );
* // returns ~0.8
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var scnrm2;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	scnrm2 = main;
} else {
	scnrm2 = tmp;
}


// EXPORTS //

module.exports = scnrm2;

// exports: { "ndarray": "scnrm2.ndarray" }
