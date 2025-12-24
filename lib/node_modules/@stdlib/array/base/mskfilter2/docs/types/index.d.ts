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

import { Collection } from '@stdlib/types/array';

/**
* Returns new arrays by applying a mask to two provided input arrays in a single pass.
*
* @param x - first input array
* @param y - second input array
* @param mask - mask array
* @returns output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfilter2( x, y, mask );
* // returns [ [ 2, 4 ], [ 6, 8 ] ]
*/
declare function mskfilter2<T = unknown, U = unknown>( x: Collection<T>, y: Collection<U>, mask: Collection ): [ Array<T>, Array<U> ];


// EXPORTS //

export = mskfilter2;
