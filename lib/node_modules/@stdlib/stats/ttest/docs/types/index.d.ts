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
	* Mean under `H0` (default: 0).
	*/
	mu?: number;
}

/**
* Test result.
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
	* 1-alpha confidence interval for the mean.
	*/
	ci: Array<number>;

	/**
	* Assumed mean under H0 (or difference in means when `y` is supplied).
	*/
	nullValue: number;

	/**
	* Alternative hypothesis (`two-sided`, `less` or `greater`).
	*/
	alternative: string;

	/**
	* Degrees of freedom.
	*/
	df: number;

	/**
	* Sample mean of `x` or `x - y`, respectively.
	*/
	mean: number;

	/**
	* Standard error of the mean.
	*/
	sd: number;

	/**
	* Name of test.
	*/
	method: string;

	/**
	* Function to print formatted output.
	*/
	print: Function;
}

/**
* Interface for Student's t test.
*/
interface TTest {
	/**
	* Computes a paired Student's t test.
	*
	* @param x - input array
	* @param y - optional paired array
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
	* @param options.mu - mean under `H0` (default: 0)
	* @throws first argument must have at least two elements
	* @throws paired array must have the same length as the first argument
	* @throws must provide valid options
	* @returns test results
	*
	* @example
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	* var opts = {
	*     'alpha': 0.1
	* };
	* var out = ttest( x, opts );
	* // returns {...}
	*/
	( x: NumericArray, y: NumericArray, options?: Options ): Results;

	/**
	* Computes a one-sample Student's t test.
	*
	* @param x - input array
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
	* @param options.mu - mean under `H0` (default: 0)
	* @throws first argument must have at least two elements
	* @throws must provide valid options
	* @returns test results
	*
	* @example
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var opts = {
	*     'mu': 5.0
	* };
	* var out = ttest( x, opts );
	* // returns {...}
	*
	* @example
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var opts = {
	*     'alternative': 'greater'
	* };
	* var out = ttest( x, opts );
	* // returns {...}
	*/
	( x: NumericArray, options?: Options ): Results;
}


/**
* Computes a one-sample or paired Student's t test.
*
* @param x - input array
* @param y - optional paired array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
* @param options.mu - mean under `H0` (default: 0)
* @throws first argument must have at least two elements
* @throws paired array must have the same length as the first argument
* @throws second argument must be either a numeric array or an options object
* @throws must provide valid options
* @returns test results
*
* @example
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var opts = {
*     'mu': 5.0
* };
* var out = ttest( x, opts );
* // returns {...}
*
* @example
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
* var opts = {
*     'alpha': 0.1
* };
* var out = ttest( x, opts );
* // returns {...}
*/
declare var ttest: TTest;


// EXPORTS //

export = ttest;
