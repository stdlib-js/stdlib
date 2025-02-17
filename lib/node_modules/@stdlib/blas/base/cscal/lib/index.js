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
* BLAS level 1 routine to scale a single-precision complex floating-point vector by a single-precision complex floating-point constant.
*
* @module @stdlib/blas/base/cscal
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cscal = require( '@stdlib/blas/base/cscal' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var ca = new Complex64( 2.0, 2.0 );
*
* cscal( 3, ca, cx, 1 );
* // cx => <Complex64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cscal = require( '@stdlib/blas/base/cscal' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var ca = new Complex64( 2.0, 2.0 );
*
* cscal.ndarray( 3, ca cx, 1, 0 );
* // cx => <Complex64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var cscal;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cscal = main;
} else {
	cscal = tmp;
}


// EXPORTS //

module.exports = cscal;

// exports: { "ndarray": "cscal.ndarray" }
