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
import { typedndarray } from '@stdlib/types/ndarray';
import { ArrayLike } from '@stdlib/types/array';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = TypedIterator<T> | TypedIterableIterator<T>;

/**
* Returns an iterator which iterates over interleaved subarrays.
*
* ## Notes
*
* -   The function throws an error if a provided broadcast-incompatible ndarrays.
* -   For input ndarrays supporting read-only views, the function returns *read-only* views of interleaved subarrays. As input ndarrays may be broadcasted, a view is typically *not* contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a subarray, copy the subarray before attempting mutation.
*
* @param arr - input ndarrays
* @param ndims - number of dimensions to stack
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
* var iter = nditerInterleaveSubarrays( [ x, x ], 2 );
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
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*
* // ...
*/
declare function nditerInterleaveSubarrays<T = unknown>( arr: ArrayLike<typedndarray<T>>, ndims: number ): Iterator<typedndarray<T>>;


// EXPORTS //

export = nditerInterleaveSubarrays;
