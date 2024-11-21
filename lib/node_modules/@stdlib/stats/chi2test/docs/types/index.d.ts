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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';
import { Matrix } from '@stdlib/types/ndarray';

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
	* Degrees of freedom.
	*/
	df: number;

	/**
	* Expected frequencies.
	*/
	expected: Matrix<number>;

	/**
	* Name of test.
	*/
	method: string;

	/**
	* Serializes results as formatted test output.
	*/
	toString: Function; // FIXME: provide better type

	/**
	* Serializes results as JSON.
	*/
	toJSON: Function; // FIXME: provide better type
}

/**
* Performs a chi-square independence test.
*
* @param x - two-way table of observed frequencies
* @param options - function options
* @returns test results
*
* @example
* var x = [ [ 20, 30 ], [ 30, 20 ] ];
*
* var out = chi2test( x );
*
* var o = out.toJSON();
* // returns { 'rejected': false, 'alpha': 0.05, 'pValue': ~0.072, ... }
*/
declare function chi2test( x: Matrix<number> | Array<Collection<number>>, options?: Options ): Results;


// EXPORTS //

export = chi2test;
