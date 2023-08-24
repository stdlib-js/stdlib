/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Data point.
*/
interface Observation {
	/**
	* Collection date (month/day/year; e.g., 01/01/1980).
	*/
	date: string;

	/**
	* Wage rates for hourly and non-hourly workers.
	*/
	all_workers: number;

	/**
	* Wage rates for hourly workers.
	*/
	hourly_workers: number;

	/**
	* Wage rates for non-hourly workers.
	*/
	non_hourly_workers: number;

	/**
	* Wage rates for workers with less than a high school education.
	*/
	less_than_high_school: number;

	/**
	* Wage rates for workers with a high school education.
	*/
	high_school: number;

	/**
	* Wage rates for workers with some college education.
	*/
	some_college: number;

	/**
	* Wage rates for workers with a college education.
	*/
	college: number;

	/**
	* Wage rates for workers in the construction industry.
	*/
	construction: number;

	/**
	* Wage rates for workers in the finance industry.
	*/
	finance: number;

	/**
	* Wage rates for workers in the manufacturing industry.
	*/
	manufacturing: number;
}


/**
* Returns wage rates of U.S. workers that have not changed jobs within the year.
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
*
* @throws unable to read data
* @returns data
*
* @example
* var data = wages();
* // returns [ {...}, {...}, ... ]
*/
declare function wages(): Array<Observation>;


// EXPORTS //

export = wages;
