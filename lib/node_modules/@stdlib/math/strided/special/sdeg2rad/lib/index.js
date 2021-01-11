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
* Convert each element in a single-precision floating-point strided array `x` from degrees to radians and assign the results to elements in a single-precision floating-point strided array `y`.
*
* @module @stdlib/math/strided/special/sdeg2rad
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdeg2rad = require( '@stdlib/math/strided/special/sdeg2rad' );
*
* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* sdeg2rad( x.length, x, 1, y, 1 );
* // y => <Float32Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdeg2rad = require( '@stdlib/math/strided/special/sdeg2rad' );
*
* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* sdeg2rad.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var main = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	main = tmp;
}


// EXPORTS //

module.exports = main;
