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

var sub = require( './csub.js' );


// MAIN //

/**
* Subtracts two complex numbers.
*
* @param {(Array|TypedArray|Object)} [out] - output array
* @param {number} re1 - real component
* @param {number} im1 - imaginary component
* @param {number} re2 - real component
* @param {number} im2 - imaginary component
* @returns {(Array|TypedArray|Object)} real and imaginary components
*
* @example
* var v = csub( 5.0, 3.0, -2.0, 1.0 );
* // returns [ 7.0, 2.0 ]
*
* @example
* var out = new Array( 2 );
*
* var v = csub( out, 5.0, 3.0, -2.0, 1.0 );
* // returns [ 7.0, 2.0 ]
*
* var bool = ( v === out );
* // returns true
*/
function csub( out, re1, im1, re2, im2 ) {
	if ( arguments.length === 4 ) {
		return sub( [ 0.0, 0.0 ], out, re1, im1, re2 );
	}
	return sub( out, re1, im1, re2, im2 );
}


// EXPORTS //

module.exports = csub;
