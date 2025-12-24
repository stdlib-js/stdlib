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

import { ndarray } from '@stdlib/types/ndarray';
import { Collection } from '@stdlib/types/array';

/**
* Expands the shape of an array to a specified dimensionality by spreading its dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.
*
* ## Notes
*
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`. If provided a negative dimension index, the position at which to place a respective dimension is computed as `ndims + index`.
* -   Provided dimension indices must resolve to normalized dimension indices arranged in ascending order.
*
* @param ndims - number of dimensions in the output array
* @param x - input array
* @param dims - dimension indices
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 2, 2 ]
*
* var y = spreadDimensions( 5, x, [ 1, 3 ] );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 1, 2, 1, 2, 1 ]
*
* var v = y.get( 0, 0, 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 0, 1, 0 );
* // returns 2
*
* v = y.get( 0, 1, 0, 0, 0 );
* // returns 3
*
* v = y.get( 0, 1, 0, 1, 0 );
* // returns 4
*/
declare function spreadDimensions<T extends ndarray>( ndims: number, x: T, dims: Collection<number> ): T;


// EXPORTS //

export = spreadDimensions;
