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

var isDateObject = require( '@stdlib/assert/is-date-object' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;


// MAIN //

/**
* Tests whether a value corresponds to a leap year in the Gregorian calendar.
*
* ## Notes
*
* -   According to the Gregorian calendar, every year that is exactly divisible by `4` is a leap year, except those years which are also divisible by `100` and not by `400` (e.g., `1900`).
*
* @param {*} [value] - input value
* @returns {boolean} boolean whether a value corresponds to a leap year
*
* @example
* var bool = isLeapYear();
* // returns <boolean>
*
* @example
* var bool = isLeapYear( new Date() );
* // returns <boolean>
*
* @example
* var bool = isLeapYear( 1996 );
* // returns true
*
* @example
* var bool = isLeapYear( 2001 );
* // returns false
*/
function isLeapYear( value ) {
	var yr;
	if ( arguments.length ) {
		if ( isDateObject( value ) ) {
			yr = value.getFullYear();
		} else if ( isInteger( value ) ) {
			yr = value;
		} else {
			return false;
		}
	} else {
		// Note: cannot cache, as possible for application to cross into a new year:
		yr = ( new Date() ).getFullYear();
	}
	// Special case if year is a new century...
	if ( (yr % 100) === 0 ) {
		// Centuries are only leap years at the end of "leap cycles" which happen every `400` years:
		return ( (yr % 400) === 0 );
	}
	// All other years which are exactly divisible by `4` are leap years:
	return ( (yr % 4) === 0 );
}


// EXPORTS //

module.exports = isLeapYear;
