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
	* Method governing how zero-differences are handled (`pratt`, `wilcox`, or `zsplit`; default: 'wilcox').
	*/
	zeroMethod?: 'pratt' | 'wilcox' | 'zsplit';

	/**
	* Continuity correction adjusting the Wilcoxon rank statistic by 0.5 towards the mean (default: true).
	*/
	correction?: boolean;

	/**
	* Whether to force using the exact distribution instead of a normal approximation when there are more than fifty data points (default: false).
	*/
	exact?: boolean;

	/**
	* Location parameter under H0 (default: 0).
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
	* Assumed mean under H0 (or difference in means when `y` is supplied).
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
* Computes a Wilcoxon signed rank test.
*
* @param x - data array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
* @param options.zeroMethod - method governing how zero-differences are handled (`pratt`, `wilcox`, or `zsplit`; default: 'wilcox')
* @param options.correction - continuity correction adjusting the Wilcoxon rank statistic by 0.5 towards the mean (default: true)
* @param options.exact - whether to force using the exact distribution instead of a normal approximation when there are more than fifty data points (default: false)
* @param options.mu - location parameter under H0 (default: 0)
* @throws must provide valid options
* @returns test result object
*
* @example
* var x = [ 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 ];
* var out = wilcoxon( x, {
*     'mu': 2
* });
*
* @example
* var x = [ 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 ];
* var out = wilcoxon( x, {
*     'alternative': 'greater'
* });
*/
declare function wilcoxon( x: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length

/**
* Computes a Wilcoxon signed rank test.
*
* @param x - data array
* @param y - optional paired data array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
* @param options.zeroMethod - method governing how zero-differences are handled (`pratt`, `wilcox`, or `zsplit`; default: 'wilcox')
* @param options.correction - continuity correction adjusting the Wilcoxon rank statistic by 0.5 towards the mean (default: true)
* @param options.exact - whether to force using the exact distribution instead of a normal approximation when there are more than fifty data points (default: false)
* @param options.mu - location parameter under H0 (default: 0)
* @throws must provide valid options
* @returns test result object
*
* @example
* var x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
* var y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
* var out = wilcoxon( x, y );
*/
declare function wilcoxon( x: NumericArray, y: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = wilcoxon;
