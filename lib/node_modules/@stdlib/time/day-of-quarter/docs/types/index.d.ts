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
* Returns the day of the quarter.
*
* ## Notes
*
* -   By default, the function returns the day of the quarter for the current date (according to local time). To determine the day of the quarter for a particular day, provide `month`, `day`, and `year` arguments.
* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
* -   The function also accepts a `Date` object.
*
* @param month - month (or `Date`)
* @param day - day
* @param year - year
* @throws must provide a recognized month
* @throws an integer month argument must be on the interval `[1,12]`
* @throws second argument must be greater than `0` and less than or equal to the maximum number of days in a month
* @returns day of the quarter
*
* @example
* var day = dayOfQuarter();
* // returns <number>
*
* day = dayOfQuarter( new Date() );
* // returns <number>
*
* day = dayOfQuarter( 12, 31, 2017 );
* // returns 92
*/
declare function dayOfQuarter( month?: string | number | Date, day?: number, year?: number ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = dayOfQuarter;
