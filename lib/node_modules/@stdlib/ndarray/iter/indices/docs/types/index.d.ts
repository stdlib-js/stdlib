/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
import { Shape, Order } from '@stdlib/types/ndarray';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = TypedIterator<T> | TypedIterableIterator<T>;

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Index iteration order.
	*
	* ## Notes
	*
	* -   By default, the returned iterator iterates over the last dimensions first, thus corresponding to iteration over contiguous data stored in row-major order.
	*/
	order?: Order;
}

/**
* Returns an iterator which returns indices for use indexing into an ndarray having a specified shape.
*
* @param shape - input shape
* @param options - function options
* @param options.order - index iteration order
* @returns iterator
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var iter = nditerIndices( x.shape );
*
* var v = iter.next().value;
* // returns [ 0, 0, 0 ]
*
* v = iter.next().value;
* // returns [ 0, 0, 1 ]
*
* v = iter.next().value;
* // returns [ 0, 1, 0 ]
*
* // ...
*/
declare function nditerIndices( shape: Shape, options?: Options ): Iterator<Array<number>>;


// EXPORTS //

export = nditerIndices;
