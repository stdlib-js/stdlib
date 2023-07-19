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

/**
* A [successes, failures] tuple.
*/
type Tuple = [ number, number ];

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
	* Success probability under H0 (default: 0.5)
	*/
	p?: number;
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
	* Sample proportion.
	*/
	statistic: number;

	/**
	* 1-alpha confidence interval for the success probability.
	*/
	ci: Array<number>;

	/**
	* Assumed success probability under H0.
	*/
	nullValue: number;

	/**
	* Alternative hypothesis (`two-sided`, `less`, or `greater`).
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
* Interface of test for the success probability in a Bernoulli experiment.
*/
interface BinomialTest {
	/**
	* Computes an exact test for the success probability in a Bernoulli experiment.
	*
	* @param x - number of successes or two-element array with successes and failures
	* @param n - total number of observations
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
	* @param options.p - success probability under H0 (default: 0.5)
	* @throws must provide valid options
	* @returns test results
	*
	* @example
	* var out = binomialTest( 682, 925 );
	* // returns {...}
	*
	* out = binomialTest( 682, 925, {
	*     'p': 0.75,
	*     'alpha': 0.05
	* });
	* // returns {...}
	*/
	( x: number, n: number, options?: Options ): Results;

	/**
	* Computes an exact test for the success probability in a Bernoulli experiment.
	*
	* @param x - number of successes or two-element array with successes and failures
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
	* @param options.p - success probability under H0 (default: 0.5)
	* @throws must provide valid options
	* @returns test results
	*
	* @example
	* var out = binomialTest( [ 682, 243 ] );
	* // returns {...}
	*
	* out = binomialTest( [ 682, 243 ], {
	*     'p': 0.75,
	*     'alpha': 0.05
	* });
	* // returns {...}
	*/
	( x: Tuple, options?: Options ): Results;
}


/**
* Computes an exact test for the success probability in a Bernoulli experiment.
*
* @param x - number of successes or two-element array with successes and failures
* @param n - total number of observations
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
* @param options.p - success probability under H0 (default: 0.5)
* @throws must provide valid options
* @returns test results
*
* @example
* var out = binomialTest( 682, 925 );
* // returns {...}
*
* @example
* var out = binomialTest( [ 682, 243 ] );
* // returns {...}
*/
declare var binomialTest: BinomialTest;


// EXPORTS //

export = binomialTest;
