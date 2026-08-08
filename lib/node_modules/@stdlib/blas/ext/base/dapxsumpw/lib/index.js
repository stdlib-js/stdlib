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
* Add a scalar constant to each double-precision floating-point strided array element and compute the sum using pairwise summation.
*
* @module @stdlib/blas/ext/base/dapxsumpw
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dapxsumpw = require( '@stdlib/blas/ext/base/dapxsumpw' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dapxsumpw( x.length, 5.0, x, 1 );
* // returns 16.0
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dapxsumpw = require( '@stdlib/blas/ext/base/dapxsumpw' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dapxsumpw.ndarray( 4, 5.0, x, 2, 1 );
* // returns 25.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dapxsumpw;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dapxsumpw = main;
} else {
	dapxsumpw = tmp;
}


// EXPORTS //

module.exports = dapxsumpw;

// exports: { "ndarray": "dapxsumpw.ndarray" }
