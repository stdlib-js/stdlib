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
	* Boolean indicating if the input array is already in sorted orde (default: false).
	*/
	sorted?: boolean;
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
* Computes a Kolmogorov-Smirnov goodness-of-fit test.
*
* @param x - input array holding numeric values
* @param y - either a CDF function or a string denoting the name of a distribution
* @param params - distribution parameters passed to reference CDF followed by an optional options object
* @throws must provide valid options
* @returns test result object
*
* @example
* var out = kstest( [ 2.0, 1.0, 5.0, -5.0, 3.0, 0.5, 6.0 ], 'normal', 0.0, 1.0 );
* // returns { 'pValue': ~0.015, 'statistic': ~0.556, ... }
*/
declare function kstest( x: NumericArray, y: Function | string, ...params: Array<number | Options> ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = kstest;
