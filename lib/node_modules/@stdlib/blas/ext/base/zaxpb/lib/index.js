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
* Multiply each element in a double-precision complex floating-point strided array by a scalar constant and add a scalar constant to each result.
*
* @module @stdlib/blas/ext/base/zaxpb
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zaxpb = require( '@stdlib/blas/ext/base/zaxpb' );
*
* var x = new Complex128Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var alpha = new Complex128( 2.0, 0.0 );
* var beta = new Complex128( 1.0, 0.0 );
*
* zaxpb( x.length, alpha, beta, x, 1 );
* // x => <Complex128Array>[ -3.0, 2.0, 7.0, -10.0, 9.0, 0.0, -1.0, -6.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zaxpb = require( '@stdlib/blas/ext/base/zaxpb' );
*
* var x = new Complex128Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var alpha = new Complex128( 2.0, 0.0 );
* var beta = new Complex128( 1.0, 0.0 );
*
* zaxpb.ndarray( x.length, alpha, beta, x, 1, 0 );
* // x => <Complex128Array>[ -3.0, 2.0, 7.0, -10.0, 9.0, 0.0, -1.0, -6.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zaxpb;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zaxpb = main;
} else {
	zaxpb = tmp;
}


// EXPORTS //

module.exports = zaxpb;

// exports: { "ndarray": "zaxpb.ndarray" }
