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
* Interface defining function options.
*/
interface Options {
	/**
	* Significance level (default: 0.05).
	*/
	alpha?: number;

	/**
	* Alternative hypothesis (`two-sided`, `min`, or `max`; default: 'two-sided').
	*/
	alternative?: 'two-sided' | 'min' | 'max';
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
	* Critical value.
	*/
	criticalValue: number;

	/**
	* Test statistic.
	*/
	statistic: number;

	/**
	* Sample mean.
	*/
	mean: number;

	/**
	* Corrected sample standard deviation.
	*/
	sd: number;

	/**
	* Sample minimum.
	*/
	min: number;

	/**
	* Sample maximum.
	*/
	max: number;

	/**
	* Degrees of freedom.
	*/
	df: number;

	/**
	* Alternative hypothesis (`two-sided`, `less`, or `greater`).
	*/
	alt: string;

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
* If provided a value, the accumulator function returns updated Grubbs' test results. If not provided a value, the accumulator function returns the current Grubbs' test results.
*
* @param x - new value
* @returns test results or null
*/
type accumulator = ( x?: number ) => Results | null;

/**
* Returns an accumulator function which incrementally performs a moving Grubbs' test for detecting outliers.
*
* @param W - window size
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.alternative - alternative hypothesis ('two-sided', 'min', 'max'; default: 'two-sided')
* @throws first argument must be a positive integer
* @throws first argument must be greater than or equal to 3
* @throws must provide valid options
* @throws `alpha` option must be on the interval `[0,1]`
* @returns accumulator function
*
* @example
* var rnorm = require( `@stdlib/random/base/normal` );
*
* var accumulator;
* var opts;
* var i;
*
* accumulator = incrmgrubbs( 20, opts );
*
* for ( i = 0; i < 200; i++ ) {
*     res = accumulator( rnorm( 10.0, 5.0 ) );
* }
*/
declare function incrmgrubbs( W: number, options?: Options ): accumulator;


// EXPORTS //

export = incrmgrubbs;
