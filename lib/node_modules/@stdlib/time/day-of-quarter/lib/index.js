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
* Determine the day of the quarter.
*
* @module @stdlib/time/day-of-quarter
*
* @example
* var dayOfQuarter = require( '@stdlib/time/day-of-quarter' );
*
* var day = dayOfQuarter();
* // returns <number>
*
* day = dayOfQuarter( new Date() );
* // returns <number>
*
* day = dayOfQuarter( 12, 31, 2017 );
* // returns 92
*/

// MODULES //

var dayOfQuarter = require( './day_of_quarter.js' );


// EXPORTS //

module.exports = dayOfQuarter;
