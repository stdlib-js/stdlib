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

var replace = require( '@stdlib/string/replace' );
var Number = require( '@stdlib/number/ctor' );


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
* @returns {ComplexLike} an object containing real and imaginary parts
*
* @example
* var str = '4 + 6i';
*
* var z = parse( str );
* // returns { 're': 4, 'im': 6 }
*/
function parse( str ) {
	var imaginaryParts = [];
	var currentToken = '';
	var isImaginary;
	var realParts = [];
	var parts = [];
	var valid = true;
	var value;
	var part;
	var re = 0;
	var im = 0;

	var i;
	if ( typeof str !== 'string' ) {
		return null;
	}

	str = replace( str, ' ', '' );
	for ( i = 0; i < str.length; i++ ) {
		if ( (str[i] === '+' || str[i] === '-') && i !== 0 && str[i - 1] !== 'e' ) {
			parts.push( currentToken );
			currentToken = '';
		} else if ( i === str.length - 1 ) {
			currentToken += str[ i ];
			parts.push( currentToken );
		}
		currentToken += str[ i ];
	}

	for ( i = 0; i < parts.length; i++ ) { // Check for invalid parts...
		part = parts[ i ];
		isImaginary = false;

		// Check for Iota on either sides:
		if ( part[0] === 'i' ) {
			part = part.slice( 1 );
			isImaginary = true;
		} else if ( part[part.length - 1] === 'i' ) {
			part = part.slice( 0, part.length - 1 );
			isImaginary = true;
		}

		value = Number( part );
		if ( isNaN( value ) && part !== 'NaN' && part !== '+NaN' && part !== '-NaN' ) {
			valid = false;
			break;
		}

		if ( isImaginary ) {
			imaginaryParts.push( value );
		}
		else {
			realParts.push( value );
		}
	}

	if ( !valid ) {
		return null;
	}

	for ( i = 0; i < realParts.length; i++ ) {
		re += realParts[i];
	}
	for ( i = 0; i < imaginaryParts.length; i++ ) {
		im += imaginaryParts[i];
	}

	return {
		're': re,
		'im': im
	};
}


// EXPORTS //

module.exports = parse;
