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
* Fill a single-precision complex floating-point strided array with logarithmically spaced values over a specified interval.
*
* @module @stdlib/blas/ext/base/clogspace
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var clogspace = require( '@stdlib/blas/ext/base/clogspace' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 2.0, 0.0 );
*
* clogspace( x.length, 10.0, strt, stp, true, x, 1 );
* // x => <Complex64Array>[ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var clogspace = require( '@stdlib/blas/ext/base/clogspace' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 2.0, 0.0 );
*
* clogspace.ndarray( x.length, 10.0, strt, stp, false, x, 1, 0 );
* // x => <Complex64Array>[ 1.0, 0.0, 10.0, 0.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var clogspace;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	clogspace = main;
} else {
	clogspace = tmp;
}


// EXPORTS //

module.exports = clogspace;

// exports: { "ndarray": "clogspace.ndarray" }
