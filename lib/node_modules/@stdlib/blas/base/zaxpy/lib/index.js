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
* BLAS level 1 routine to scale a double-precision complex floating-point vector by a double-precision complex floating-point constant and add the result to a double-precision complex floating-point vector.
*
* @module @stdlib/blas/base/zaxpy
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zaxpy = require( '@stdlib/blas/base/zaxpy' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var za = new Complex128( 2.0, 2.0 );
*
* zaxpy( 3, za, zx, 1, zy, 1 );
* // zy => <Complex128Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zaxpy = require( '@stdlib/blas/base/zaxpy' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var za = new Complex128( 2.0, 2.0 );
*
* zaxpy.ndarray( 3, za, zx, 1, 0, zy, 1, 0 );
* // zy => <Complex128Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zaxpy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zaxpy = main;
} else {
	zaxpy = tmp;
}


// EXPORTS //

module.exports = zaxpy;

// exports: { "ndarray": "zaxpy.ndarray" }
