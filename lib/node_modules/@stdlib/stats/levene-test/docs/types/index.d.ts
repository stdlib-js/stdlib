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
* Interface defining function options when provided a single numeric array.
*/
interface OptionsWithGroups extends Options {
	/**
	* Significance level (default: 0.05).
	*/
	alpha?: number;

	/**
	* Array of group indicators.
	*/
	groups: Array<any>;
}

/**
* Interface defining print options.
*/
interface PrintOptions {
	/**
	* Number of digits after the decimal point.
	*/
	digits?: number;

	/**
	* Boolean indicating whether to print the test decision.
	*/
	decision?: boolean;
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
	* Prints formatted output.
	*/
	print( options?: PrintOptions ): string;
}

/**
* Computes Levene's test for equal variances.
*
* @param x - numeric array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @param options.groups - array of group indicators
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
* var out = leveneTest( arr, {
*     'groups': groups
* });
* // returns {...}
*/
declare function leveneTest( x: NumericArray, options?: OptionsWithGroups ): Results; // tslint-disable-line max-line-length

/**
* Computes Levene's test for equal variances.
*
* @param x - first numeric array
* @param y - second numeric array
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
* var out = leveneTest( x, y );
* // returns {...}
*/
declare function leveneTest( x: NumericArray, y: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length

/**
* Computes Levene's test for equal variances.
*
* @param x - first numeric array
* @param y - second numeric array
* @param z - third numeric array
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
* var out = leveneTest( x, y, z );
* // returns {...}
*/
declare function leveneTest( x: NumericArray, y: NumericArray, z: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length

/**
* Computes Levene's test for equal variances.
*
* @param x - first numeric array
* @param y - second numeric array
* @param z - third numeric array
* @param w - fourth numeric array
* @param options - function options
* @param options.alpha - significance level (default: 0.05)
* @throws must provide valid options
* @returns test results
*/
declare function leveneTest( x: NumericArray, y: NumericArray, z: NumericArray, w: NumericArray, options?: Options ): Results; // tslint-disable-line max-line-length

/**
* Computes Levene's test for equal variances.
*
* @param x - first numeric array
* @param y - second numeric array
* @param args - subsequent numeric arrays and an optional options object
* @throws must provide valid options
* @returns test results
*/
declare function leveneTest( x: NumericArray, y: NumericArray, ...args: Array<NumericArray | Options> ): Results; // tslint-disable-line max-line-length


// EXPORTS //

export = leveneTest;
