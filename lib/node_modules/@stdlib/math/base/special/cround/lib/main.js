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
* Rounds each component of a double-precision complex floating-point number to the nearest integer.
*
* @param {Complex128} z - complex number
* @returns {Complex128} rounded complex number
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var v = cround( new Complex128( -4.2, 5.5 ) );
* // returns <Complex128>[ -4.0, 6.0 ]
*
* v = cround( new Complex128( 9.99999, 0.1 ) );
* // returns <Complex128>[ 10.0, 0.0 ]
*
* v = cround( new Complex128( 0.0, 0.0 ) );
* // returns <Complex128>[ 0.0, 0.0 ]
*
* v = cround( new Complex128( NaN, NaN ) );
* // returns <Complex128>[ NaN, NaN ]
*/
function cround( z ) {
	assign( real( z ), imag( z ), out, 1, 0 );
	return new Complex128( out[ 0 ], out[ 1 ] );
}


// EXPORTS //

module.exports = cround;
