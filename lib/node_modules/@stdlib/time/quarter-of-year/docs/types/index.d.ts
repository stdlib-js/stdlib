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
* Returns the quarter of the year.
*
* ## Notes
*
* -   By default, the function returns the quarter of the year for the current month in the current year (according to local time). To determine the quarter for a particular month, provide either a month or a `Date` object.
* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
*
* @param month - month (or `Date`)
* @throws must provide a recognized month
* @throws an integer month argument must be on the interval `[1,12]`
* @returns quarter of the year
*
* @example
* var q = quarterOfYear( new Date() );
* // returns <number>
*
* @example
* var q = quarterOfYear( 4 );
* // returns 2
*
* @example
* var q = quarterOfYear( 'June' );
* // returns 2
*/
declare function quarterOfYear( month?: string | number | Date ): number;


// EXPORTS //

export = quarterOfYear;
