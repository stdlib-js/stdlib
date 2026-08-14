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
* Property key.
*/
type PropertyKey = string | number | symbol;

/**
* Zips one or more arrays to an array of objects.
*
* ## Notes
*
* -   The function assumes that the list of arrays to be zipped all have the same length.
* -   The number of provided array labels should equal the number of arrays to be zipped.
*
* @param arrays - list of arrays to be zipped
* @param labels - list of array labels
* @returns output array
*
* @example
* var x = [ 1, 2, 3 ];
* var y = [ 'a', 'b', 'c' ];
*
* var labels = [ 'x', 'y' ];
*
* var z = zip2objects( [ x, y ], labels );
* // returns [ { 'x': 1, 'y': 'a' }, { 'x': 2, 'y': 'b' }, { 'x': 3, 'y': 'c' } ]
*/
declare function zip2objects<T = unknown, U extends PropertyKey = PropertyKey>( arrays: ArrayLike<Collection<T> | AccessorArrayLike<T>>, labels: Collection<U> | AccessorArrayLike<U> ): Array<Record<U, T>>;


// EXPORTS //

export = zip2objects;
