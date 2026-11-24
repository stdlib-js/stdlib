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
* Compute the Cartesian power for a single-precision floating-point strided array.
*
* @module @stdlib/blas/ext/base/scartesian-power
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var scartesianPower = require( '@stdlib/blas/ext/base/scartesian-power' );
*
* var x = new Float32Array( [ 1.0, 2.0 ] );
* var out = new Float32Array( 8 );
*
* scartesianPower( 'row-major', x.length, 2, x, 1, out, 2 );
* // out => <Float32Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var scartesianPower = require( '@stdlib/blas/ext/base/scartesian-power' );
*
* var x = new Float32Array( [ 1.0, 2.0 ] );
* var out = new Float32Array( 8 );
*
* scartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0 );
* // out => <Float32Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var scartesianPower;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	scartesianPower = main;
} else {
	scartesianPower = tmp;
}


// EXPORTS //

module.exports = scartesianPower;

// exports: { "ndarray": "scartesianPower.ndarray" }
