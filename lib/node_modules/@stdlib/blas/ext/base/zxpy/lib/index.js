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
* Add elements of a double-precision complex floating-point strided array `x` to the corresponding elements of a double-precision complex floating-point strided array `y` and assign the results to `y`.
*
* @module @stdlib/blas/ext/base/zxpy
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zxpy = require( '@stdlib/blas/ext/base/zxpy' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
*
* zxpy( x.length, x, 1, y, 1 );
* // y => <Complex128Array>[ 3.0, 5.0, 7.0, 9.0, 11.0, 13.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zxpy = require( '@stdlib/blas/ext/base/zxpy' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
*
* zxpy.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Complex128Array>[ 3.0, 5.0, 7.0, 9.0, 11.0, 13.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zxpy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zxpy = main;
} else {
	zxpy = tmp;
}


// EXPORTS //

module.exports = zxpy;

// exports: { "ndarray": "zxpy.ndarray" }
