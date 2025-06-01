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
* Compute the sum of double-precision complex floating-point strided array elements.
*
* @module @stdlib/blas/ext/base/zsum
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zsum = require( '@stdlib/blas/ext/base/zsum' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = zsum( x.length, x, 1 );
* // returns <Complex128>[ 3.0, 1.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zsum = require( '@stdlib/blas/ext/base/zsum' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = zsum.ndarray( x.length, x, 2, 0 );
* // returns <Complex128>[ 3.0, 1.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zsum;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zsum = main;
} else {
	zsum = tmp;
}


// EXPORTS //

module.exports = zsum;

// exports: { "ndarray": "zsum.ndarray" }
