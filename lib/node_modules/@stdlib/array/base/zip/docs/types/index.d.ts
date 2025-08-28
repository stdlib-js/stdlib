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

import { Collection, AccessorArrayLike, ArrayLike } from '@stdlib/types/array';

/**
* Zips one or more arrays.
*
* ## Notes
*
* -   The function assumes that the list of arrays to be zipped all have the same length.
*
* @param arrays - list of arrays to be zipped
* @returns output array
*
* @example
* var x = [ 1, 2, 3 ];
* var y = [ 'a', 'b', 'c' ];
*
* var z = zip( [ x, y ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
*/
declare function zip<T = unknown>( arrays: ArrayLike<Collection<T> | AccessorArrayLike<T>> ): Array<Array<T>>;


// EXPORTS //

export = zip;
