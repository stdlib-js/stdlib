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
* Tests if a value is a duration string.
*
* ## Notes
*
* -   The function validates that a value is a string. For all other types, the function returns `false`.
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
* @param value - value to test
* @returns boolean indicating if a value is a duration string
*
* @example
* var bool = isDurationString( '1d' );
* // returns true
*
* @example
* var bool = isDurationString( '1d2h' );
* // returns true
*/
declare function isDurationString( value: any ): boolean;


// EXPORTS //

export = isDurationString;
