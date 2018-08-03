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
var isLeapYear = require( '@stdlib/assert/is-leap-year' );


// VARIABLES //

var NON_LEAP_YEAR = 31536000|0; // 365 * 86400
var LEAP_YEAR = 31622400|0; // 366 * 86400


// MAIN //

/**
* Returns the number of seconds in a year.
*
* @param {(integer|Date)} value - year or `Date` object
* @throws {TypeError} must provide either an integer or a `Date` object
* @returns {integer} number of seconds in a year
*
* @example
* var num = secondsInYear();
* // returns <number>
*
* @example
* var num = secondsInYear( 2016 );
* // returns 31622400
*
* @example
* var num = secondsInYear( 2017 );
* // returns 31536000
*/
function secondsInYear( value ) {
	var yr;
	if ( arguments.length ) {
		if ( isDateObject( value ) ) {
			yr = value.getFullYear();
		} else if ( isInteger( value ) ) {
			yr = value;
		} else {
			throw new TypeError( 'invalid argument. Must provide either an integer or a `Date` object. Value: `'+value+'`.' );
		}
	} else {
		// Note: cannot cache as application could cross over into a new year:
		yr = ( new Date() ).getFullYear();
	}
	if ( isLeapYear( yr ) ) {
		return LEAP_YEAR;
	}
	return NON_LEAP_YEAR;
}


// EXPORTS //

module.exports = secondsInYear;
