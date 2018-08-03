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
var floor = require( '@stdlib/math/base/special/floor' );


// VARIABLES //

var SHORT_YEAR = 52;
var LONG_YEAR = 53;


// FUNCTIONS //

/**
* Formula for determining if a year is "long" or "short".
*
* @private
* @param {integer} yr - year
* @returns {integer} result
*/
function p( yr ) {
	var v = yr + floor( yr/4 ) - floor( yr/100 ) + floor( yr/400 );
	return v % 7;
}


// MAIN //

/**
* Returns the number of ISO weeks in a year.
*
* @param {(integer|Date)} value - year or `Date` object
* @throws {TypeError} must provide either an integer or a `Date` object
* @returns {integer} number of ISO weeks in a year
*
* @example
* var num = isoWeeksInYear();
* // returns <number>
*
* @example
* var num = isoWeeksInYear( 2015 );
* // returns 53
*
* @example
* var num = isoWeeksInYear( 2017 );
* // returns 52
*/
function isoWeeksInYear( value ) {
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
	if ( p( yr ) === 4 || p( yr-1 ) === 3 ) {
		return LONG_YEAR;
	}
	return SHORT_YEAR;
}


// EXPORTS //

module.exports = isoWeeksInYear;
