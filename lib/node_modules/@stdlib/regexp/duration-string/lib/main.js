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

// MAIN //

/**
* Returns a regular expression to match a duration string.
*
* ## Notes
*
* -   A duration string is a string containing a sequence of time units. A time unit is a nonnegative integer followed by a unit identifier. The following unit identifiers are supported:
*
*     -   `d`: days
*     -   `h`: hours
*     -   `m`: minutes
*     -   `s`: seconds
*     -   `ms`: milliseconds
*
*     For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes). Time units must be supplied in descending order of magnitude (i.e., days, hours, minutes, seconds, milliseconds).
*
* -   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.
*
* -   The regular expression captures the following groups:
*
*     1.  The days component.
*     2.  The hours component.
*     3.  The minutes component.
*     4.  The seconds component.
*     5.  The milliseconds component.
*
* @returns {RegExp} regular expression
*
* @example
* var RE_DURATION = reDurationString();
* // returns <RegExp>
*/
function reDurationString() {
	return /^(\d+d)?(\d+h)?(\d+m)?(\d+s)?(\d+ms)?$/i;
}


// EXPORTS //

module.exports = reDurationString;
