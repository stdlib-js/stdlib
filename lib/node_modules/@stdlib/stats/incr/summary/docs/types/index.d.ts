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

/// <reference types="@stdlib/types"/>

interface Summary {
	/**
	* Count.
	*/
	count: number;

	/**
	* Maximum value.
	*/
	max: number;

	/**
	* Minimum value.
	*/
	min: number;

	/**
	* Range.
	*/
	range: number;

	/**
	* Mid-range.
	*/
	midrange: number;

	/**
	* Sum.
	*/
	sum: number;

	/**
	* Arithmetic mean.
	*/
	mean: number;

	/**
	* Unbiased sample variance.
	*/
	variance: number;

	/**
	* Corrected sample standard deviation.
	*/
	stdev: number;

	/**
	* Corrected sample skewness.
	*/
	skewness: number;

	/**
	* Corrected sample excess kurtosis.
	*/
	kurtosis: number;
}

/**
* If provided a value, the accumulator function returns an updated summary; otherwise, the accumulator function returns the current summary.
*
* ## Notes
*
* -   The returned summary is an object containing the following fields:
*
*     -   count: count.
*     -   max: maximum value.
*     -   min: minimum value.
*     -   range: range.
*     -   midrange: mid-range.
*     -   sum: sum.
*     -   mean: arithmetic mean.
*     -   variance: unbiased sample variance.
*     -   stdev: corrected sample standard deviation.
*     -   skewness: corrected sample skewness.
*     -   kurtosis: corrected sample excess kurtosis.
*
* -   For long running accumulations or accumulations of large numbers, care should be taken to prevent overflow.
*
* @param x - value
* @returns updated summary
*/
type accumulator = ( x?: number ) => Summary | null;

/**
* Returns an accumulator function which incrementally computes a statistical summary.
*
* @returns accumulator function
*
* @example
* var accumulator = incrsummary();
*
* var summary = accumulator();
* // returns {}
*
* summary = accumulator( 2.0 );
* // returns {...}
*
* summary = accumulator( -5.0 );
* // returns {...}
*
* summary = accumulator();
* // returns {...}
*/
declare function incrsummary(): accumulator;


// EXPORTS //

export = incrsummary;
