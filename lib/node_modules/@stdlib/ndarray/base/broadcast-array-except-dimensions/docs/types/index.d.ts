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

import { Collection } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Broadcasts an input ndarray to a target shape while keeping a list of specified dimensions unchanged.
*
* ## Notes
*
* -   The function expects that each index in the list of dimensions is negative in order to ensure that indices correspond to the same relative position in the output ndarray shape. For example, given an input ndarray shape `[2,X1,X2]` and a desired shape `[6,7,2,Y1,Y2]`, a list of negative dimensions `[-2,-1]` correctly maps the unchanged dimensions `X` in the input ndarray to ignored dimensions `Y` in the provided target shape. Nonnegative indices, however, afford no such mapping. For example, the list of dimensions `[1,2]` corresponds to `[X1,X2]` in the input ndarray shape, but to `[7,2]` in the target shape, which is not desired. By expecting negative indices, we avoid confusion and ensure that users always refer to dimensions relative to the last broadcasted dimension.
* -   The function throws an error if a provided ndarray is incompatible with a provided shape.
* -   The returned array is a view on the input array data buffer. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the view may affect multiple elements. If you need to write to the returned array, copy the array before performing operations which may mutate elements.
* -   The returned array is a "base" ndarray, and, thus, the returned array does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to broadcast an ndarray-like object within internal implementations and to do so with minimal overhead.
* -   The function always returns a new ndarray instance even if the input ndarray shape and the desired shape are the same.
*
* @param arr - input array
* @param shape - desired shape
* @param dims - list of dimensions to exclude from broadcasting
* @throws input array cannot have more dimensions than the desired shape
* @throws broadcasted dimensions in the input array and desired shape must be broadcast compatible
* @throws dimension indices must not exceed desired shape bounds
* @throws must provide unique dimension indices
* @returns broadcasted array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var getShape = require( '@stdlib/ndarray/shape' );
*
* var x = array( [ [ 1, 2, 3 ] ] );
* // returns <ndarray>
*
* var shx = getShape( x );
* // returns [ 1, 3 ]
*
* var y = broadcastArrayExceptDimensions( x, [ 2, 2, 3 ], [ -2 ] );
* // returns <ndarray>
*
* var shy = getShape( y );
* // returns [ 2, 1, 3 ]
*
* var v = y.get( 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 1 );
* // returns 2
*
* v = y.get( 0, 0, 2 );
* // returns 3
*
* v = y.get( 1, 0, 0 );
* // returns 1
*
* v = y.get( 1, 0, 1 );
* // returns 2
*
* v = y.get( 1, 0, 2 );
* // returns 3
*/
declare function broadcastArrayExceptDimensions<T = unknown, U extends typedndarray<T> = typedndarray<T>>( arr: U, shape: Collection<number>, dims: Collection<number> ): U;


// EXPORTS //

export = broadcastArrayExceptDimensions;
