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
* Creates an object from a provided list of properties and a provided list of corresponding values.
*
* ## Notes
*
* -   The function assumes that both input arrays are the same length.
*
* @param properties - list of properties
* @param values - list of values
* @returns result
*
* @example
* var properties = [ 1, 2 ];
* var values = [ 3, 4 ];
*
* var out = zip2object( properties, values );
* // returns { '1': 3, '2': 4 }
*/
declare function zip2object<T extends PropertyKey = PropertyKey, U = unknown>( properties: Collection<T> | AccessorArrayLike<T>, values: Collection<U> | AccessorArrayLike<U> ): Record<T, U>;


// EXPORTS //

export = zip2object;
