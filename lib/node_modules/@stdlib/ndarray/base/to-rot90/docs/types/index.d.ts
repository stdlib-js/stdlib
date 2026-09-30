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

import { typedndarray } from '@stdlib/types/ndarray';
import { Collection } from '@stdlib/types/array';

/**
* Returns a new ndarray where an ndarray is rotated 90 degrees in a specified plane.
*
* ## Notes
*
* -   If `k > 0`, the function rotates the plane from the first specified dimension toward the second specified dimension. This means that, for a two-dimensional ndarray and `dims = [0, 1]`, the function rotates the plane counterclockwise.
* -   If `k < 0`, the function rotates the plane from the second specified dimension toward the first specified dimension. This means that, for a two-dimensional ndarray and `dims = [0, 1]`, the function rotates the plane clockwise.
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
*
* @param x - input array
* @param dims - dimension indices defining the plane of rotation
* @param k - number of times to rotate by 90 degrees
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var y = toRot90( x, [ 0, 1 ], 1 );
* // returns <ndarray>[ [ 2, 4 ], [ 1, 3 ] ]
*/
declare function toRot90<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, dims: Collection<number>, k: number ): U;


// EXPORTS //

export = toRot90;
