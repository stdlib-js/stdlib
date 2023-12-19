/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { Collection, Complex64Array, Complex128Array } from '@stdlib/types/array';

/**
* Returns the index of the last element which equals a provided search element.
*
* ## Notes
*
* -   The function scans an input array from the starting index to the beginning of the array (i.e., backward).
* -   If unable to find an element which equals a provided search element, the function returns `-1`.
* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.
*
* @param x - input array
* @param searchElement - search element
* @param fromIndex - starting index (inclusive)
* @param equalNaNs - boolean indicating whether NaNs should be considered equal
* @returns index
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var idx = lastIndexOf( x, 2, 3, false );
* // returns 1
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var idx = lastIndexOf( x, 2, 3, false );
* // returns 1
*/
declare function lastIndexOf( x: Collection | Complex64Array | Complex128Array, searchElement: any, fromIndex: number, equalNaNs: boolean ): number;


// EXPORTS //

export = lastIndexOf;
