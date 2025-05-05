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

/**
* Two-dimensional nested array.
*/
type Array2D<T> = Array<Collection<T>>;

/**
* Converts a two-dimensional banded nested array to compact banded storage.
*
* @param arr - input two-dimensional array
* @param ku - number of super-diagonals
* @param kl - number of sub-diagonals
* @param colexicographic - specifies whether to store diagonals in colexicographic access order
* @returns output array
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 3, 12, 4 ],
*     [ 0, 5, 13 ]
* ];
*
* var out = toCompact( M, 1, 1, false );
* // returns [ [ 0, 2, 4 ], [ 11, 12, 13 ], [ 3, 5, 0 ] ]
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 3, 12, 4 ],
*     [ 0, 5, 13 ]
* ];
*
* var out = toCompact( M, 1, 1, true );
* // returns [ [ 0, 11, 3 ], [ 2, 12, 5 ], [ 4, 13, 0 ] ]
*/
declare function toCompact<T = unknown>( arr: Array2D<T>, ku: number, kl: number, colexicographic: boolean ): Array2D<T>;


// EXPORTS //

export = toCompact;
