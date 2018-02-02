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
* Determine the number of minutes in a month.
*
* @module @stdlib/time/minutes-in-month
*
* @example
* var minutesInMonth = require( '@stdlib/time/minutes-in-month' );
*
* var num = minutesInMonth();
* // returns <number>
*
* num = minutesInMonth( 2 );
* // returns <number>
*
* num = minutesInMonth( 2, 2016 );
* // returns 41760
*
* num = minutesInMonth( 2, 2017 );
* // returns 40320
*/

// MODULES //

var minutesInMonth = require( './minutes_in_month.js' );


// EXPORTS //

module.exports = minutesInMonth;
