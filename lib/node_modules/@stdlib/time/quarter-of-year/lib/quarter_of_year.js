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
var QUARTERS = require( './quarters.json' );


// MAIN //

/**
* Returns the quarter of the year.
*
* @param {(integer|string|Date)} [month] - month (or `Date`)
* @throws {TypeError} must provide either a string, integer, or `Date` object
* @throws {Error} must provide a recognized month
* @throws {RangeError} an integer month argument must be on the interval `[1,12]`
* @returns {integer} quarter of the year
*
* @example
* var q = quarterOfYear( new Date() );
* // returns <number>
*
* @example
* var q = quarterOfYear( 4 );
* // returns 2
*
* @example
* var q = quarterOfYear( 'June' );
* // returns 2
*/
function quarterOfYear( month ) {
	var mon;
	var q;
	if ( arguments.length ) {
		if ( isDateObject( month ) ) {
			mon = month.getMonth() + 1; // zero-based
		} else if ( isString( month ) || isInteger( month ) ) {
			mon = month;
		} else {
			throw new TypeError( 'invalid argument. Must provide either a string, integer, or `Date` object. Value: `'+month+'`.' );
		}
	} else {
		// Note: cannot cache as application may cross over into a new year:
		mon = ( new Date() ).getMonth() + 1; // zero-based
	}
	if ( isInteger( mon ) && (mon < 1 || mon > 12) ) {
		throw new RangeError( 'invalid argument. An integer month value must be on the interval `[1,12]`. Value: `'+mon+'`.' );
	}
	mon = lowercase( mon.toString() );
	q = QUARTERS[ mon ];
	if ( q === void 0 ) {
		throw new Error( 'invalid argument. Must provide a recognized month. Value: `'+month+'`.' );
	}
	return q;
}


// EXPORTS //

module.exports = quarterOfYear;
