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
* Rotates an ndarray 180 degrees in a specified plane.
*
* ## Notes
*
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
*
* @param x - input array
* @param dims - dimension indices defining the plane of rotation
* @param writable - boolean indicating whether the returned ndarray should be writable
* @returns ndarray view
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var y = rot180( x, [ 0, 1 ], false );
* // returns <ndarray>[ [ 4, 3 ], [ 2, 1 ] ]
*/
declare function rot180<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, dims: Collection<number>, writable: boolean ): U;


// EXPORTS //

export = rot180;
