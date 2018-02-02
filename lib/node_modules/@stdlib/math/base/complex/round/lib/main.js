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

var round = require( './cround.js' );


// MAIN //

/**
* Rounds a complex number to the nearest integer.
*
* @param {(Array|TypedArray|Object)} [out] - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} rounded components
*
* @example
* var v = cround( -4.2, 5.5 );
* // returns [ -4.0, 6.0 ]
*
* @example
* var out = new Array( 2 );
*
* var v = cround( out, -4.2, 5.5 );
* // returns [ -4.0, 6.0 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var v = cround( 9.99999, 0.1 );
* // returns [ 10.0, 0.0 ]
*
* @example
* var v = cround( 0.0, 0.0 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var v = cround( NaN, NaN );
* // returns [ NaN, NaN ]
*/
function cround( out, re, im ) {
	if ( arguments.length === 2 ) {
		return round( [ 0.0, 0.0 ], out, re );
	}
	return round( out, re, im );
}


// EXPORTS //

module.exports = cround;
