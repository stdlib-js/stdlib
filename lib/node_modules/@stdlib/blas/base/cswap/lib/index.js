/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* BLAS level 1 routine to interchange two complex single-precision floating-point vectors.
*
* @module @stdlib/blas/base/cswap
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cswap = require( '@stdlib/blas/base/cswap' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cswap( x.length, x, 1, y, 1 );
* // x => <Complex64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
* // y => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cswap = require( '@stdlib/blas/base/cswap' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // x => <Complex64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
* // y => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var cswap;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cswap = main;
} else {
	cswap = tmp;
}


// EXPORTS //

module.exports = cswap;

// exports: { "ndarray": "cswap.ndarray" }
