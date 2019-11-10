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
* Returns the number of minutes in a month.
*
* ## Notes
*
* -   By default, the function returns the number of minutes in the current month of the current year (according to local time). To determine the number of minutes for a particular month and year, provide `month` and `year` arguments.
* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
*
* @param month - month
* @param year - year
* @throws must provide a recognized month
* @throws an integer month argument must be on the interval `[1,12]`
* @returns minutes in a month
*
* @example
* var num = minutesInMonth();
* // returns <number>
*
* @example
* var num = minutesInMonth( 2 );
* // returns <number>
*
* @example
* var num = minutesInMonth( 2, 2016 );
* // returns 41760
*
* @example
* var num = minutesInMonth( 2, 2017 );
* // returns 40320
*/
declare function minutesInMonth( month?: string | number | Date, year?: number ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = minutesInMonth;
