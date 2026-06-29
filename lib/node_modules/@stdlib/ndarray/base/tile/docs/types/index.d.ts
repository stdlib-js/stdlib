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

import { ArrayLike } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Returns an ndarray created by repeating the elements of an input ndarray a specified number of times along each dimension.
*
* ## Notes
*
* -   The number of repetitions must have at least as many elements as the number of input dimensions. When the number of repetitions exceeds the number of input dimensions, the input array is treated as if singleton dimensions were prepended.
* -   The function always copies data to a new ndarray.
*
* @param x - input array
* @param reps - number of repetitions along each dimension
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var y = tile( x, [ 2, 2 ] );
* // returns <ndarray>[ [ 1, 2, 1, 2 ], [ 3, 4, 3, 4 ], [ 1, 2, 1, 2 ], [ 3, 4, 3, 4 ] ]
*/
declare function tile<T extends ndarray>( x: T, reps: ArrayLike<number> ): T;


// EXPORTS //

export = tile;
