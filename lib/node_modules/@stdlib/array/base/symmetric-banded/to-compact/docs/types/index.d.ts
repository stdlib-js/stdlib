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
import { MatrixTriangle } from '@stdlib/types/blas';

/**
* Two-dimensional nested array.
*/
type Array2D<T> = Array<Collection<T>>;

/**
* Converts a two-dimensional symmetric banded nested array to compact banded storage.
*
* @param uplo - specifies whether to reference the upper or lower triangular part of the input array
* @param arr - input two-dimensional array
* @param k - number of super-/sub-diagonals
* @param colexicographic - specifies whether to store diagonals in colexicographic access order
* @returns output array
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 2, 12, 4 ],
*     [ 0, 4, 13 ]
* ];
*
* var out = toCompact( 'upper', M, 1, false );
* // returns [ [ 0, 2, 4 ], [ 11, 12, 13 ] ]
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 2, 12, 4 ],
*     [ 0, 4, 13 ]
* ];
*
* var out = toCompact( 'lower', M, 1, false );
* // returns [ [ 11, 12, 13 ], [ 2, 4, 0 ] ]
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 2, 12, 4 ],
*     [ 0, 4, 13 ]
* ];
*
* var out = toCompact( 'upper', M, 1, true );
* // returns [ [ 11, 2 ], [ 12, 4 ], [ 13, 0 ] ]
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 2, 12, 4 ],
*     [ 0, 4, 13 ]
* ];
*
* var out = toCompact( 'lower', M, 1, true );
* // returns [ [ 0, 11 ], [ 2, 12 ], [ 4, 13 ] ]
*/
declare function toCompact<T = unknown>( uplo: MatrixTriangle, arr: Array2D<T>, k: number, colexicographic: boolean ): Array2D<T>;


// EXPORTS //

export = toCompact;
