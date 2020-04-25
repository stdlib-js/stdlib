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
* BLAS level 1 routine to compute the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @module @stdlib/blas/base/sdsdot
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdsdot = require( '@stdlib/blas/base/sdsdot' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdsdot( x.length, 0.0, x, 1, y, 1 );
* // returns -12.0
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdsdot = require( '@stdlib/blas/base/sdsdot' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
* // returns -12.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var sdsdot = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	sdsdot = tmp;
}


// EXPORTS //

module.exports = sdsdot;
