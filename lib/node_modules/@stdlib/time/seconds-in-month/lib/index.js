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
* Determine the number of seconds in a month.
*
* @module @stdlib/time/seconds-in-month
*
* @example
* var secondsInMonth = require( '@stdlib/time/seconds-in-month' );
*
* var num = secondsInMonth();
* // returns <number>
*
* num = secondsInMonth( 2 );
* // returns <number>
*
* num = secondsInMonth( 2, 2016 );
* // returns 2505600
*
* num = secondsInMonth( 2, 2017 );
* // returns 2419200
*/

// MODULES //

var secondsInMonth = require( './seconds_in_month.js' );


// EXPORTS //

module.exports = secondsInMonth;
