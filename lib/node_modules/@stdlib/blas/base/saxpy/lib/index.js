/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* BLAS level 1 routine to multiply a vector `x` and a constant and add the result to `y`.
*
* @module @stdlib/blas/base/saxpy
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var saxpy = require( '@stdlib/blas/base/saxpy' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var alpha = 5.0;
*
* saxpy( x.length, alpha, x, 1, y, 1 );
* // y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var saxpy = require( '@stdlib/blas/base/saxpy' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var alpha = 5.0;
*
* saxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var saxpy = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	saxpy = tmp;
}


// EXPORTS //

module.exports = saxpy;
