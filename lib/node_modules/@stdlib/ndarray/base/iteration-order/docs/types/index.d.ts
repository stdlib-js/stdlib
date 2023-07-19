/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Returns array iteration order.
*
* ## Notes
*
* -   Return value key:
*
*     -   `0`: unordered (i.e., strides of mixed sign; e.g., `[ 9, -3, 1 ]`)
*     -   `1`: ordered left-to-right (i.e., all nonnegative strides)
*     -   `-1`: ordered right-to-left (i.e., all negative strides)
*
* @param strides - stride array
* @returns iteration order
*
* @example
* var o = iterationOrder( [ 2, 1 ] );
* // returns 1
*
* o = iterationOrder( [ -2, 1 ] );
* // returns 0
*
* o = iterationOrder( [ -2, -1 ] );
* // returns -1
*/
declare function iterationOrder( strides: ArrayLike<number> ): number;


// EXPORTS //

export = iterationOrder;
