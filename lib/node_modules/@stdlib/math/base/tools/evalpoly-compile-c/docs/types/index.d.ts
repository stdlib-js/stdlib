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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Input value floating-point data type (e.g., `double` or `float`). Default: `'double'`.
	*/
	dtype?: 'double' | 'float';

	/**
	* Function name. Default: `'evalpoly'`.
	*/
	name?: string;
}

/**
* Compiles a C function string for evaluating a polynomial.
*
* @param c - polynomial coefficients sorted in ascending degree
* @param options - function options
* @returns function string for evaluating a polynomial
*
* @example
* var str = compile( [ 3.0, 2.0, 1.0 ] );
* // returns <string>
*/
declare function compile( c: Collection<number>, options?: Options ): string;


// EXPORTS //

export = compile;
