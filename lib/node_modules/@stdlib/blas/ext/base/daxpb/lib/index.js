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
* Multiply each element in a double-precision floating-point strided array by a scalar constant and add a scalar constant to each result.
*
* @module @stdlib/blas/ext/base/daxpb
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var daxpb = require( '@stdlib/blas/ext/base/daxpb' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* daxpb( x.length, 5.0, 3.0, x, 1 );
* // x => <Float64Array>[ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var daxpb = require( '@stdlib/blas/ext/base/daxpb' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* daxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0 );
* // x => <Float64Array>[ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var daxpb;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	daxpb = main;
} else {
	daxpb = tmp;
}


// EXPORTS //

module.exports = daxpb;

// exports: { "ndarray": "daxpb.ndarray" }
