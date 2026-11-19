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
* Compute the Cartesian product for two double-precision complex floating-point strided arrays.
*
* @module @stdlib/blas/ext/base/zcartesian-product
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zcartesianProduct = require( '@stdlib/blas/ext/base/zcartesian-product' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex128Array( [ 5.0, 6.0, 7.0, 8.0 ] );
* var out = new Complex128Array( 8 );
*
* zcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );
* // out => <Complex128Array>[ 1.0, 2.0, 5.0, 6.0, 1.0, 2.0, 7.0, 8.0, 3.0, 4.0, 5.0, 6.0, 3.0, 4.0, 7.0, 8.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zcartesianProduct = require( '@stdlib/blas/ext/base/zcartesian-product' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex128Array( [ 5.0, 6.0, 7.0, 8.0 ] );
* var out = new Complex128Array( 8 );
*
* zcartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
* // out => <Complex128Array>[ 1.0, 2.0, 5.0, 6.0, 1.0, 2.0, 7.0, 8.0, 3.0, 4.0, 5.0, 6.0, 3.0, 4.0, 7.0, 8.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zcartesianProduct;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zcartesianProduct = main;
} else {
	zcartesianProduct = tmp;
}


// EXPORTS //

module.exports = zcartesianProduct;

// exports: { "ndarray": "zcartesianProduct.ndarray" }
