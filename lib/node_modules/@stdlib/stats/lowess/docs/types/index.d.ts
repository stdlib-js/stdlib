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
	* Smoother span (proportion of points which influence smoothing at each value; default: 2/3).
	*/
	f?: number;

	/**
	* Number of iterations in the robust fit (fewer iterations translates to faster function execution; default: 3).
	*/
	nsteps?: number;

	/**
	* Nonnegative parameter which may be used to reduce the number of computations.
	*/
	delta?: number;

	/**
	* Boolean indicating if the input array `x` is already in sorted order (default: false).
	*/
	sorted?: boolean;
}

/**
* LOWESS output.
*/
interface Output {
	/**
	* Ordered x-values.
	*/
	x: Array<number>;

	/**
	* Fitted values.
	*/
	y: Array<number>;
}


/**
* Locally-weighted polynomial regression via the LOWESS algorithm.
*
* ## References
*
* -   Cleveland, William S. 1979. "Robust Locally and Smoothing Weighted Regression Scatterplots." _Journal of the American Statistical Association_ 74 (368): 829–36. doi:[10.1080/01621459.1979.10481038](https://doi.org/10.1080/01621459.1979.10481038).
* -   Cleveland, William S. 1981. "Lowess: A program for smoothing scatterplots by robust locally weighted regression." _American Statistician_ 35 (1): 54–55. doi:[10.2307/2683591](https://doi.org/10.2307/2683591).
*
* @param x - ordered x-axis values (abscissa values)
* @param y - corresponding y-axis values (ordinate values)
* @param options - function options
* @param options.f - smoother span (proportion of points which influence smoothing at each value)
* @param options.nsteps - number of iterations in the robust fit (fewer iterations translates to faster function execution)
* @param options.delta - nonnegative parameter which may be used to reduce the number of computations
* @param options.sorted - boolean indicating if the input array `x` is already in sorted order
* @throws arguments `x` and `y` must have the same length
* @returns ordered x-values and fitted values
*/
declare function lowess( x: NumericArray, y: NumericArray, options?: Options ): Output; // tslint-disable-line max-line-length


// EXPORTS //

export = lowess;
