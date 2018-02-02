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
* Determine the number of days in a year according to the Gregorian calendar.
*
* @module @stdlib/time/days-in-year
*
* @example
* var daysInYear = require( '@stdlib/time/days-in-year' );
*
* var num = daysInYear();
* // returns <number>
*
* num = daysInYear( 2016 );
* // returns 366
*
* num = daysInYear( 2017 );
* // returns 365
*/

// MODULES //

var daysInYear = require( './days_in_year.js' );


// EXPORTS //

module.exports = daysInYear;
