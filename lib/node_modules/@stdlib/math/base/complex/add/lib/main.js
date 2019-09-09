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

var add = require( './cadd.js' );


// MAIN //

/**
* Adds two complex numbers.
*
* @param {(Array|TypedArray|Object)} [out] - output array
* @param {number} re1 - real component
* @param {number} im1 - imaginary component
* @param {number} re2 - real component
* @param {number} im2 - imaginary component
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var out = new Float64Array( 2 );
* var v = cadd( out, 5.0, 3.0, -2.0, 1.0 );
* // returns <Float64Array>[ 3.0, 4.0 ]
*/
function cadd( out, re1, im1, re2, im2 ) {
	if ( arguments.length === 4 ) {
		return add( [ 0.0, 0.0 ], out, re1, im1, re2 );
	}
	return add( out, re1, im1, re2, im2 );
}


// EXPORTS //

module.exports = cadd;
