/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* BLAS level 1 routine to multiply a single-precision floating-point vector by a constant.
*
* @module @stdlib/blas/base/sscal
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sscal = require( '@stdlib/blas/base/sscal' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* sscal( x.length, 5.0, x, 1 );
* // x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sscal = require( '@stdlib/blas/base/sscal' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* sscal.ndarray( x.length, 5.0, x, 1, 0 );
* // x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sscal;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sscal = main;
} else {
	sscal = tmp;
}


// EXPORTS //

module.exports = sscal;

// exports: { "ndarray": "sscal.ndarray" }
