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
* Subtract a scalar constant from each element in a double-precision complex floating-point strided array `x` and assign the results to elements in a double-precision complex floating-point strided array `w`.
*
* @module @stdlib/blas/ext/base/zwxsa
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zwxsa = require( '@stdlib/blas/ext/base/zwxsa' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var alpha = new Complex128( 2.0, 2.0 );
*
* zwxsa( x.length, alpha, x, 1, w, 1 );
* // w => <Complex128Array>[ -1.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zwxsa = require( '@stdlib/blas/ext/base/zwxsa' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var alpha = new Complex128( 2.0, 2.0 );
*
* zwxsa.ndarray( x.length, alpha, x, 1, 0, w, 1, 0 );
* // w => <Complex128Array>[ -1.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zwxsa;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zwxsa = main;
} else {
	zwxsa = tmp;
}


// EXPORTS //

module.exports = zwxsa;

// exports: { "ndarray": "zwxsa.ndarray" }
