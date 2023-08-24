/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Returns the Cartesian square.
*
* ## Notes
*
* -   If provided an empty array, the function returns an empty array.
*
* @param x - input array
* @returns Cartesian product
*
* @example
* var x = [ 1, 2 ];
*
* var out = cartesianSquare( x );
* // returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
*/
declare function cartesianSquare<T = unknown>( x: Collection<T> ): Array<Array<T>>;


// EXPORTS //

export = cartesianSquare;
