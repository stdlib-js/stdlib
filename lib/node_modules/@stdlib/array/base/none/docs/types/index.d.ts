/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Tests whether all elements in an array are falsy.
*
* ## Notes
*
* -   The function immediately returns upon encountering a truthy value.
* -   If provided an empty collection, the function returns `true`.
*
* @param x - input array
* @returns boolean indicating whether all elements are falsy
*
* @example
* var x = [ 0, 0, 0, 0 ];
*
* var out = none( x );
* // returns true
*/
declare function none<T = unknown>( x: Collection<T> | AccessorArrayLike<T> ): boolean;


// EXPORTS //

export = none;
