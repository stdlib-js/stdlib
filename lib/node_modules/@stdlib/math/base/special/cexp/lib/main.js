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

// MODULES //

var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var assign = require( './assign.js' );


// VARIABLES //

var out = new Float64Array( 2 );


// MAIN //

/**
* Evaluates the exponential function for a double-precision complex floating-point number.
*
* @param {Complex128} z - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var cexp = require( '@stdlib/math/base/special/cexp' );
*
* var v = cexp( new Complex128( 0.0, 0.0 ) );
* // returns <Complex128>[ 1.0, 0.0 ]
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var cexp = require( '@stdlib/math/base/special/cexp' );
*
* var v = cexp( new Complex128( 1.0, 0.0 ) );
* // returns <Complex128>[ ~2.718, 0.0 ]
*/
function cexp( z ) {
	assign( real( z ), imag( z ), out, 1, 0 );
	return new Complex128( out[ 0 ], out[ 1 ] );
}


// EXPORTS //

module.exports = cexp;
