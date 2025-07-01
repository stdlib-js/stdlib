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
* Serializes a two-sample Z-test results object as a JSON object.
*
* @param results - two-sample Z-test results object
* @returns serialized object
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
* var obj = res2json( results );
* // returns {...}
*/
declare function res2json( results: Results ): Results;


// EXPORTS //

export = res2json;
