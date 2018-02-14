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

/**
* Test whether a value corresponds to a leap year in the Gregorian calendar.
*
* @module @stdlib/assert/is-leap-year
*
* @example
* var isLeapYear = require( '@stdlib/assert/is-leap-year' );
*
* var bool = isLeapYear();
* // returns <boolean>
*
* bool = isLeapYear( new Date() );
* // returns <boolean>
*
* bool = isLeapYear( 1996 );
* // returns true
*
* bool = isLeapYear( 2001 );
* // returns false
*/

// MODULES //

var isLeapYear = require( './main.js' );


// EXPORTS //

module.exports = isLeapYear;
