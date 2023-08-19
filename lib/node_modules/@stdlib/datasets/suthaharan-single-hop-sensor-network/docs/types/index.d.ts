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
* Observation.
*/
interface Observation {
	/**
	* Reading number.
	*/
	reading: number;

	/**
	* Mote identification number.
	*/
	mote_id: number;

	/**
	* Indicator specifying whether a mote is an indoor (1) or an outdoor (0) sensor.
	*/
	indoor: number;

	/**
	* Temperature corrected relative humidity, ranging from 0-100%.
	*/
	humidity: number;

	/**
	* Temperature in degrees Celsius.
	*/
	temperature: number;

	/**
	* Indicator specifying whether data is "normal" (0) or is influenced by an introduced event (1).
	*/
	label: number;
}


/**
* Returns a dataset consisting of labeled wireless sensor network data set collected from a simple single-hop wireless sensor network deployment using TelosB motes.
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
*
* @throws unable to read data
* @returns dataset
*
* @example
* var d = dataset();
* // returns [ {...}, {...}, ... ]
*/
declare function dataset(): Array<Observation>;


// EXPORTS //

export = dataset;
