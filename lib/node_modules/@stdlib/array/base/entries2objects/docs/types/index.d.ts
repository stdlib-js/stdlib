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
* Converts array entries to an array of objects.
*
* ## Notes
*
* -   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.
*
* @param arr - input array
* @param fields - list of field names
* @returns output array
*
* @example
* var x = [ 1, 2, 3 ];
* var fields = [ 'x', 'y' ];
*
* var out = entries2objects( x, fields );
* // returns [ { 'x': 0, 'y': 1 }, { 'x': 1, 'y': 2 }, { 'x': 2, 'y': 3 } ]
*/
declare function entries2objects<T = unknown, U extends PropertyKey = PropertyKey>( arr: Collection<T> | AccessorArrayLike<T>, fields: Collection<U> | AccessorArrayLike<U> ): Array<Record<U, T>>;


// EXPORTS //

export = entries2objects;
