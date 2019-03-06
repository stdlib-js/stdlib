/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Tests whether a value corresponds to a leap year in the Gregorian calendar.
*
* ## Notes
*
* -   According to the Gregorian calendar, every year that is exactly divisible by `4` is a leap year, except those years which are also divisible by `100` and not by `400` (e.g., `1900`).
*
* @param value - input value
* @returns boolean whether a value corresponds to a leap year
*
* @example
* var bool = isLeapYear();
* // returns <boolean>
*
* @example
* var bool = isLeapYear( new Date() );
* // returns <boolean>
*
* @example
* var bool = isLeapYear( 1996 );
* // returns true
*
* @example
* var bool = isLeapYear( 2001 );
* // returns false
*/
declare function isLeapYear( value?: any ): boolean;


// EXPORTS //

export = isLeapYear;
