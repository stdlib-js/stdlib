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

var computeExp = require( './cexp.js' );


// MAIN //

/**
* Computes the exponential function of a complex number.
*
* @param {(Array|TypedArray|Object)} [out] - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var v = cexp( 0.0, 0.0 );
* // returns [ 1.0, 0.0 ]
*
* @example
* var v = cexp( 1.0, 0.0 );
* // returns [ ~2.718, 0.0 ]
*
* @example
* var out = [ 0.0, 0.0 ];
*
* var v = cexp( out, 1.0, 0.0 );
* // returns [ ~2.718, 0.0 ]
*
* var bool = ( v === out );
* // returns true
*/
function cexp( out, re, im ) {
	if ( arguments.length === 2 ) {
		return computeExp( [ 0.0, 0.0 ], out, re );
	}
	return computeExp( out, re, im );
}


// EXPORTS //

module.exports = cexp;
