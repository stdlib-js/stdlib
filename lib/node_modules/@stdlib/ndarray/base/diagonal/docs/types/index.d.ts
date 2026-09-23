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

import { Collection } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Returns a view of the diagonal of a matrix (or stack of matrices).
*
* ## Notes
*
* -   The order of the dimension indices contained in `dims` matters. The first element specifies the row-like dimension. The second element specifies the column-like dimension.
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
* -   The diagonal offset `k` is interpreted as `column - row`. Accordingly, when `k = 0`, the function returns the main diagonal; when `k > 0`, the function returns the diagonal above the main diagonal; and when `k < 0`, the function returns the diagonal below the main diagonal.
* -   The returned ndarray is a **view** of the input ndarray. Accordingly, writing to the original ndarray will **mutate** the returned ndarray and vice versa.
* -   The `writable` parameter **only** applies to ndarray constructors supporting **read-only** instances.
*
* @param x - input array
* @param dims - dimension indices defining the plane from which to extract the diagonal
* @param k - diagonal offset
* @param writable - boolean indicating whether the returned ndarray should be writable
* @returns ndarray view
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ], [ 7.0, 8.0, 9.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ], [ 7.0, 8.0, 9.0 ] ]
*
* var y = diagonal( x, [ 0, 1 ], 0, false );
* // returns <ndarray>[ 1.0, 5.0, 9.0 ]
*/
declare function diagonal<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, dims: Collection<number>, k: number, writable: boolean ): U;


// EXPORTS //

export = diagonal;
