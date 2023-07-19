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
}

/**
* Treatment results.
*/
interface Treatment {
	/**
	* Treatment degrees of freedom.
	*/
	df: number;

	/**
	* Treatment sum of squares.
	*/
	ss: number;

	/**
	* Treatment mean sum of squares.
	*/
	ms: number;
}

/**
* Error results.
*/
interface ErrorResult {
	/**
	* Error degrees of freedom.
	*/
	df: number;

	/**
	*  Error sum of squares.
	*/
	ss: number;

	/**
	* Error mean sum of squares.
	*/
	ms: number;
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
	* Name of test.
	*/
	method: string;

	/**
	* Group means alongside sample sizes and standard errors.
	*/
	means: Object;

	/**
	* Treatment results.
	*/
	treatment: Treatment;

	/**
	* Error results.
	*/
	error: ErrorResult;

	/**
	* Function to print formatted output.
	*/
	print: Function;
}


/**
* Perform a one-way analysis of variance (ANOVA).
*
* @param x - measured values
* @param factor - array of treatments
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @throws must provide valid options
* @throws `factor` must have at least two unique elements
* @throws length of `x` must be greater than or equal to two
* @throws `x` and `factor` must have the same length
* @returns test results
*
* @example
* var x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
* var f = [ 'control', 'treatA', 'treatB', 'treatC', 'control', 'treatA', 'treatB', 'treatC', 'control', 'treatA', 'treatB', 'treatC' ];
* var out = anova1( x, f );
* // returns {...}
*/
declare function anova1( x: NumericArray, y: Array<any>, options?: Options ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = anova1;
