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
* @module @stdlib/lapack/base/dge-trans
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dgetrans = require( '@stdlib/lapack/base/dge-trans' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Float64Array( 6 );
*
* out = dgetrans( 'row-major', 2, 3, A, 3, out, 2 );
* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dgetrans = require( '@stdlib/lapack/base/dge-trans' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Float64Array( 6 );
*
* out = dgetrans.ndarray( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dgetrans;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dgetrans = main;
} else {
	dgetrans = tmp;
}


// EXPORTS //

module.exports = dgetrans;
