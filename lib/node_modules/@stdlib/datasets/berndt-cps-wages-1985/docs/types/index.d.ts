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
* Data for individual worker.
*/
type Observation = {
	/**
	* Number of years of education.
	*/
	education: number;

	/**
	* Indicator variable for southern region (`1` if a person lives in the South; `0` if a person does not live in the South).
	*/
	south: number;

	/**
	* Gender of the person.
	*/
	gender: string;

	/**
	* Number of years of work experience.
	*/
	experience: number;

	/**
	* Indicator variable for union membership (`1` if union member; `0` if not a union member).
	*/
	union: number;

	/**
	* Log-transformed wage (in dollars per hour).
	*/
	wage: number;

	/**
	* Age (in years).
	*/
	age: number;

	/**
	* Ethnicity/Race (`'white'`, `'hispanic'`, and `'other'`).
	*/
	race: string;

	/**
	* Occupational category (`'management'`, `'sales'`, `'clerical'`, `'service'`, `'professional'`, and `'other'`).
	*/
	occupation: string;

	/**
	* Sector (`'other'`, `'manufacturing'`, or `'construction'`).
	*/
	sector: string;

	/**
	* Marital status (`0` if unmarried; `1` if married).
	*/
	married: number;
};

/**
* Returns a random sample of 534 workers from the Current Population Survey (CPS) from 1985.
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
* var data = dataset();
* // returns [ {...}, {...}, ... ]
*/
declare function dataset(): Array<Observation>;


// EXPORTS //

export = dataset;
