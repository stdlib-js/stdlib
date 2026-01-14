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
* BLAS level 1 routine to apply a modified Givens plane rotation.
*
* @module @stdlib/blas/base/drotm
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var drotm = require( '@stdlib/blas/base/drotm' );
*
* var x = new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
* var y = new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* drotm( 4, x, -1, y, -2, param );
* // x => <Float64Array>[ -0.9, -0.8, 1.3, -1.6, 0.9, -0.3, -0.4 ]
* // y => <Float64Array>[ 1.7, -0.9, 0.5, 0.7, -1.6, 0.2, 2.4 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var drotm = require( '@stdlib/blas/base/drotm' );
*
* var x = new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
* var y = new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* drotm.ndarray( 4, x, -1, 3, y, -2, 6, param );
* // x => <Float64Array>[ -0.9, -0.8, 1.3, -1.6, 0.9, -0.3, -0.4 ]
* // y => <Float64Array>[ 1.7, -0.9, 0.5, 0.7, -1.6, 0.2, 2.4 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var drotm;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	drotm = main;
} else {
	drotm = tmp;
}


// EXPORTS //

module.exports = drotm;

// exports: { "ndarray": "drotm.ndarray" }
