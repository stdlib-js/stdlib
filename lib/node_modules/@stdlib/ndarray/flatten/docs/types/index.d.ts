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

/// <reference types="@stdlib/types"/>

import { ndarray, typedndarray, Order, DataTypeMap } from '@stdlib/types/ndarray';

/**
* Interface defining "base" function options.
*/
interface BaseOptions {
	/**
	* Maximum number of dimensions to flatten.
	*
	* ## Notes
	*
	* -   By default, the function flattens all input ndarray dimensions.
	*/
	depth?: number;

	/**
	* Order in which input ndarray elements should be flattened.
	*
	* ## Notes
	*
	* -   The following orders are supported:
	*
	*     -   **row-major**: flatten in lexicographic order.
	*     -   **column-major**: flatten in colexicographic order.
	*     -   **same**: flatten according to the stated order of the input ndarray.
	*     -   **any**: flatten according to the physical layout of the input ndarray data in memory, regardless of the stated order of the input ndarray.
	*
	* -   Default: 'row-major'.
	*/
	order?: Order | 'same' | 'any';
}

/**
* Function options.
*/
type Options<U> = BaseOptions & {
	/**
	* Output ndarray data type.
	*/
	dtype: U;
};

/**
* Returns a flattened copy of an input ndarray.
*
* ## Notes
*
* -   The function **always** returns a copy of input ndarray data, even when an input ndarray already has the desired number of dimensions.
* -   By default, the function returns an ndarray having the same data type as a provided input ndarray.
*
* @param x - input ndarray
* @param options - function options
* @param options.depth - maximum number of dimensions to flatten
* @param options.order - order in which input ndarray elements should be flattened
* @param options.dtype - output ndarray data type
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
* // return <ndarray>
*
* var y = flatten( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*/
declare function flatten<T extends ndarray>( x: T, options?: BaseOptions ): T;

/**
* Returns a flattened copy of an input ndarray.
*
* ## Notes
*
* -   The function **always** returns a copy of input ndarray data, even when an input ndarray already has the desired number of dimensions.
*
* @param x - input ndarray
* @param options - function options
* @param options.depth - maximum number of dimensions to flatten
* @param options.order - order in which input ndarray elements should be flattened
* @param options.dtype - output ndarray data type
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
* // return <ndarray>
*
* var y = flatten( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*/
declare function flatten<T = unknown, U extends keyof DataTypeMap<T> = 'generic'>( x: typedndarray<T>, options: Options<U> ): DataTypeMap<T>[U];


// EXPORTS //

export = flatten;
