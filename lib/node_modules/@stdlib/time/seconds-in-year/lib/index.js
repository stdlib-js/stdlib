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
* Determine the number of seconds in a year according to the Gregorian calendar.
*
* @module @stdlib/time/seconds-in-year
*
* @example
* var secondsInYear = require( '@stdlib/time/seconds-in-year' );
*
* var num = secondsInYear();
* // returns <number>
*
* num = secondsInYear( 2016 );
* // returns 31622400
*
* num = secondsInYear( 2017 );
* // returns 31536000
*/

// MODULES //

var secondsInYear = require( './seconds_in_year.js' );


// EXPORTS //

module.exports = secondsInYear;
