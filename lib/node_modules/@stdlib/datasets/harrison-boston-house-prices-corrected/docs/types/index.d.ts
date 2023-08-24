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
	* Per capita crime rate by town.
	*/
	crim: number;

	/**
	* Proportion of residential land zoned for lots over 25,000 square feet.
	*/
	zn: number;

	/**
	* Proportion of non-retail business acres per town.
	*/
	indus: number;

	/**
	* Charles River dummy variable (`1` if tract bounds river; `0` otherwise).
	*/
	chas: number;

	/**
	* Nitric oxides concentration (parts per 10 million).
	*/
	nox: number;

	/**
	* Average number of rooms per dwelling.
	*/
	rm: number;

	/**
	* Proportion of owner-occupied units built prior to 1940.
	*/
	age: number;

	/**
	* Weighted distances to five Boston employment centers.
	*/
	dis: number;

	/**
	* Index of accessibility to radial highways.
	*/
	rad: number;

	/**
	* Full-value property-tax rate per $10,000.
	*/
	tax: number;

	/**
	* Pupil-teacher ratio by town.
	*/
	ptratio: number;

	/**
	* `1000(Bk-0.63)^2` where `Bk` is the proportion of blacks by town.
	*/
	b: number;

	/**
	* Percent lower status of the population.
	*/
	lstat: number;

	/**
	* Median value of owner-occupied homes in $1000's.
	*/
	medv: number;

	/**
	* Corrected median value of owner-occupied homes in $1000's.
	*/
	cmedv: number;
}

/**
* Returns a (corrected) dataset derived from information collected by the US Census Service concerning housing in Boston, Massachusetts (1978).
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
*
* @throws unable to read data
* @returns housing data
*
* @example
* var data = dataset();
* // returns [ {...}, {...}, ... ]
*/
declare function dataset(): Array<Observation>;


// EXPORTS //

export = dataset;
