/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { TypedIterator, TypedIterableIterator } from '@stdlib/types/iter';
import { ArrayLike } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = TypedIterator<T> | TypedIterableIterator<T>;

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Boolean indicating whether returned views should be read-only (default: true).
	*
	* ## Notes
	*
	* -   If the input array is read-only, setting this option to `false` raises an exception.
	*/
	readonly?: boolean;
}

/**
* Returns an iterator which iterates over each subarray in a stack of subarrays according to a list of specified stack dimensions.
*
* @param x - input value
* @param dims - indices of dimensions to stack
* @param options - function options
* @param options.readonly - boolean indicating whether returned views should be read-only
* @returns iterator
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var iter = nditerStacks( x, [ 1, 2 ] );
*
* var v = iter.next().value;
* // returns <ndarray>
*
* var arr = ndarray2array( v );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*
* v = iter.next().value;
* // returns <ndarray>
*
* arr = ndarray2array( v );
* // returns [ [ 5, 6 ], [ 7, 8 ] ]
*
* // ...
*/
declare function nditerStacks<T = unknown>( x: typedndarray<T>, dims: ArrayLike<number>, options?: Options ): Iterator<typedndarray<T>>;


// EXPORTS //

export = nditerStacks;
