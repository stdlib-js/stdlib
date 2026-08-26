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
* Multiply each element in a double-precision floating-point strided array `x` by a scalar constant and assign the results to elements in a double-precision floating-point strided array `w`.
*
* @module @stdlib/blas/ext/base/dwax
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dwax = require( '@stdlib/blas/ext/base/dwax' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dwax( x.length, 5.0, x, 1, w, 1 );
* // w => <Float64Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dwax = require( '@stdlib/blas/ext/base/dwax' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dwax.ndarray( x.length, 5.0, x, 1, 0, w, 1, 0 );
* // w => <Float64Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dwax;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dwax = main;
} else {
	dwax = tmp;
}


// EXPORTS //

module.exports = dwax;

// exports: { "ndarray": "dwax.ndarray" }
