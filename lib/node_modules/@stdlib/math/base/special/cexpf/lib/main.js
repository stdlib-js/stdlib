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

// MODULES //

var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Float32Array = require( '@stdlib/array/float32' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var assign = require( './assign.js' );


// VARIABLES //

var out = new Float32Array( 2 );


// MAIN //

/**
* Evaluates the exponential function for a single-precision complex floating-point number.
*
* @param {Complex64} z - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cexpf = require( '@stdlib/math/base/special/cexpf' );
*
* var v = cexpf( new Complex64( 0.0, 0.0 ) );
* // returns <Complex64>[ 1.0, 0.0 ]
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cexpf = require( '@stdlib/math/base/special/cexpf' );
*
* var v = cexpf( new Complex64( 1.0, 0.0 ) );
* // returns <Complex64>[ ~2.718, 0.0 ]
*/
function cexpf( z ) {
	assign( realf( z ), imagf( z ), out, 1, 0 );
	return new Complex64( out[ 0 ], out[ 1 ] );
}


// EXPORTS //

module.exports = cexpf;
