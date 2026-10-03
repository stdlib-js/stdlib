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
* LAPACK routine to perform a series of row interchanges on an input matrix.
*
* @module @stdlib/lapack/base/zlaswp
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zlaswp = require( '@stdlib/lapack/base/zlaswp' );
*
* var IPIV = new Int32Array( [ 2, 0, 1 ] );
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* zlaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
* // A => <Complex128Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zlaswp = require( '@stdlib/lapack/base/zlaswp' );
*
* var IPIV = new Int32Array( [ 2, 0, 1 ] );
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
* // A => <Complex128Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zlaswp;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zlaswp = main;
} else {
	zlaswp = tmp;
}


// EXPORTS //

module.exports = zlaswp;

// exports: { "ndarray": "zlaswp.ndarray" }
