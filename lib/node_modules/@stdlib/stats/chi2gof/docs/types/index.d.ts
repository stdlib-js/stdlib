/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { NumericArray } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Significance level (default: 0.05).
	*/
	alpha?: number;

	/**
	* Degrees of freedom adjustment (default: 0).
	*/
	ddof?: number;

	/**
	* Number of Monte Carlo iterations (default: 500).
	*/
	iterations?: number;

	/**
	* Boolean indicating whether to compute p-values by Monte Carlo simulation (default: false).
	*/
	simulate?: boolean;
}

/**
* Test result object.
*/
interface Results {
	/**
	* Used significance level.
	*/
	alpha: number;

	/**
	* Test decision.
	*/
	rejected: boolean;

	/**
	* p-value of the test.
	*/
	pValue: number;

	/**
	* Value of test statistic.
	*/
	statistic: number;

	/**
	* Degrees of freedom.
	*/
	df: number | null;

	/**
	* Name of test.
	*/
	method: string;

	/**
	* Prints formatted output.
	*/
	toString: Function;

	/**
	* Serializes results as JSON.
	*/
	toJSON: Function;
}


/**
* Performs a chi-square goodness-of-fit test.
*
* @param x - observation frequencies
* @param y - expected frequencies or a discrete probability distribution name
* @param args - probability mass function (PMF) arguments followed by an optional options object
* @throws first argument must be an array-like object or a 1-dimensional array containing nonnegative integers
* @throws second argument must be either an array-like object (or a 1-dimensional array) of nonnegative numbers, an array-like object (or a 1-dimensional array) of probabilities summing to one, or a discrete probability distribution name
* @throws must provide valid options
* @throws first and second arguments must have the same length
* @throws first argument must contain at least one element greater than zero
* @returns test results
*
* @example
* var x = [ 89, 37, 30, 28, 2 ];
* var p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
*
* var out = chi2gof( x, p );
*
* var o = out.toJSON();
* // returns { 'pValue': ~0.0406, 'statistic': ~9.9901, ... }
*/
declare function chi2gof( x: NumericArray | ndarray, y: NumericArray | ndarray | string, ...args: Array<number | Options> ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = chi2gof;
