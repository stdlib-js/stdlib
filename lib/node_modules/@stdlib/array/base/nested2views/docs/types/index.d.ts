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
* Converts each nested array to a composite view.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length.
* -   The number of provided array labels should equal the length of each nested array.
* -   Each view in the returned array shares the same memory as the corresponding elements in the input arrays. Accordingly, mutation of either a nested array or a view will mutate the other.
*
* @param arr - input array
* @param fields - list of field names
* @returns output array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var fields = [ 'x', 'y' ];
*
* var out = nested2views( x, fields );
* // returns [ <Object>, <Object> ]
*
* var v0 = out[ 0 ].toJSON();
* // returns { 'x': 1, 'y': 2 }
*
* var v1 = out[ 1 ].toJSON();
* // returns { 'x': 3, 'y': 4 }
*
* // Mutate the first nested array:
* x[ 0 ][ 0 ] = 5;
*
* v0 = out[ 0 ].toJSON();
* // returns { 'x': 5, 'y': 2 }
*
* // Set a view property:
* out[ 1 ].y = 'beep';
*
* v1 = out[ 1 ].toJSON();
* // returns { 'x': 3, 'y': 'beep' }
*
* var y = x.slice();
* // returns [ [ 5, 2 ], [ 3, 'beep' ] ]
*/
declare function nested2views<T = unknown, U extends PropertyKey = PropertyKey>( arr: ArrayLike<Collection<T> | AccessorArrayLike<T>>, fields: Collection<U> | AccessorArrayLike<U> ): Array<Record<U, T>>;


// EXPORTS //

export = nested2views;
