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
* Counts the number of elements that are equal to a given value in an array.
*
* @param x - input array
* @param value - given value
* @returns number of elements that are equal to the given value
*
* @example
* var x = [ 0, 1, 0, 1, 1 ];
*
* var out = countSameValueZero( x, 1 );
* // returns 3
*/
declare function countSameValueZero( x: Collection, value: any ): number;


// EXPORTS //

export = countSameValueZero;
