/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { Array5D } from '@stdlib/types/array';

/**
* Reverses the order of elements along the last dimension of a five-dimensional nested input array.
*
* ## Notes
*
* -   The function does **not** perform a deep copy of nested array elements.
*
* @param x - input nested array
* @returns output array
*
* @example
* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ] ];
*
* var out = fliplr5d( x );
* // returns [ [ [ [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ] ] ] ]
*/
declare function fliplr5d<T = unknown>( x: Array5D<T> ): Array5D<T>;


// EXPORTS //

export = fliplr5d;
