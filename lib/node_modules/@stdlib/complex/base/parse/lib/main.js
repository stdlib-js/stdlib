/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var regexp = require( './regexp.js' );


// MAIN //

/**
* Parses a string representing a complex number into a complex-like object.
*
* ## Notes
*
* -   The function returns an object containing the following properties:
*
*     -   **re**: real component
*     -   **im**: imaginary component
*
* @param {string} str - input string
* @returns {(ComplexLike|null)} an object containing real and imaginary parts
*
* @example
* var str = '4 + 6i';
*
* var z = parse( str );
* // returns { 're': 4, 'im': 6 }
*/
function parse( str ) {
	var match;
	var re;
	var im;

	if ( !isString( str ) || str === '' ) {
		return null;
	}
	// OPTIMIZE: Consider implementing an alternative parser to improve performance over regular expression
	match = str.match( regexp() ); // [ full_match, real_sign, real_value, imag_sign, imag_value, imag_suffix ]
	if ( match === null ) {
		return null;
	}
	// Real component:
	if ( match[ 2 ] ) {
		re = ( match[ 1 ] === '-' ) ? -1.0 : 1.0;
		re *= parseFloat( match[ 2 ] );
	} else {
		re = 0.0;
	}
	// Imaginary component:
	if ( match[ 5 ] ) {
		im = ( match[ 3 ] === '-' ) ? -1.0 : 1.0;
		if ( match[ 4 ] ) {
			im *= parseFloat( match[ 4 ] );
		}
	} else {
		im = 0.0;
	}
	return {
		're': re,
		'im': im
	};
}


// EXPORTS //

module.exports = parse;
