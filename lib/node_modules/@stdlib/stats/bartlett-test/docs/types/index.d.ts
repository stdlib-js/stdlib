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
	* Array of group indicators.
	*/
	groups?: Array<any>;
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
	* Degrees of freedom.
	*/
	df: number;

	/**
	* Function to print formatted output.
	*/
	print: Function;
}

/**
* Compute Bartlett’s test for equal variances.
*
* @param arr0 - numeric array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.groups - array of group indicators
* @throws must provide at least two array-like arguments if `groups` is not set
* @throws must provide valid options
* @returns test results
*
* @example
* var arr = [
*     2.9, 3.0, 2.5, 2.6, 3.2,
*     3.8, 2.7, 4.0, 2.4,
*     2.8, 3.4, 3.7, 2.2, 2.0
* ];
* var groups = [
*     'a', 'a', 'a', 'a', 'a',
*     'b', 'b', 'b', 'b',
*     'c', 'c', 'c', 'c', 'c'
* ];
* varout = bartlettTest( arr, {
*     'groups': groups
* });
* // returns {...}
*/
declare function bartlettTest( arr0: NumericArray, options?: Options ): Results;

/**
* Compute Bartlett’s test for equal variances.
*
* @param arr0 - first numeric array
* @param arr1 - second numeric array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @throws must provide valid options
* @returns test results
*
* @example
* // Data from Hollander & Wolfe (1973), p. 116:
* var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
* var y = [ 3.8, 2.7, 4.0, 2.4 ];
*
* var out = bartlettTest( x, y );
* // returns {...}
*/
declare function bartlettTest( arr0: NumericArray, arr1: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length

/**
* Compute Bartlett’s test for equal variances.
*
* @param arr0 - first numeric array
* @param arr1 - second numeric array
* @param arr2 - third numeric array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @throws must provide valid options
* @returns test results
*
* @example
* // Data from Hollander & Wolfe (1973), p. 116:
* var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
* var y = [ 3.8, 2.7, 4.0, 2.4 ];
* var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];
*
* var out = bartlettTest( x, y, z );
* // returns {...}
*/
declare function bartlettTest( arr0: NumericArray, arr1: NumericArray, arr2: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length

/**
* Compute Bartlett’s test for equal variances.
*
* @param arr0 - first numeric array
* @param arr1 - second numeric array
* @param arr2 - third numeric array
* @param arr3 - fourth numeric array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @throws must provide valid options
* @returns test results
*/
declare function bartlettTest( arr0: NumericArray, arr1: NumericArray, arr2: NumericArray, arr3: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length

/**
* Compute Bartlett’s test for equal variances.
*
* @param arr0 - first numeric array
* @param args - subsequent numeric arrays and an optional options object
* @throws must provide valid options
* @returns test results
*/
declare function bartlettTest( arr0: NumericArray, ...args: Array<NumericArray | Options> ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = bartlettTest;
