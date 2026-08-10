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
* Fills a specified diagonal of a matrix (or stack of matrices) with a scalar value.
*
* ## Notes
*
* -   The order of the dimension indices contained in `dims` matters. The first element specifies the row-like dimension. The second element specifies the column-like dimension.
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
* -   The diagonal offset `k` is interpreted as `column - row`. Accordingly, when `k = 0`, the function fills the main diagonal; when `k > 0`, the function fills the diagonal above the main diagonal; and when `k < 0`, the function fills the diagonal below the main diagonal.
* -   The function mutates the input ndarray in-place.
*
* @param x - input array
* @param value - scalar value
* @param dims - dimension indices defining the plane in which to fill the diagonal
* @param k - diagonal offset
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3 ] );
* // returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
*
* var out = fillDiagonal( x, 1.0, [ 0, 1 ], 0 );
* // returns <ndarray>[ [ 1.0, 0.0, 0.0 ], [ 0.0, 1.0, 0.0 ], [ 0.0, 0.0, 1.0 ] ]
*
* var bool = ( out === x );
* // returns true
*/
declare function fillDiagonal<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, value: T, dims: Collection<number>, k: number ): U;


// EXPORTS //

export = fillDiagonal;
