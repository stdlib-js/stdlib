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
	* Ratio of population variances under H0 (default: 1).
	*/
	ratio?: number;
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
	* 1-alpha confidence interval for the ratio of variances.
	*/
	ci: Array<number>;

	/**
	* Assumed ratio of variances under H0.
	*/
	nullValue: number;

	/**
	* Sample variance of `x`.
	*/
	xvar: number;

	/**
	* Sample variance of `y`.
	*/
	yvar: number;

	/**
	* Alternative hypothesis (`two-sided`, `less`, or `greater`).
	*/
	alternative: string;

	/**
	* Numerator degrees of freedom.
	*/
	dfX: number;

	/**
	* Denominator degrees of freedom.
	*/
	dfY: number;

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
* Computes a two-sample F-test for equal variances.
*
* @param x - first data array
* @param y - second data array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
* @param options.ratio - ratio of population variances under H0 (default: 1)
* @throws must provide valid options
* @returns test result object
*
* @example
* var x = [ 610, 610, 550, 590, 565, 570 ];
* var y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
*
* var out = vartest( x, y );
*/
declare function vartest( x: NumericArray, y: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = vartest;
