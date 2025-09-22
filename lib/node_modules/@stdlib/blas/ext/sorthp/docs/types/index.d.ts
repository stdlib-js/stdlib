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

import { ArrayLike } from '@stdlib/types/array';
import { typedndarray, realndarray, genericndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray = realndarray | genericndarray<number|string>;

/**
* Sort order.
*/
type SortOrder = typedndarray<number> | genericndarray<number> | number | 'descending' | 'desc' | 'ascending' | 'asc';


/**
* Interface defining options.
*/
interface Options {
	/**
	* List of dimensions over which to perform operation.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface for performing an operation on an ndarray.
*/
interface Sorthp {
	/**
	* Sorts an input ndarray along one or more ndarray dimensions using heapsort.
	*
	* ## Notes
	*
	* -   The input ndarray is sorted **in-place** (i.e., the input ndarray is **mutated**).
	* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
	* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
	* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
	* -   The algorithm has space complexity `O(1)` and time complexity `O(N log2 N)`.
	* -   The algorithm is **unstable**, meaning that the algorithm may change the order of ndarray elements which are equal or equivalent (e.g., `NaN` values).
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	*
	* var y = sorthp( x );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ -3.0, -1.0, 2.0 ]
	*/
	<T extends InputArray = InputArray>( x: T, options?: Options ): T;

	/**
	* Sorts an input ndarray along one or more ndarray dimensions using heapsort.
	*
	* ## Notes
	*
	* -   The input ndarray is sorted **in-place** (i.e., the input ndarray is **mutated**).
	* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
	* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
	* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
	* -   The algorithm has space complexity `O(1)` and time complexity `O(N log2 N)`.
	* -   The algorithm is **unstable**, meaning that the algorithm may change the order of ndarray elements which are equal or equivalent (e.g., `NaN` values).
	*
	* @param x - input ndarray
	* @param sortOrder - sort order
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	*
	* var y = sorthp( x, 1.0 );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ -3.0, -1.0, 2.0 ]
	*/
	<T extends InputArray = InputArray>( x: T, sortOrder: SortOrder, options?: Options ): T;
}

/**
* Sorts an input ndarray along one or more ndarray dimensions using heapsort.
*
* ## Notes
*
* -   The input ndarray is sorted **in-place** (i.e., the input ndarray is **mutated**).
* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
* -   The algorithm has space complexity `O(1)` and time complexity `O(N log2 N)`.
* -   The algorithm is **unstable**, meaning that the algorithm may change the order of ndarray elements which are equal or equivalent (e.g., `NaN` values).
*
* @param x - input ndarray
* @param sortOrder - sort order
* @param options - function options
* @returns output ndarray
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ -1.0, 2.0, -3.0 ] );
*
* var y = sorthp( x, 1.0 );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ -3.0, -1.0, 2.0 ]
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ -1.0, 2.0, -3.0 ] );
*
* var y = sorthp( x, 1.0 );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ -3.0, -1.0, 2.0 ]
*/
declare const sorthp: Sorthp;


// EXPORTS //

export = sorthp;
