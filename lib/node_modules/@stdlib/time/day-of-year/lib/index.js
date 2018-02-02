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
* Determine the day of the year.
*
* @module @stdlib/time/day-of-year
*
* @example
* var dayOfYear = require( '@stdlib/time/day-of-year' );
*
* var day = dayOfYear();
* // returns <number>
*
* day = dayOfYear( new Date() );
* // returns <number>
*
* day = dayOfYear( 12, 31, 2017 );
* // returns 365
*
* day = dayOfYear( 12, 31, 2016 );
* // returns 366
*/

// MODULES //

var dayOfYear = require( './day_of_year.js' );


// EXPORTS //

module.exports = dayOfYear;
