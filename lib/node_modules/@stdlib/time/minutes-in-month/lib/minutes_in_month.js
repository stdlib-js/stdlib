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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var lowercase = require( '@stdlib/string/lowercase' );
var isLeapYear = require( '@stdlib/assert/is-leap-year' );
var MINUTES_IN_DAY = require( '@stdlib/constants/time/minutes-in-day' );
var MINUTES_IN_MONTH = require( './minutes.json' );


// MAIN //

/**
* Returns the number of minutes in a month.
*
* @param {(string|Date|integer)} [month] - month
* @param {integer} [year] - year
* @throws {TypeError} first argument must be either a string, integer, or `Date` object
* @throws {Error} must provide a recognized month
* @throws {RangeError} an integer month argument must be on the interval `[1,12]`
* @throws {TypeError} second argument must be an integer
* @returns {integer} minutes in a month
*
* @example
* var num = minutesInMonth();
* // returns <number>
*
* @example
* var num = minutesInMonth( 2 );
* // returns <number>
*
* @example
* var num = minutesInMonth( 2, 2016 );
* // returns 41760
*
* @example
* var num = minutesInMonth( 2, 2017 );
* // returns 40320
*/
function minutesInMonth( month, year ) {
	var mins;
	var mon;
	var yr;
	var d;
	if ( arguments.length === 0 ) {
		// Note: cannot cache as application may cross over into a new year:
		d = new Date();
		mon = d.getMonth() + 1; // zero-based
		yr = d.getFullYear();
	} else if ( arguments.length === 1 ) {
		if ( isDateObject( month ) ) {
			d = month;
			mon = d.getMonth() + 1; // zero-based
			yr = d.getFullYear();
		} else if ( isString( month ) || isInteger( month ) ) {
			// Note: cannot cache as application may cross over into a new year:
			yr = ( new Date() ).getFullYear();
			mon = month;
		} else {
			throw new TypeError( 'invalid argument. First argument must be either a string, integer, or `Date` object. Value: `'+month+'`.' );
		}
	} else {
		if ( !isString( month ) && !isInteger( month ) ) {
			throw new TypeError( 'invalid argument. First argument must be either a string or integer. Value: `'+month+'`.' );
		}
		if ( !isInteger( year ) ) {
			throw new TypeError( 'invalid argument. Second argument must be an integer. Value: `'+year+'`.' );
		}
		mon = month;
		yr = year;
	}
	if ( isInteger( mon ) && (mon < 1 || mon > 12) ) {
		throw new RangeError( 'invalid argument. An integer month value must be on the interval `[1,12]`. Value: `'+mon+'`.' );
	}
	mon = lowercase( mon.toString() );
	mins = MINUTES_IN_MONTH[ mon ];
	if ( mins === void 0 ) {
		throw new Error( 'invalid argument. Must provide a recognized month. Value: `'+mon+'`.' );
	}
	// Check if February during a leap year...
	if ( mins === 40320 && isLeapYear( yr ) ) {
		mins += MINUTES_IN_DAY;
	}
	return mins;
}


// EXPORTS //

module.exports = minutesInMonth;
