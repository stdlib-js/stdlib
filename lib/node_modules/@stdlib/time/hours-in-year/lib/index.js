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
* Determine the number of hours in a year according to the Gregorian calendar.
*
* @module @stdlib/time/hours-in-year
*
* @example
* var hoursInYear = require( '@stdlib/time/hours-in-year' );
*
* var num = hoursInYear();
* // returns <number>
*
* num = hoursInYear( 2016 );
* // returns 8784
*
* num = hoursInYear( 2017 );
* // returns 8760
*/

// MODULES //

var hoursInYear = require( './hours_in_year.js' );


// EXPORTS //

module.exports = hoursInYear;
