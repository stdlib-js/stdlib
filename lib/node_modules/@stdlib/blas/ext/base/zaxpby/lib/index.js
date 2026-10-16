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
* Multiply a double-precision complex floating-point strided array `x` by a constant and add the result to a double-precision complex floating-point strided array `y` multiplied by a constant.
*
* @module @stdlib/blas/ext/base/zaxpby
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zaxpby = require( '@stdlib/blas/ext/base/zaxpby' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex128Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var alpha = new Complex128( 2.0, 1.0 );
* var beta = new Complex128( 1.0, -1.0 );
*
* zaxpby( x.length, alpha, x, 1, beta, y, 1 );
* // y => <Complex128Array>[ 3.0, 4.0, 9.0, 5.0, 3.0, -2.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zaxpby = require( '@stdlib/blas/ext/base/zaxpby' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex128Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var alpha = new Complex128( 2.0, 1.0 );
* var beta = new Complex128( 1.0, -1.0 );
*
* zaxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
* // y => <Complex128Array>[ 3.0, 4.0, 9.0, 5.0, 3.0, -2.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zaxpby;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zaxpby = main;
} else {
	zaxpby = tmp;
}


// EXPORTS //

module.exports = zaxpby;

// exports: { "ndarray": "zaxpby.ndarray" }
