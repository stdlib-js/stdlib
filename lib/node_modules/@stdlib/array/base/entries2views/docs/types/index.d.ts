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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Property key.
*/
type PropertyKey = string | number | symbol;

/**
* Converts array entries to an array of composite views.
*
* ## Notes
*
* -   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.
* -   For each element of the returned array, the index view field is read-only and cannot be mutated.
*
* @param arr - input array
* @param fields - list of field names
* @returns output array
*
* @example
* var x = [ 1, 2, 3 ];
* var fields = [ 'x', 'y' ];
*
* var out = entries2views( x, fields );
* // returns [ <Object>, <Object>, <Object> ]
*
* var v0 = out[ 0 ].toJSON();
* // returns { 'x': 0, 'y': 1 }
*
* var v1 = out[ 1 ].toJSON();
* // returns { 'x': 1, 'y': 2 }
*
* var v2 = out[ 2 ].toJSON();
* // returns { 'x': 2, 'y': 3 }
*
* // Mutate the input array:
* x[ 0 ] = 5;
*
* v0 = out[ 0 ].toJSON();
* // returns { 'x': 0, 'y': 5 }
*
* // Set a view property:
* out[ 1 ].y = 'beep';
*
* v1 = out[ 1 ].toJSON();
* // returns { 'x': 1, 'y': 'beep' }
*
* var y = x.slice();
* // returns [ 5, 'beep', 3 ]
*/
declare function entries2views<T = unknown, U extends PropertyKey = PropertyKey>( arr: Collection<T> | AccessorArrayLike<T>, fields: Collection<U> | AccessorArrayLike<U> ): Array<Record<U, T>>;


// EXPORTS //

export = entries2views;
