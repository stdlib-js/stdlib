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

var reDecimalNumber = require( './main.js' );


// MAIN //

/**
* Matches a decimal number.
*
* Regular expression: `/[-+]{0,1}[0-9]*\.[0-9]+/`
*
* -   `[-+]{0,1}`
*     -   match a minus or plus sign zero or one time
*
* -   `[0-9]*`
*     -   match the characters `[0-9]` zero or more times
*
* -   `\.`
*     -   match a `.` literal
*
* -   `[0-9]+`
*     -   match the characters `[0-9]` one or more times
*
* @constant
* @type {RegExp}
* @default /[-+]{0,1}[0-9]*\.[0-9]+/
*/
var REGEXP = reDecimalNumber();


// EXPORTS //

module.exports = REGEXP;
