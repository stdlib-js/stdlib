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
* Compute the cumulative sum of double-precision floating-point strided array elements ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas/ext/base/dnancusumkbn
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dnancusumkbn = require( '@stdlib/blas/ext/base/dnancusumkbn' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN ] );
* var y = new Float64Array( x.length );
*
* dnancusumkbn( 3, 0.0, x, 1, y, 1 );
* // y => <Float64Array>[ 1.0, -1.0, -1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dnancusumkbn = require( '@stdlib/blas/ext/base/dnancusumkbn' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, NaN, 3.0, NaN ] );
* var y = new Float64Array( x.length );
*
* dnancusumkbn.ndarray( 4, 0.0, x, 2, 1, y, 1, 0 );
* // y => <Float64Array>[ 1.0, -1.0, -1.0, -1.0, 0.0, 0.0, 0.0, 0.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dnancusumkbn;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dnancusumkbn = main;
} else {
	dnancusumkbn = tmp;
}


// EXPORTS //

module.exports = dnancusumkbn;

// exports: { "ndarray": "dnancusumkbn.ndarray" }
