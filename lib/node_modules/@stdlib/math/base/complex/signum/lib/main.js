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

var signum = require( './csignum.js' );


// MAIN //

/**
* Evaluates the signum function of a complex number.
*
* @param {(Array|TypedArray|Object)} [out] - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} function result
*
* @example
* var v = csignum( -4.2, 5.5 );
* // returns [ -0.6069136033622302, 0.79476781392673 ]
*
* @example
* var out = new Array( 2 );
*
* var v = csignum( out, -4.2, 5.5 );
* // returns [ -0.6069136033622302, 0.79476781392673 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var v = csignum( 0.0, 0.0 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var v = csignum( NaN, NaN );
* // returns [ NaN, NaN ]
*/
function csignum( out, re, im ) {
	if ( arguments.length === 2 ) {
		return signum( [ 0.0, 0.0 ], out, re );
	}
	return signum( out, re, im );
}


// EXPORTS //

module.exports = csignum;
