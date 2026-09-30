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
import { ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Assigns elements from a broadcasted input ndarray to a specified diagonal of an output ndarray.
*
* ## Notes
*
* -   The order of the dimension indices contained in `dims` matters. The first element specifies the row-like dimension. The second element specifies the column-like dimension.
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
* -   The diagonal offset `k` is interpreted as `column - row`. Accordingly, when `k = 0`, the function assigns to the main diagonal; when `k > 0`, the function assigns to a diagonal above the main diagonal; and when `k < 0`, the function assigns to a diagonal below the main diagonal.
* -   The input ndarray must be broadcast compatible with the output ndarray view defined by the specified diagonal.
*
* @param arrays - array-like object containing one input array and one output array
* @param dims - dimension indices defining the plane in which to assign elements to the diagonal
* @param k - diagonal offset
* @returns output ndarray
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = scalar2ndarray( 1.0 );
* // returns <ndarray>
*
* var y = zeros( [ 3, 3 ] );
* // returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
*
* var out = assignDiagonal( [ x, y ], [ 0, 1 ], 0 );
* // returns <ndarray>[ [ 1.0, 0.0, 0.0 ], [ 0.0, 1.0, 0.0 ], [ 0.0, 0.0, 1.0 ] ]
*
* var bool = ( out === y );
* // returns true
*/
declare function assignDiagonal<T = unknown, U extends typedndarray<T> = typedndarray<T>>( arrays: [ ndarray, U ], dims: Collection<number>, k: number ): U;


// EXPORTS //

export = assignDiagonal;
