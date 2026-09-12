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
* Multiply elements of a single-precision complex floating-point strided array `x` by the corresponding elements of a single-precision complex floating-point strided array `y` and assign the results to elements in a single-precision complex floating-point strided array `w`.
*
* @module @stdlib/blas/ext/base/cwxmy
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cwxmy = require( '@stdlib/blas/ext/base/cwxmy' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cwxmy( x.length, x, 1, y, 1, w, 1 );
* // w => <Complex64Array>[ -4.0, 7.0, -8.0, 31.0, -12.0, 71.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cwxmy = require( '@stdlib/blas/ext/base/cwxmy' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cwxmy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => <Complex64Array>[ -4.0, 7.0, -8.0, 31.0, -12.0, 71.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var cwxmy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cwxmy = main;
} else {
	cwxmy = tmp;
}


// EXPORTS //

module.exports = cwxmy;

// exports: { "ndarray": "cwxmy.ndarray" }
