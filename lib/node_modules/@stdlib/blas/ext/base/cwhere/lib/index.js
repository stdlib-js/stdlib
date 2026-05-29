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
* Take elements from one of two single-precision complex floating-point strided arrays depending on a condition.
*
* @module @stdlib/blas/ext/base/cwhere
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cwhere = require( '@stdlib/blas/ext/base/cwhere' );
*
* var condition = new BooleanArray( [ true, false, true ] );
* var x = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
* var y = new Complex64Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
* var out = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
* // out => <Complex64Array>[ 1.0, -1.0, 5.0, -5.0, 3.0, -3.0 ]
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cwhere = require( '@stdlib/blas/ext/base/cwhere' );
*
* var condition = new BooleanArray( [ true, false, true, false ] );
* var x = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ] );
* var y = new Complex64Array( [ 5.0, -5.0, 6.0, -6.0, 7.0, -7.0, 8.0, -8.0 ] );
* var out = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cwhere.ndarray( 4, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
* // out => <Complex64Array>[ 1.0, -1.0, 6.0, -6.0, 3.0, -3.0, 8.0, -8.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var cwhere;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cwhere = main;
} else {
	cwhere = tmp;
}


// EXPORTS //

module.exports = cwhere;

// exports: { "ndarray": "cwhere.ndarray" }
