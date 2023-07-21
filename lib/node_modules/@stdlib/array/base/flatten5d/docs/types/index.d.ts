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

import { Collection } from '@stdlib/types/object';

/**
* Five-dimensional nested array.
*/
type Array5D<T> = Array<Array<Array<Array<Collection<T>>>>>;

/**
* Flattens a five-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param x - input array
* @param shape - array shape
* @param colexicographic - specifies whether to flatten array values in colexicographic order
* @returns flattened array
*
* @example
* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
*
* var out = flatten5d( x, [ 2, 1, 1, 1, 2 ], false );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
*
* var out = flatten5d( x, [ 2, 1, 1, 1, 2 ], true );
* // returns [ 1, 3, 2, 4 ]
*/
declare function flatten5d<T = unknown>( x: Array5D<T>, shape: Collection<number>, colexicographic: boolean ): Array<T>;


// EXPORTS //

export = flatten5d;
