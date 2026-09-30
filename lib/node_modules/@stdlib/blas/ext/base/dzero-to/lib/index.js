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
* Fill a double-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.
*
* @module @stdlib/blas/ext/base/dzero-to
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dzeroTo = require( '@stdlib/blas/ext/base/dzero-to' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* dzeroTo( x.length, x, 1 );
* // x => <Float64Array>[ 0.0, 1.0, 2.0, 3.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dzeroTo = require( '@stdlib/blas/ext/base/dzero-to' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* dzeroTo.ndarray( x.length, x, 1, 0 );
* // x => <Float64Array>[ 0.0, 1.0, 2.0, 3.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dzeroTo;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dzeroTo = main;
} else {
	dzeroTo = tmp;
}


// EXPORTS //

module.exports = dzeroTo;

// exports: { "ndarray": "dzeroTo.ndarray" }
