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
	* Boolean indicating whether to use Yates' continuity correction when provided a 2x2 contingency table (default: true).
	*/
	correct?: boolean;
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
	* Degrees of freedom.
	*/
	df: number;

	/**
	* Expected cell counts.
	*/
	expected: ndarray;

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
* Performs a chi-square independence test.
*
* @param x - two-way table of cell counts
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.correct - boolean indicating whether to use Yates' continuity correction when provided a 2x2 contingency table (default: true)
* @throws first argument must be an array of arrays or ndarray-like object with dimension two
* @returns test results
*
* @example
*
* @example
* var x = [ [ 20, 30 ], [ 30, 20 ] ];
* var out = chi2test( x );
* // returns { 'rejected': false, 'alpha': 0.05, 'pValue': ~0.072, ... }
*/
declare function chi2test( x: ndarray | Array<Array<number>>, options?: Options ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = chi2test;
