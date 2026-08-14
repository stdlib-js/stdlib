/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/**
* Interface describing a results object.
*/
interface Results {
	/**
	* Boolean indicating whether the null hypothesis was rejected.
	*/
	rejected: boolean;

	/**
	* Alternative hypothesis.
	*/
	alternative: string;

	/**
	* Significance level.
	*/
	alpha: number;

	/**
	* p-value.
	*/
	pValue: number;

	/**
	* Test statistic.
	*/
	statistic: number;

	/**
	* Confidence interval.
	*/
	ci: Float64Array | Float32Array;

	/**
	* Difference in means under the null hypothesis.
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
	* Test method.
	*/
	method: string;
}

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Number of digits to display after decimal points. Default: 4.
	*/
	digits?: number;

	/**
	* Boolean indicating whether to show the test decision.
	*/
	decision?: boolean;
}

/**
* Serializes a two-sample Z-test results object as a formatted string.
*
* ## Notes
*
* -   Example output:
*
*     ```text
*
*     Two-sample Z-test
*
*     Alternative hypothesis: True difference in means is less than 1.0
*
*        pValue: 0.0406
*        statistic: 9.9901
*        95% confidence interval: [9.7821, 10.4451]
*
*     Test Decision: Reject null in favor of alternative at 5% significance level
*
*     ```
*
* @param results - two-sample Z-test results object
* @param options - options object
* @param options.digits - number of digits to display after decimal points
* @param options.decision - boolean indicating whether to show the test decision
* @returns serialized results
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var results = {
*     'rejected': true,
*     'alpha': 0.05,
*     'pValue': 0.0132,
*     'statistic': 2.4773,
*     'nullValue': 0.0,
*     'xmean': 3.7561,
*     'ymean': 3.0129,
*     'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
*     'alternative': 'two-sided',
*     'method': 'Two-sample Z-test'
* };
*
* var str = res2str( results );
* // returns <string>
*/
declare function res2str( results: Results, options?: Options ): string;


// EXPORTS //

export = res2str;
