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
	* Correlation under H0 (default: 0.0).
	*/
	rho?: number;
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
	* 1-alpha confidence interval for the Pearson product-moment correlation coefficient. The confidence interval is calculated using Fisher's z-transform.
	*/
	ci: Array<number>;

	/**
	* Assumed correlation under H0 (equal to the supplied `rho` option).
	*/
	nullValue: number;

	/**
	* Alternative hypothesis (`two-sided`, `less` or `greater`).
	*/
	alternative: string;

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
* Computes a Pearson product-moment correlation test between paired samples.
*
* ## Notes
*
* -   By default, the function performs a t-test for the null hypothesis that the data in arrays or typed arrays `x` and `y` is not correlated. A test against a different population correlation can be carried out by supplying the `rho` option. In this case, a test using the Fisher's z transform is conducted.
* -   The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test.
*
* @param x - first data array
* @param y - second data array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less` or `greater`; default: 'two-sided')
* @param options.rho - correlation under H0 (default: 0.0)
* @throws x and y must be arrays of the same length
* @throws x and y must contain at least four elements
* @throws must provide valid options
* @returns test result object
*
* @example
* var x = [ 2, 4, 3, 1, 2, 3 ];
* var y = [ 3, 2, 4, 1, 2, 4 ];
* var out = pcorrTest( x, y );
*/
declare function pcorrTest( x: NumericArray, y: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = pcorrTest;
