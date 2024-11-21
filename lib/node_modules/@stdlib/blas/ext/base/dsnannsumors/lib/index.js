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
* Compute the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.
*
* @module @stdlib/blas/ext/base/dsnannsumors
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Float64Array = require( '@stdlib/array/float64' );
* var dsnannsumors = require( '@stdlib/blas/ext/base/dsnannsumors' );
*
* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dsnannsumors( x.length, x, 1, out, 1 );
* // returns <Float64Array>[ 1.0, 3 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Float64Array = require( '@stdlib/array/float64' );
* var dsnannsumors = require( '@stdlib/blas/ext/base/dsnannsumors' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var out = new Float64Array( 2 );
*
* var v = dsnannsumors.ndarray( 5, x, 2, 1, out, 1, 0 );
* // returns <Float64Array>[ 5.0, 4 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dsnannsumors;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dsnannsumors = main;
} else {
	dsnannsumors = tmp;
}


// EXPORTS //

module.exports = dsnannsumors;

// exports: { "ndarray": "dsnannsumors.ndarray" }
