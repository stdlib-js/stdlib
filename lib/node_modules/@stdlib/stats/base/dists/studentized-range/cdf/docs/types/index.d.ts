/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Evaluates the cumulative distribution function (CDF) for a studentized range distribution.
*
* @param q - quantile of the studentized range
* @returns evaluated CDF
*/
type Unary = ( q: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a studentized range distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) of a studentized range distribution.
	*
	* @param q - quantile of the studentized range
	* @param r - sample size for range (same for each group)
	* @param v - degrees of freedom
	* @param nranges - number of groups whose maximum range is considered (default: 1)
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 0.5, 3.0, 2.0 );
	* // returns ~0.0644
	*
	* @example
	* var y = cdf( 12.1, 17.0, 2.0 );
	* // returns ~0.913
	*
	* @example
	* var y = cdf( 0.5, 3.0, 2.0, 2 );
	* // returns ~0.01
	*/
	( q: number, r: number, v: number, nranges?: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta`.
	*
	* @param r - sample size for range (same for each group)
	* @param v - degrees of freedom
	* @param nranges - number of groups whose maximum range is considered (default: 1)
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 3.0, 2.0 );
	* var y = mycdf( 3.0 );
	* // returns ~0.712
	*
	* y = mycdf( 1.0 );
	* // returns ~0.216
	*/
	factory( r: number, v: number, nranges?: number ): Unary;
}

/**
* Cumulative distribution function (CDF) of a studentized range distribution.
*
* @param q - quantile of the studentized range
* @param r - sample size for range (same for each group)
* @param v - degrees of freedom
* @param nranges - number of groups whose maximum range is considered (default: 1)
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.1 );
* // returns ~0.611
*
* y = cdf( 1.0, 2.0 );
* // returns ~0.789
*
* y = cdf( -1.0, 4.0 );
* // returns ~0.187
*
* var mycdf = cdf.factory( 3.0, 2.0 );
* y = mycdf( 3.0 );
* // returns ~0.712
*
* y = mycdf( 1.0 );
* // returns ~0.216
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
