/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
import { typedndarray } from '@stdlib/types/ndarray';

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
* Circularly shifts the elements of an input ndarray by a specified number of positions along one or more ndarray dimensions.
*
* ## Notes
*
* -   The input ndarray is shifted **in-place** (i.e., the input ndarray is **mutated**).
* -   When shifting elements along a single dimension, a positive `k` shifts elements to the right (toward higher indices), and a negative `k` shifts elements to the left (toward lower indices). If `k` is zero, the input ndarray is left unchanged.
*
* @param x - input ndarray
* @param k - number of positions to shift
* @param options - function options
* @returns input ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0 ], {
*     'shape': [ 2, 2 ],
*     'order': 'row-major'
* });
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var y = circshift( x, 1, {
*     'dims': [ 0 ]
* });
* // returns <ndarray>[ [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
*/
declare function circshift<T extends typedndarray<unknown>>( x: T, k: typedndarray<number> | number, options?: Options ): T;


// EXPORTS //

export = circshift;
