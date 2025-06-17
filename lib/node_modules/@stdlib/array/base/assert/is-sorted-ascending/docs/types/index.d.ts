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
* Tests if an array is sorted in ascending order.
*
* @param x - input array
* @returns boolean indicating if an array is sorted in ascending order
*
* @example
* var out = isSortedAscending( [ 1, 2, 3 ] );
* // returns true
*
* @example
* var out = isSortedAscending( [ 3, 2, 1 ] );
* // returns false
*
* @example
* var out = isSortedAscending( [ 3, 3, 3 ] );
* // returns true
*
* @example
* var out = isSortedAscending( [ 3 ] );
* // returns true
*
* @example
* var out = isSortedAscending( [] );
* // returns false
*
* @example
* var out = isSortedAscending( [ 1, 3, 2 ] );
* // returns false
*/
declare function isSortedAscending( x: Collection | AccessorArrayLike<any> ): boolean;


// EXPORTS //

export = isSortedAscending;
