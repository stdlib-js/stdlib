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

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Significance level (default: 0.05).
	*/
	alpha?: number;

	/**
	* Alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided').
	*/
	alternative?: 'two-sided' | 'less' | 'greater';

	/**
	* Mean under H0 (default: 0).
	*/
	mu?: number;
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
	* 1-alpha confidence interval for mean.
	*/
	ci: Array<number>;

	/**
	* Assumed mean value under H0.
	*/
	nullValue: number;

	/**
	* Standard error.
	*/
	sd: number;

	/**
	* Alternative hypothesis (`two-sided`, `less` or `greater`).
	*/
	alternative: string;

	/**
	* Name of test (`One-Sample z-test`).
	*/
	method: string;

	/**
	* Function to print formatted output.
	*/
	print: Function;
}


/**
* Computes a one-sample z-test.
*
* @param x - data array
* @param sigma - known standard deviation
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less` or `greater`; default: 'two-sided')
* @param options.mu - mean under H0 (default: 0)
* @throws sigma argument must be a positive number
* @throws must provide valid options
* @returns test result object
*
* @example
* var arr = [ 4, 4, 6, 6, 5 ];
* var out = ztest( arr, 1.0, {
*     'mu': 5
* });
*
* @example
* var arr = [ 4, 4, 6, 6, 5 ];
* var out = ztest( arr, 1.0, {
*     'alternative': 'greater'
* });
*/
declare function ztest( x: NumericArray, sigma: number, options?: Options ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = ztest;
