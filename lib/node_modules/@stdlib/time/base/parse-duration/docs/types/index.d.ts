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

// TypeScript Version: 4.1

/**
* Interface describing a duration object.
*/
interface Duration {
	/**
	* Number of days.
	*/
	'days': number;

	/**
	* Number of hours.
	*/
	'hours': number;

	/**
	* Number of minutes.
	*/
	'minutes': number;

	/**
	* Number of seconds.
	*/
	'seconds': number;

	/**
	* Number of milliseconds.
	*/
	'milliseconds': number;
}

/**
* Parses a duration string into an object.
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
*     For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes).
*
* -   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.
*
* -   If a duration string does not contain a time unit, the respective property is set to `0`.
*
* -   An empty string is considered a valid duration string and is parsed as `0d0h0m0s0ms`.
*
* @param str - duration string
* @returns duration object
*
* @example
* var obj = parseDuration( '1m3s10ms' );
* // returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 }
*
* @example
* var obj = parseDuration( '1m3s' );
* // returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 0 }
*/
declare function parseDuration( str: string ): Duration;


// EXPORTS //

export = parseDuration;
