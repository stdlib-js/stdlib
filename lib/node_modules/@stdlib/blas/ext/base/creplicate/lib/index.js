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
* Replicate each element in a single-precision complex floating-point strided array a specified number of times.
*
* @module @stdlib/blas/ext/base/creplicate
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var creplicate = require( '@stdlib/blas/ext/base/creplicate' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Complex64Array( 6 );
*
* creplicate( x.length, 2, x, 1, out, 1 );
* // out => <Complex64Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 5.0, 6.0, 5.0, 6.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var creplicate = require( '@stdlib/blas/ext/base/creplicate' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Complex64Array( 6 );
*
* creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
* // out => <Complex64Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 5.0, 6.0, 5.0, 6.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var creplicate;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	creplicate = main;
} else {
	creplicate = tmp;
}


// EXPORTS //

module.exports = creplicate;

// exports: { "ndarray": "creplicate.ndarray" }
