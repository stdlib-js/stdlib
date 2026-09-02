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
* Zips one or more arrays to an array of composite views.
*
* ## Notes
*
* -   The function assumes that the list of arrays to be zipped all have the same length.
* -   The number of provided array labels should equal the number of arrays to be zipped.
* -   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either an input array or a view will mutate the other.
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
* var z = zip2views( [ x, y ], labels );
* // returns [ <Object>, <Object>, <Object> ]
*
* var v0 = z[ 0 ].toJSON();
* // returns { 'x': 1, 'y': 'a' }
*
* var v1 = z[ 1 ].toJSON();
* // returns { 'x': 2, 'y': 'b' }
*
* var v2 = z[ 2 ].toJSON();
* // returns { 'x': 3, 'y': 'c' }
*
* // Mutate one of the input arrays:
* x[ 0 ] = 5;
*
* v0 = z[ 0 ].toJSON();
* // returns { 'x': 5, 'y': 'a' }
*
* // Set a view property:
* z[ 1 ].y = 'beep';
*
* v1 = z[ 1 ].toJSON();
* // returns { 'x': 2, 'y': 'beep' }
*
* var y1 = y.slice();
* // returns [ 'a', 'beep', 'c' ]
*/
declare function zip2views<T = unknown, U extends PropertyKey = PropertyKey>( arrays: ArrayLike<Collection<T> | AccessorArrayLike<T>>, labels: Collection<U> | AccessorArrayLike<U> ): Array<Record<U, T>>;


// EXPORTS //

export = zip2views;
