/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var reDurationString = require( './main.js' );


// MAIN //

/**
* Matches a duration string.
*
* Regular Expression: `/^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/`
*
* -   `^`
*     -   start of input
*
* -   `(\d+d)?`
*     -   capture a group of one or more digits followed by the literal character `d` for the number of days (optional)

* -   `(\d+h)?`
*     -   capture a group of one or more digits followed by the literal character `h` for the number of hours (optional)

* -   `(\d+m)?`
*     -   capture a group of one or more digits followed by the literal character `m` for the number of minutes (optional)

* -   `(\d+s)?`
*     -   capture a group of one or more digits followed by the literal character `s` for the number of seconds (optional)

* -   `(\d+ms)?`
*     -   capture a group of one or more digits followed by the literal character `ms` for the number of milliseconds (optional)
*
* -   `$`
*     -   end of input
*
* @constant
* @type {RegExp}
* @default /^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/
*/
var RE_DURATION = reDurationString();


// EXPORTS //

module.exports = RE_DURATION;
