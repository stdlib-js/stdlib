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
* LAPACK routine to convert a matrix from row-major layout to column-major layout or vice versa.
*
* @module @stdlib/lapack/base/sge-trans
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sgetrans = require( '@stdlib/lapack/base/sge-trans' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Float32Array( 6 );
*
* out = sgetrans( 'row-major', 2, 3, A, 3, out, 2 );
* // returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sgetrans = require( '@stdlib/lapack/base/sge-trans' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Float32Array( 6 );
*
* out = sgetrans.ndarray( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
* // returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sgetrans;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sgetrans = main;
} else {
	sgetrans = tmp;
}


// EXPORTS //

module.exports = sgetrans;
