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
* Return the index of the first truthy element in a double-precision complex floating-point strided array.
*
* @module @stdlib/blas/ext/base/zindex-of-truthy
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zindexOfTruthy = require( '@stdlib/blas/ext/base/zindex-of-truthy' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 1.0, 2.0, 4.0, 5.0 ] );
*
* var idx = zindexOfTruthy( x.length, x, 1 );
* // returns 1
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zindexOfTruthy = require( '@stdlib/blas/ext/base/zindex-of-truthy' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 1.0, 2.0, 4.0, 5.0 ] );
*
* var idx = zindexOfTruthy.ndarray( x.length, x, 1, 0 );
* // returns 1
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zindexOfTruthy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zindexOfTruthy = main;
} else {
	zindexOfTruthy = tmp;
}


// EXPORTS //

module.exports = zindexOfTruthy;

// exports: { "ndarray": "zindexOfTruthy.ndarray" }
