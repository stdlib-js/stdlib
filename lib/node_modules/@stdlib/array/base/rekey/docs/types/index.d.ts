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
* Copies and renames specified keys for every element in a provided array.
*
* ## Notes
*
* -   The function only copies and renames those keys which are present in a provided mapping object. Any keys which are not present in the provided mapping object, but are present in the original objects, are omitted during object creation.
* -   The function assumes that each object has the keys specified in a provided mapping object.
* -   The function performs shallow copies of key values.
*
* @param arr - input array
* @param mapping - object mapping existing keys to new key names
* @returns output array
*
* @example
* var x = [
*     {
*         'x': 1,
*         'y': 2
*     },
*     {
*         'x': 3,
*         'y': 4
*     }
* ];
* var mapping = {
*     'x': 'a',
*     'y': 'b'
* };
*
* var out = rekey( x, mapping );
* // returns [ { 'a': 1, 'b': 2 }, { 'a': 3, 'b': 4 } ]
*/
declare function rekey<T extends Record<PropertyKey, any>, OldKey extends keyof T, Mapping extends Record<OldKey, PropertyKey>>( arr: Collection<T> | AccessorArrayLike<T>, mapping: Mapping ): Array<{ [ K in OldKey as Mapping[K] ]: T[K] }>;


// EXPORTS //

export = rekey;
