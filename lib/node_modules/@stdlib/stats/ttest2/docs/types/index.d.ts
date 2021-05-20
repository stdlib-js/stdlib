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

	/**
	* Whether variances are `equal` or `unequal` under H0 (default: 'unequal').
	*/
	variance?: 'equal' | 'unequal';
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
	* Degrees of freedom.
	*/
	df: number;

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
* Computes a two-sample Student's t test.
*
* @param x - first data array
* @param y - second data array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less` or `greater`; default: 'two-sided')
* @param options.difference - difference in means under H0 (default: 0)
* @param options.variance - whether variances are `equal` or `unequal` under H0 (default: 'unequal')
* @throws must provide valid options
* @returns test result object
*
* @example
* var incrspace = require( `@stdlib/array/incrspace` );
*
* var a = incrspace( 1, 11, 1 );
* var b = incrspace( 7, 21, 1 );
*
* var out = ttest2( a, b );
* var table = out.print();
*/
declare function ttest2( x: NumericArray, y: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = ttest2;
