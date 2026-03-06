/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* BLAS level 1 routine to find the index of the first element having the maximum absolute value.
*
* @module @stdlib/blas/base/idamax
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var idamax = require( '@stdlib/blas/base/idamax' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var idx = idamax( x.length, x, 1 );
* // returns 3
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var idamax = require( '@stdlib/blas/base/idamax' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var idx = idamax.ndarray( x.length, x, 1, 0 );
* // returns 3
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var idamax;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	idamax = main;
} else {
	idamax = tmp;
}


// EXPORTS //

module.exports = idamax;

// exports: { "ndarray": "idamax.ndarray" }
