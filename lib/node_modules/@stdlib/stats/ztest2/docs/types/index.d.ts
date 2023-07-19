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
	* Difference in means under H0 (default: 0).
	*/
	difference?: number;
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
	* Assumed difference in means under H0.
	*/
	nullValue: number;

	/**
	* Sample mean of `x`.
	*/
	xmean: number;

	/**
	* Sample mean of `y`.
	*/
	ymean: number;

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
* Computes a two-sample z-test.
*
* @param x - first data array
* @param y - second data array
* @param sigmax - known standard deviation of first group
* @param sigmay - known standard deviation of second group
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less` or `greater`; default: 'two-sided')
* @param options.difference - difference in means under H0 (default: 0)
* @throws sigmax argument must be a positive number
* @throws sigmay argument must be a positive number
* @throws must provide valid options
* @returns test result object
*
* @example
* var x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ]; // Drawn from N(2,1)
* var y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ]; // Drawn from N(3,2)
*
* var out = ztest2( x, y, 1.0, 2.0 );
* // returns {...}
*
* var table = out.print();
*/
declare function ztest2( x: NumericArray, y: NumericArray, sigmax: number, sigmay: number, options?: Options ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = ztest2;
