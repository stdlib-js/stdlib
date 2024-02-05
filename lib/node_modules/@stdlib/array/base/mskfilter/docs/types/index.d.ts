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

import { Collection } from '@stdlib/types/array';

/**
* Returns a new array by applying a mask to a provided input array.
*
* @param x - input array
* @param mask - mask array
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = mskfilter( x, [ 0, 1, 0, 1 ] );
* // returns [ 2, 4 ]
*/
declare function mskfilter<T = unknown>( x: Collection<T>, mask: Collection ): Array<T>;


// EXPORTS //

export = mskfilter;
