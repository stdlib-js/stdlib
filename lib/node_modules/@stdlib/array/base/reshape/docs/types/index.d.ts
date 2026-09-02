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

import { Array1D, Array2D, Array3D, Array4D, Array5D, Array6D, Array7D, Array8D, Array9D, Array10D } from '@stdlib/types/array';
import { Shape } from '@stdlib/types/ndarray';

/**
* Nested array.
*/
type ArrayND<T> = Array1D<T> | Array2D<T> | Array3D<T> | Array4D<T> | Array5D<T> | Array6D<T> | Array7D<T> | Array8D<T> | Array9D<T> | Array10D<T>; // WARNING: arbitrarily limited to 10 dimensions, which should be fine for most practical purposes

/**
* Reshape a nested array into another nested array having a desired shape.
*
* ## Notes
*
* -   The function assumes that `fromShape` and `toShape` describe arrays have same the number of elements.
*
* @param x - input nested array
* @param fromShape - shape of the input array
* @param toShape - shape of the output array
* @param colexicographic - specifies whether to reshape the array in colexicographic order
* @returns output nested array
*
* @example
* var x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];
*
* var out = reshape( x, [ 2, 3 ], [ 3, 2 ], false );
* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
*/
declare function reshape<T = unknown>( x: ArrayND<T>, fromShape: Shape, toShape: Shape, colexicographic: boolean ): ArrayND<T>;


// EXPORTS //

export = reshape;
