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
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Callback invoked for each ndarray element.
*
* @param acc - accumulated result
* @param value - current ndarray element
* @returns result
*/
type Callback<T = unknown, U = unknown> = ( acc: T, value: U ) => T;

/**
* Performs a reduction over elements in an ndarray.
*
* @param arrays - array-like object containing one input ndarray
* @param initial - initial value
* @param clbk - callback function
* @returns accumulated result
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function add( acc, x ) {
*     return acc + x;
* }
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Compute the sum:
* var v = accumulateUnary( [ x ], 0.0, add );
* // returns 39.0
*/
declare function accumulateUnary<T = unknown, U = unknown>( arrays: ArrayLike<typedndarray<U>>, initial: T, clbk: Callback<T, U> ): T;


// EXPORTS //

export = accumulateUnary;
