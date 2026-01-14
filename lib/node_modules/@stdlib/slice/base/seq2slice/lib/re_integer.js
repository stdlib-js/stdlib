/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// MAIN //

/**
* Matches a character sequence for an integer value.
*
* Regular expression: `/^[-+]?\d+$/`
*
* -   `^`
*
*     -   start of input
*
* -   `[-+]?`
*
*     -   match a minus or plus sign (if present)
*
* -   `\d+`
*
*     -   match one or more digits
*
* -   `$`
*
*     -   end of input
*
* @private
* @name RE_INTEGER
* @type {RegExp}
*
* @example
* var bool = RE_INTEGER.test( '123' );
* // returns true
*
* bool = RE_INTEGER.test( '12.3' );
* // returns false
*/
var RE_INTEGER = /^[-+]?[0-9]+$/;


// EXPORTS //

module.exports = RE_INTEGER;
